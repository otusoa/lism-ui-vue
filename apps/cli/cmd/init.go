/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"os"

	"lism-vue/wizard"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// initCmd represents the init command
var initCmd = &cobra.Command{
	Use:   "init",
	Short: "LismUI-Vueの設定ファイルを生成します。",
	Run: func(cmd *cobra.Command, args []string) {
		useTemplate, _ := cmd.Flags().GetBool("template")

		// パッケージマネージャーの選択
		pkgManager, err := wizard.AskPackageManager()
		if err != nil {
			pterm.Error.Println(err)
			os.Exit(1)
		}

		// ウィザードの実行
		config, err := wizard.RunInitWizard(pkgManager, useTemplate)
		if err != nil {
			pterm.Error.Println(err)
			os.Exit(0) // 正常にキャンセルされた場合は 0 で終了させる
		}

		if config.Template != "" {
			pterm.Info.Printfln("テンプレート「%s」が選択されました。(実装は未完了)", config.Template)
		}

		viper.Set("packageManager", config.PackageManager)
		viper.Set("outputDir", config.OutputDir)
		if config.Template != "" {
			viper.Set("template", config.Template)
		}

		// yaml 形式で保存
		configName := "lism-ui-vue.config.yaml"

		// すでにファイルがあったら上書き警告を出す
		if _, err := os.Stat(configName); err == nil {
			overwrite, err := wizard.AskOverwrite(configName)
			if err != nil {
				pterm.Error.Println(err)
				os.Exit(0)
			}
			if !overwrite {
				pterm.Info.Println("キャンセルしました。")
				return
			}
			pterm.Success.Println("上書き(オーバーライド)します。")
		}

		viper.SetConfigFile(configName)
		viper.SetConfigType("yaml")

		err = viper.WriteConfigAs(configName)
		if err != nil {
			pterm.Error.Printfln("設定ファイルの作成に失敗しました: %v", err)
			os.Exit(1)
			return
		}

		pterm.Success.Printfln("設定ファイルを作成しました: %s", configName)
	},
}

func init() {
	rootCmd.AddCommand(initCmd)

	// --template フラグの追加
	initCmd.Flags().BoolP("template", "t", false, "テンプレートを選択して初期化します")
}
