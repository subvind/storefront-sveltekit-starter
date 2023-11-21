/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'https://readonlydemo.vendure.io/shop-api',
	plugins: {
		'houdini-svelte': {
			client: './src/client',
		},
	},
	scalars: {
		DateTime: {
			type: 'string',
		},
	},
	defaultFragmentMasking: true,
}

export default config
