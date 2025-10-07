import { Block } from 'payload'

export const FooterTwoBlock: Block = {
  slug: 'footerTwoBlock',
  admin: {
    group: 'Footer',
  },
  labels: {
    singular: 'Footer Two Block',
    plural: 'Footer Two Blocks',
  },
  interfaceName: 'FooterTwoBlock',
  fields: [
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Links (ex: Give pathname or full url)',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: 'Phone:',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'Email:',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Instagram', value: 'instagram' },
          ],
        },
        {
          name: 'url',
          label: 'Links (ex: Give pathname or full url)',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'bottomLinks',
      type: 'array',
      label: 'Bottom Navigation Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Links (ex: Give pathname or url full link)',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2024 Your Company. All rights reserved.',
    },
  ],
}
