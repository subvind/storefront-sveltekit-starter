import { dev } from '$app/environment'
import { handleGraphiql } from '@kitql/all-in'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(
  // Add graphiql
  handleGraphiql({
    endpoint: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'https://vendure.brokenrecord.store/shop-api',
    enabled: dev,
  })
)
