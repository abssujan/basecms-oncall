import { Block } from 'payload'

export const InfoSection: Block = {
  slug: 'infoSection',
  admin: {
    group: 'Content Blocks',
  },
  labels: {
    singular: 'Info Section',
    plural: 'Info Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
