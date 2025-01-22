import { type SchemaTypeDefinition } from 'sanity'
import  products  from './product'
import { categorySchema } from './categories'
import { sellerSchema } from './sellerSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, categorySchema, sellerSchema],
}