import { Block } from 'payload'

export const NavigationBarBlock: Block = {
  slug: 'navigationBar',
  dbName: 'navBar', // <-- short DB name for Postgres
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
      dbName: 'navItems', // <-- short DB name
      type: 'array',
      label: 'Navigation Items',
      admin: { initCollapsed: true },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'href',
          label: 'Link (ex: /product or full URL — leave empty to create a dropdown menu)',
          type: 'text',
          admin: {
            condition: (data, siblingData) => !siblingData?.items || siblingData.items.length === 0,
          },
        },
        { name: 'description', type: 'textarea' },
        {
          name: 'items',
          dbName: 'dropdown', // <-- short DB name
          type: 'array',
          label: 'Dropdown Items',
          admin: { initCollapsed: true },
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'href',
              label: 'Link (ex: /product or full URL)',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'buttons',
      dbName: 'btns', // <-- short DB name
      type: 'array',
      label: 'Action Buttons',
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', label: 'Link (ex: /product or full URL)', type: 'text', required: true },
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
      maxRows: 6,
    },
  ],
}
