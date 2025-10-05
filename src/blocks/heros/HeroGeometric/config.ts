import { Block } from 'payload'

export const HeroGeometricBlock: Block = {
  slug: 'heroGeometricBlock',
  admin: {
    group: 'Hero',
  },
  labels: {
    singular: 'Hero Geometric Block',
    plural: 'Hero Geometric Blocks',
  },
  interfaceName: 'HeroGeometricBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
    },
    {
      name: 'title1',
      type: 'text',
    },
    {
      name: 'title2',
      type: 'text',
    },
    {
      name: 'paragraph',
      type: 'textarea',
    },
  ],
}
