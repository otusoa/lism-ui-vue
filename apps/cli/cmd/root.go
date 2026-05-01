/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "lism-ui-vue",
	Short: "LismUI-VueのCLI",
	Long:  "LismUI-VueのCLIです。",
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	// 呼び出し元の名前に応じて表示を変更
	if name := os.Getenv("LISM_VUE_CLI_NAME"); name != "" {
		rootCmd.Use = name
	}
}
