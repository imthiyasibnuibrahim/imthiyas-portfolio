import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { post } from './post'
import { product } from './product'
import { portfolioItem } from './portfolioItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, post, product, portfolioItem],
}
