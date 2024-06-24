import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'blockchain-clone',

  projectId: 'b9qtr1ua',
  dataset: 'production',

  token:
      'skkRgNoZ5SqLJK9MRs6DYbD9M94Xf8nZKVsgkotuk06GXZWM1QFQImTAU57jTiUtqYvGz4Et3spEynqY44xZ0c6aZkmXtPbGHGVH5nx20LuwYflRswybcDkID6xZLa7GNCyDQLPz94RWVGUVrcjqP86cITbBCu5n7RkfUqS5dCyPMzyQNqqK',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
