/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"errors"
	"fmt"
	"os"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var rootCmd = &cobra.Command{
	Use:   "lism-ui-vue",
	Short: "LismUI-VueのCLI",
	Long:  "LismUI-VueのCLIです。",
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
		// ヘルプや初期化コマンド自体の場合はスキップ
		if cmd.Name() == "help" || cmd.Name() == "completion" || cmd.Name() == "init" || !cmd.HasParent() {
			return nil
		}

		viper.SetConfigFile("lism-ui-vue.config.yaml")
		viper.SetConfigType("yaml")
		if err := viper.ReadInConfig(); err != nil {
			var configFileNotFoundError viper.ConfigFileNotFoundError
			if errors.As(err, &configFileNotFoundError) {
				pterm.Warning.Println("設定ファイル (lism-ui-vue.config.yaml) が見つかりません。")
				result, _ := pterm.DefaultInteractiveConfirm.
					WithDefaultValue(true).
					Show("新たに作成しますか？")

				if result {
					// init コマンドのロジックを実行
					initCmd.Run(cmd, args)
					// 作成された設定ファイルを読み込む
					return viper.ReadInConfig()
				}
				return fmt.Errorf("このコマンドの実行には設定ファイルが必要です")
			}
			return fmt.Errorf("error reading config file: %w", err)
		}
		return nil
	},
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")

	// 呼び出し元の名前に応じて表示を変更
	if name := os.Getenv("LISM_VUE_CLI_NAME"); name != "" {
		rootCmd.Use = name
	}
}
