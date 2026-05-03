/*
Copyright © 2026 Eita Kobayashi <eita@pitamai.com>
*/
package cmd

import (
	"github.com/spf13/cobra"
)

// templateCmd represents the template command
var templateCmd = &cobra.Command{
	Use:   "template",
	Short: "各種テンプレートを使用したプロジェクトの初期化を行います。",
	Long:  `Nuxtなど、各種フレームワークのテンプレートを使用してLismUI-Vueを導入したプロジェクトを初期化します。`,
}

func init() {
	rootCmd.AddCommand(templateCmd)
}
