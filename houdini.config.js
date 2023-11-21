/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: process.env.VITE_GRAPHQL_ENDPOINT || 'https://readonlydemo.vendure.io/shop-api',
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
