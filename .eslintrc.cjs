module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'prettier/prettier': 'error',
		'react/prop-types': 'off',
	},
};
