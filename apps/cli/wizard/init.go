package wizard

import (
	"fmt"
	"strings"

	"github.com/pterm/pterm"
)

type InitConfig struct {
	PackageManager string
	OutputDir      string
	Template       string
}

// RunInitWizard は初期化のための対話形式ウィザードを実行します。
func RunInitWizard(packageManager string, useTemplate bool) (InitConfig, error) {
	config := InitConfig{
		PackageManager: packageManager,
	}

	if useTemplate {
		selected, err := pterm.DefaultInteractiveSelect.
			WithFilter(false).
			WithMaxHeight(5).
			WithOptions([]string{"basic", "starter"}).
			WithDefaultOption("basic").
			Show("使用するテンプレートを選択してください:")
		if err != nil {
			return config, fmt.Errorf("ウィザードがキャンセルされました。")
		}
		config.Template = selected
	}

	outputDir, err := pterm.DefaultInteractiveTextInput.
		WithDefaultValue("src/components").
		Show("出力先のディレクトリの指定をしてください。")
	if err != nil {
		return config, fmt.Errorf("ウィザードがキャンセルされました。")
	}

	outputDir = strings.TrimSpace(outputDir)
	if outputDir == "" {
		return config, fmt.Errorf("出力先ディレクトリは必須です。")
	}
	config.OutputDir = outputDir

	return config, nil
}

// AskPackageManager は使用するパッケージマネージャーをユーザーに選択させます。
func AskPackageManager() (string, error) {

	options := []string{"npm", "pnpm", "yarn", "bun", "その他(直接入力)"}
	selected, err := pterm.DefaultInteractiveSelect.
		WithFilter(false).
		WithOptions(options).
		WithDefaultOption("npm").
		Show("使用するパッケージマネージャーを選択してください:")

	if err != nil {
		return "", fmt.Errorf("パッケージマネージャーの選択がキャンセルされました。")
	}

	if selected == "その他(直接入力)" {
		custom, err := pterm.DefaultInteractiveTextInput.
			Show("パッケージマネージャー名を入力してください (例: bower)")
		if err != nil {
			return "", fmt.Errorf("入力がキャンセルされました。")
		}
		custom = strings.TrimSpace(custom)
		if custom == "" {
			return "", fmt.Errorf("パッケージマネージャー名は必須です。")
		}
		return custom, nil
	}

	return selected, nil
}

// AskOverwrite は上書きの確認をユーザーに求めます。
func AskOverwrite(configName string) (bool, error) {
	result, err := pterm.DefaultInteractiveConfirm.
		WithDefaultValue(false).
		Show(fmt.Sprintf("設定ファイル「%s」が既に存在します。上書きしますか？", configName))
	if err != nil {
		return false, fmt.Errorf("上書きの確認がキャンセルされました。")
	}
	return result, nil
}
