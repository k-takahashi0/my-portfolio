'use strict'

module.exports = {
	env: {
		node: true,
		es2021: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'react/prop-types': 0,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 0,
				'react/display-name': 0,
				'@typescript-eslint/no-namespace': 0,
				'@typescript-eslint/ban-ts-comment': 0,
			},
		},
	],
}
