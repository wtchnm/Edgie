import tailwindcss from '@tailwindcss/vite'
import solid from 'vite-plugin-solid'
import { defineConfig, lazyPlugins } from 'vite-plus'

// oxlint-disable import/no-default-export
export default defineConfig({
	fmt: {
		arrowParens: 'avoid',
		bracketSameLine: true,
		jsdoc: true,
		jsxSingleQuote: true,
		objectWrap: 'collapse',
		semi: false,
		singleQuote: true,
		sortImports: true,
		sortTailwindcss: true,
		trailingComma: 'none',
		useTabs: true
	},
	lint: {
		categories: {
			correctness: 'error',
			nursery: 'error',
			pedantic: 'error',
			perf: 'error',
			restriction: 'error',
			style: 'error',
			suspicious: 'error'
		},
		env: { browser: true },
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }, 'eslint-plugin-solid'],
		options: { typeAware: true, typeCheck: true },
		plugins: [
			'eslint',
			'import',
			'jsdoc',
			'jsx-a11y',
			'node',
			'oxc',
			'promise',
			'typescript',
			'unicorn'
		],
		rules: {
			'vite-plus/prefer-vite-plus-imports': 'error',

			'solid/components-return-once': 'error',
			'solid/event-handlers': 'error',
			'solid/imports': 'error',
			'solid/jsx-no-duplicate-props': 'error',
			'solid/jsx-no-script-url': 'error',
			'solid/jsx-no-undef': ['error', { typescriptEnabled: true }],
			'solid/jsx-uses-vars': 'error',
			'solid/no-array-handlers': 'error',
			'solid/no-destructure': 'error',
			'solid/no-innerhtml': 'error',
			'solid/no-react-deps': 'error',
			'solid/no-react-specific-props': 'error',
			'solid/no-unknown-namespaces': 'error',
			'solid/prefer-for': 'error',
			'solid/prefer-show': 'error',
			'solid/reactivity': 'error',
			'solid/self-closing-comp': 'error',
			'solid/style-prop': 'error',

			'import/no-named-export': 'off',
			'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
			'import/prefer-default-export': 'off',

			'typescript/explicit-function-return-type': 'off',
			'typescript/explicit-module-boundary-types': 'off',

			'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],

			'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
			'sort-imports': 'off',
			'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true, natural: true }]
		}
	},
	plugins: lazyPlugins(() => [solid(), tailwindcss()]) ?? [],
	staged: { '*': 'vp check --fix' }
})
