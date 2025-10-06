import { Block } from 'payload'

export const NavigationBarBlock: Block = {
  slug: 'navigationBar',
  admin: {
    group: 'Navigation',
  },
  labels: {
    singular: 'Navigation Bar',
    plural: 'Navigation Bars',
  },
  interfaceName: 'NavigationBarBlock',
  fields: [
    {
      name: 'navigationItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Link (ex: /product or full URL — leave empty to create a dropdown menu)',
          type: 'text',
          admin: {
            condition: (data, siblingData) => !siblingData?.items || siblingData.items.length === 0,
          },
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Dropdown Items',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              label: 'Link (ex: /product or full URL)',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Action Buttons',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Link (ex: /product or full URL)',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Destructive', value: 'destructive' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
            { label: 'Outline', value: 'outline' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'default',
        },
      ],
    },
  ],
}
