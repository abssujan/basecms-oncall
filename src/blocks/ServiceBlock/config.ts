import { Block } from 'payload'

export const ServiceBlock: Block = {
  slug: 'serviceBlock',
  labels: { singular: 'Service Block', plural: 'Service Blocks' },
  admin: {
    group: 'Content Blocks',
  },
  fields: [
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
    },
  ],
}
