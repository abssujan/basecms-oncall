import { admin } from '@/access/admin'
import { anyone } from '@/access/anyone'
import { revalidateCacheTag } from '@/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const FooterTwo: GlobalConfig = {
  slug: 'footerTwo',
  admin: {
    group: 'Settings',
  },
  access: {
    read: anyone,
    update: admin,
  },
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      label: false,
      blockReferences: ['footerTwoBlock'],
      blocks: [],
      required: true,
      admin: { initCollapsed: true },
    },
  ],
  hooks: {
    afterChange: [revalidateCacheTag('global_footer')],
  },
}
