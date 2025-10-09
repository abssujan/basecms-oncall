import { Block } from 'payload'

export const ContentShowcase: Block = {
  slug: 'contentShowcase',
  labels: {
    singular: 'Content Showcase',
    plural: 'Content Showcases',
  },
  admin: {
    group: 'Content Blocks',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge / Small Heading',
      required: true,
      admin: {
        description: 'A short label or category displayed above the title (e.g., “Our Mission”).',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      admin: {
        description: 'The main headline for this section.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        description: 'Add a short paragraph describing this section.',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      admin: {
        description: 'Text for the call-to-action button (optional).',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      admin: {
        description: 'URL or page link for the button (optional).',
      },
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      admin: {
        description: 'Add one or more images to display in the shuffle grid on the right.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image File',
          required: true,
        },
      ],
    },
  ],
}
