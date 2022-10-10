module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
	ignorePatterns: ["dist"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/no-deprecated-slot-attribute": "off",
		"no-shadow": "error",
		"no-nested-ternary": 0,
		"no-use-before-define": 0,
		"global-require": 0,
		"no-underscore-dangle": 0,
		"consistent-return": 0,
		"no-param-reassign": 0,
		"no-plusplus": 0,
		"import/extensions": 0,
		"import/prefer-default-export": 0,
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
