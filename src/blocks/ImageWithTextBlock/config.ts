import { Block } from 'payload'

export const ImageWithTextBlock: Block = {
  slug: 'imageWithText',
  labels: {
    singular: 'Image With Text',
    plural: 'Image With Text Blocks',
  },
  admin: {
    group: 'Content Blocks',
  },
  fields: [
    {
      name: 'badge',
      label: 'Badge',
      type: 'text',
      defaultValue: 'About us',
      admin: {
        description: 'A short label displayed above the title, e.g. “About Us” or “Our Story”.',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      admin: {
        description: 'Main heading of this section.',
      },
    },
    {
      name: 'description',
      label: 'Main Description',
      type: 'textarea',
      admin: {
        description: 'The main body text or introductory description.',
      },
    },
    {
      name: 'additionalParagraphs',
      type: 'array',
      label: 'Additional Paragraphs',
      labels: {
        singular: 'Paragraph',
        plural: 'Paragraphs',
      },
      admin: {
        description: 'Add one or more supporting paragraphs below the main description.',
      },
      fields: [
        {
          name: 'text',
          label: 'Paragraph Text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main image displayed in the background or left side of the section.',
      },
    },
    {
      name: 'foregroundImage',
      label: 'Foreground Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional image layered over the background image.',
      },
    },
    {
      name: 'button',
      label: 'Button',
      type: 'group',
      admin: {
        description: 'Optional call-to-action button with label and link.',
      },
      fields: [
        {
          name: 'label',
          label: 'Button Label',
          type: 'text',
          defaultValue: 'Get more info',
        },
        {
          name: 'href',
          label: 'Button Link (ex: /home or full URL)',
          type: 'text',
        },
      ],
    },
  ],
}
