/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"

	"lism-vue/wizard"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
)

// nuxtCmd represents the nuxt command
var nuxtCmd = &cobra.Command{
	Use:   "nuxt",
	Short: "Nuxtプロジェクト向けの初期設定を行います。",
	Long:  `NuxtプロジェクトにおいてLismUI-Vueを使用するための設定ファイルやディレクトリ構造を初期化します。`,
	Run: func(cmd *cobra.Command, args []string) {
		// プロジェクト名 (ディレクトリ) の取得
		var projectName string
		if len(args) > 0 {
			projectName = args[0]
		} else {
			name, err := pterm.DefaultInteractiveTextInput.
				WithDefaultValue("nuxt-app").
				Show("プロジェクト名 (ディレクトリ名) を入力してください")
			if err != nil {
				pterm.Error.Println("キャンセルされました")
				os.Exit(0)
			}
			projectName = name
		}

		// パッケージマネージャーの選択
		pkgManager, err := wizard.AskPackageManager()
		if err != nil {
			pterm.Error.Println(err)
			os.Exit(0)
		}

		pterm.Info.Printfln("%s create nuxt@latest %s を実行します...", pkgManager, projectName)

		// 選択されたパッケージマネージャーを使用して実行
		createArgs := []string{"create", "nuxt@latest", projectName}
		if len(args) > 1 {
			createArgs = append(createArgs, args[1:]...)
		}
		createCmd := exec.Command(pkgManager, createArgs...)

		// 入出力を現在のターミナルに接続（対話的なプロンプトを表示させるため）
		createCmd.Stdout = os.Stdout
		createCmd.Stderr = os.Stderr
		createCmd.Stdin = os.Stdin

		err = createCmd.Run()
		if err != nil {
			pterm.Error.Printfln("Nuxtの作成に失敗しました: %v", err)
			os.Exit(1)
		}

		pterm.Success.Println("Nuxtプロジェクトの作成が完了しました。良いNuxtライフを!")

		// --- 追加のセットアップ ---
		projectPath := projectName

		// 1. ライブラリの追加
		spinnerAdd, _ := pterm.DefaultSpinner.Start("LismUI-Vue関連のライブラリを追加しています...")
		// pnpm以外の場合は install 指定にするなどの考慮も必要だが、npm, pnpm 等の基本にあわせる
		addArgs := []string{"add", "lism-ui-vue@latest", "@lism-ui-vue/nuxt@latest"}
		if pkgManager == "npm" {
			addArgs = []string{"install", "lism-ui-vue@latest", "@lism-ui-vue/nuxt@latest"}
		}

		addCmd := exec.Command(pkgManager, addArgs...)
		addCmd.Dir = projectPath
		if err := addCmd.Run(); err != nil {
			spinnerAdd.Warning(fmt.Sprintf("ライブラリの追加に失敗しました。コマンド '%s %s' を手動で実行してください: %v", pkgManager, strings.Join(addArgs, " "), err))
		} else {
			spinnerAdd.Success("ライブラリを追加しました。")
		}

		// 2. nuxt.config.ts をいじってモジュールを追加
		spinnerUpdate, _ := pterm.DefaultSpinner.Start("nuxt.config.ts を更新しています...")
		configPath := filepath.Join(projectPath, "nuxt.config.ts")
		if err := addNuxtModule(configPath); err != nil {
			spinnerUpdate.Warning(fmt.Sprintf("nuxt.config.ts の自動更新に失敗しました。手動で '@lism-ui-vue/nuxt' を modules に追加してください: %v", err))
		} else {
			spinnerUpdate.Success("nuxt.config.ts を更新しました。")
		}
	},
}

// addNuxtModule は nuxt.config.ts に '@lism-ui-vue/nuxt' を追加します
func addNuxtModule(path string) error {
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	content := string(data)
	moduleName := "@lism-ui-vue/nuxt"

	// すでに追加されているかチェック
	if strings.Contains(content, moduleName) {
		return nil
	}

	// modules 配列を探す
	reModules := regexp.MustCompile(`(?s)modules\s*:\s*\[([^\]]*)\]`)
	if reModules.MatchString(content) {
		content = reModules.ReplaceAllStringFunc(content, func(m string) string {
			match := reModules.FindStringSubmatch(m)
			inner := strings.TrimSpace(match[1])
			if inner == "" {
				return "modules: ['" + moduleName + "']"
			}
			if !strings.HasSuffix(inner, ",") {
				inner += ","
			}
			return "modules: [" + inner + " '" + moduleName + "']"
		})
	} else {
		// modules がない場合は defineNuxtConfig の中に追加
		reConfig := regexp.MustCompile(`defineNuxtConfig\(\{`)
		if reConfig.MatchString(content) {
			content = reConfig.ReplaceAllString(content, "defineNuxtConfig({\n  modules: ['"+moduleName+"'],")
		} else {
			return fmt.Errorf("defineNuxtConfig が見つかりませんでした")
		}
	}

	return os.WriteFile(path, []byte(content), 0644)
}

func init() {
	templateCmd.AddCommand(nuxtCmd)
}
