import { Block } from 'payload'

export const MapBlock: Block = {
  slug: 'map',
  labels: {
    singular: 'Map',
    plural: 'Maps',
  },
  admin: {
    group: 'Maps',
  },
  fields: [
    {
      name: 'popup',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter the text to display in the map popup',
        description: 'The text that appears when a user clicks on the map marker.',
      },
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'lat',
          type: 'number',
          required: true,
          admin: {
            placeholder: 'Enter latitude',
            description: 'Latitude coordinate for the map marker (e.g., 23.75385)',
          },
        },
        {
          name: 'lng',
          type: 'number',
          required: true,
          admin: {
            placeholder: 'Enter longitude',
            description: 'Longitude coordinate for the map marker (e.g., 90.35974)',
          },
        },
      ],
    },
    {
      name: 'style',
      type: 'group',
      fields: [
        {
          name: 'height',
          type: 'text',
          admin: {
            placeholder: 'Ex: 500px',
            description: 'Set the height of the map container.',
          },
        },
        {
          name: 'width',
          type: 'text',
          admin: {
            placeholder: 'Ex: 100%',
            description: 'Set the width of the map container.',
          },
        },
      ],
    },
    {
      name: 'zoom',
      type: 'number',
      required: true,
      admin: {
        placeholder: 'Ex: 14',
        description: 'Map zoom level (1/20). Higher values zoom closer.',
      },
    },
  ],
}
