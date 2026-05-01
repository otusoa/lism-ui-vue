/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

type PackageJSON struct {
	Dependencies    map[string]string `json:"dependencies"`
	DevDependencies map[string]string `json:"devDependencies"`
}

var checkCmd = &cobra.Command{
	Use:   "check",
	Short: "プロジェクトのセットアップ状況を確認します。",
	Long:  `LismUI-Vueが正しくインストールされ、設定されているかを確認します。`,
	Run: func(cmd *cobra.Command, args []string) {

		allPassed := true

		// 設定ファイルの読み込み (root.go で skip しているため手動で読み込む)
		viper.SetConfigFile("lism-ui-vue.config.yaml")
		viper.SetConfigType("yaml")
		_ = viper.ReadInConfig() // エラーは無視して進む (後ほど個別にチェックするため)

		pkgManager := viper.GetString("packageManager")
		if pkgManager == "" {
			pkgManager = "npm"
		}

		installCmd := "install"
		if pkgManager != "npm" {
			installCmd = "add"
		}

		// 1. package.json の確認
		pterm.Info.Println("package.json を確認しています...")
		pkgData, err := os.ReadFile("package.json")
		if err != nil {
			pterm.Error.Println("package.json が見つかりません。Node.jsプロジェクトのルートで実行してください。")
			allPassed = false
		} else {
			var pkg PackageJSON
			if err := json.Unmarshal(pkgData, &pkg); err != nil {
				pterm.Error.Printfln("package.json の解析に失敗しました: %v", err)
				allPassed = false
			} else {
				// Nuxt関連の確認
				isNuxt := false
				if _, ok := pkg.Dependencies["nuxt"]; ok {
					isNuxt = true
				} else if _, ok := pkg.DevDependencies["nuxt"]; ok {
					isNuxt = true
				}

				// lism-ui-vue の確認
				version, ok := pkg.Dependencies["lism-ui-vue"]
				if !ok {
					version, ok = pkg.DevDependencies["lism-ui-vue"]
				}

				if ok {
					pterm.Success.Printfln("lism-ui-vue がインストールされています (version: %s)", version)
				} else if isNuxt && (pkg.Dependencies["@lism-ui-vue/nuxt"] != "" || pkg.DevDependencies["@lism-ui-vue/nuxt"] != "") {
					pterm.Warning.Println("@lism-ui-vue/nuxt が依存関係にあるため、lism-ui-vue のチェックをスキップします(同梱されているため)。")
					allPassed = false
				} else {
					pterm.Warning.Println("lism-ui-vue が依存関係に見つかりません。")
					pterm.Info.Printfln("  実行してください: %s %s lism-ui-vue", pkgManager, installCmd)
					allPassed = false
				}

				if isNuxt {
					pterm.Info.Println("Nuxtプロジェクトであることを検知しました。追加のチェックを行います...")
					nuxtModVersion, ok := pkg.Dependencies["@lism-ui-vue/nuxt"]
					if !ok {
						nuxtModVersion, ok = pkg.DevDependencies["@lism-ui-vue/nuxt"]
					}

					if ok {
						pterm.Success.Printfln("@lism-ui-vue/nuxt がインストールされています (version: %s)", nuxtModVersion)
					} else {
						pterm.Warning.Println("@lism-ui-vue/nuxt が依存関係に見つかりません。")
						pterm.Info.Printfln("  実行してください: %s %s @lism-ui-vue/nuxt", pkgManager, installCmd)
						allPassed = false
					}

					// nuxt.config.ts の確認
					checkNuxtConfig()
				}
			}
		}

		// 2. 設定ファイルの確認
		pterm.Info.Println("設定ファイルを確認しています...")
		if _, err := os.Stat("lism-ui-vue.config.yaml"); err == nil {
			pterm.Success.Println("lism-ui-vue.config.yaml が見つかりました。")
		} else {
			pterm.Warning.Println("lism-ui-vue.config.yaml が見つかりません。")
			pterm.Info.Printfln("  実行してください:  %s %s init", pkgManager, installCmd)
			allPassed = false
		}

		fmt.Println()
		if allPassed {
			pterm.Success.Println("すべてのチェックをパスしました! LismUI-Vueを使用する準備が整っています!")
		} else {
			pterm.Warning.Println("いくつかの項目で修正が必要です。上記のメッセージを確認してください。")
		}
	},
}

func checkNuxtConfig() {
	configPath := "nuxt.config.ts"
	if _, err := os.Stat(configPath); err != nil {
		configPath = "nuxt.config.js"
		if _, err := os.Stat(configPath); err != nil {
			pterm.Warning.Println("nuxt.config.ts/js が見つかりません。")
			return
		}
	}

	data, err := os.ReadFile(configPath)
	if err != nil {
		pterm.Error.Printfln("%s の読み込みに失敗しました: %v", configPath, err)
		return
	}

	content := string(data)
	if strings.Contains(content, "@lism-ui-vue/nuxt") {
		pterm.Success.Printfln("%s に @lism-ui-vue/nuxt が追加されています。", configPath)
	} else {
		pterm.Warning.Printfln("%s に @lism-ui-vue/nuxt が追加されていないようです。", configPath)
		pterm.Info.Println("  modules 配列に '@lism-ui-vue/nuxt' を追加してください。")
	}
}

func init() {
	rootCmd.AddCommand(checkCmd)
}
