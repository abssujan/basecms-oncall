import { seoFields } from '@/fields/seo'
import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  admin: {
    useAsTitle: 'serviceName',
    group: 'Content', // Optional: or “Business” if you want a business group
    description:
      'Manage all services offered by your business, including pricing, areas, and layout content.',
    defaultColumns: ['serviceName', 'startingPrice', 'serviceArea', 'variant'],
    preview: (doc) => `/services/${doc?.serviceId || doc?.id}`,
  },
  fields: [
    {
      name: 'serviceName',
      label: 'Service Name',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the name of the service as you want it displayed to users.',
      },
    },
    {
      name: 'shortDescription',
      label: 'Short Description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief summary shown in cards and previews.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startingPrice',
          label: 'Starting Price',
          type: 'text',
          admin: {
            width: '50%',
            placeholder: '$99 or ৳5000',
          },
        },
        {
          name: 'responseTime',
          label: 'Average Response Time',
          type: 'text',
          admin: {
            width: '50%',
            placeholder: 'e.g. Within 24 hours',
          },
        },
      ],
    },
    {
      name: 'serviceArea',
      label: 'Service Coverage Area',
      type: 'text',
      admin: {
        description: 'Specify the region or area where this service is available.',
      },
    },
    {
      name: 'badges',
      label: 'Highlights / Badges',
      type: 'array',
      labels: {
        singular: 'Badge',
        plural: 'Badges',
      },
      admin: {
        description: 'Add short labels like “24/7 Support” or “Top Rated”.',
      },
      fields: [
        {
          name: 'label',
          label: 'Badge Label',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      label: 'Service Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload a main image that represents this service.',
      },
    },
    {
      name: 'variant',
      label: 'Display Style',
      type: 'select',
      options: [
        { label: 'Featured (Large Highlight)', value: 'featured' },
        { label: 'Default (Standard Card)', value: 'default' },
        { label: 'Compact (Small Display)', value: 'compact' },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Choose how this service will appear on the website.',
      },
    },
    {
      name: 'serviceId',
      label: 'Service ID',
      type: 'text',
      unique: true,
      admin: {
        description: 'Unique identifier for the service. Can be auto-generated or manually set.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: false,
              required: false,
              blockReferences: [
                'cta',
                'highImpactHero',
                'mediumImpactHero',
                'lowImpactHero',
                'content',
                'mediaBlock',
                'code',
                'banner',
                'nav',
                'footerBlock',
                'archive',
                'formBlock',
              ],
              blocks: [],
              admin: {
                initCollapsed: true,
                description: 'Build your page layout by adding content blocks below.',
              },
            },
          ],
        },
        seoFields,
      ],
    },
  ],
}
