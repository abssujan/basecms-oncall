import type {
  Dashboard,
  Footer,
  FooterTwo,
  Header,
  HeaderWithDropDown,
  Page,
} from '@/payload-types'
import { CallToActionBlock } from './CallToAction/Component'
import { HighImpactHeroBlock } from './heros/HighImpact/Component'
import { MediumImpactHeroBlock } from './heros/MediumImpact/Component'
import { LowImpactHeroBlock } from './heros/LowImpact/Component'
import { ContentBlock } from './Content/Component'
import { MediaBlock } from './MediaBlock/Component'
import { CodeBlock } from './Code/Component'
import { BannerBlock } from './Banner/Component'
import { NavBlock } from './Nav/Component'
import { FooterBlockComponent } from './Footer/Component'
import { ArchiveBlock } from './ArchiveBlock/Component'
import { FormBlock } from './Form/Component'
import { PricingTableBlock } from './PricingTable/Component'
import { BillingPortalBlock } from './BillingPortal/Component'
import { LoginBlock } from './Login/Component'
import { LogoutBlock } from './Logout/Component'
import { RegisterBlock } from './Register/Component'
import { ForgotPasswordBlock } from './ForgotPassword/Component'
import { ResetPasswordBlock } from './ResetPassword/Component'
import { AccountNameBlock } from './Account/Name/Component'
import { AccountPasswordBlock } from './Account/Password/Component'
import { AccordionBlock } from './Accordion/Component'
import { CarouselBlock } from './Carousel/Component'
import { HeroGeometricComponent } from './heros/HeroGeometric/component'
import { NavigationBarComponent } from './Navigationbar/component'
import { FooterBlockTwoComponent } from './FooterTwo/component'
import { ImageWithTextComponent } from './ImageWithTextBlock/component'
import { ServiceComponent } from './ServiceBlock/component'
import { InfoSectionComponent } from './InfoSection/component'
import { ContentShowcaseComponent } from './ContentShowcase/component'

type LayoutBlock =
  | Page['layout'][number]
  | Dashboard['layout'][number]
  | Header['layout'][number]
  | Footer['layout'][number]
  | HeaderWithDropDown['layout'][number]
  | FooterTwo['layout'][number]
type BlockType = LayoutBlock['blockType']

// Map each blockType to its component with the correctly narrowed props
type BlockComponentMap = {
  [K in BlockType]?: React.ComponentType<Extract<LayoutBlock, { blockType: K }>>
}

const blockComponents: BlockComponentMap = {
  cta: CallToActionBlock,
  highImpactHero: HighImpactHeroBlock,
  mediumImpactHero: MediumImpactHeroBlock,
  lowImpactHero: LowImpactHeroBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
  code: CodeBlock,
  banner: BannerBlock,
  nav: NavBlock,
  footerBlock: FooterBlockComponent,
  archive: ArchiveBlock,
  formBlock: FormBlock,
  pricingTable: PricingTableBlock,
  billingPortal: BillingPortalBlock,
  loginBlock: LoginBlock,
  logoutBlock: LogoutBlock,
  registerBlock: RegisterBlock,
  forgotPasswordBlock: ForgotPasswordBlock,
  resetPasswordBlock: ResetPasswordBlock,
  accountName: AccountNameBlock,
  accountPassword: AccountPasswordBlock,
  accordion: AccordionBlock,
  carousel: CarouselBlock,
  heroGeometricBlock: HeroGeometricComponent,
  navigationBar: NavigationBarComponent,
  footerTwoBlock: FooterBlockTwoComponent,
  imageWithText: ImageWithTextComponent,
  serviceBlock: ServiceComponent,
  infoSection: InfoSectionComponent,
  contentShowcase: ContentShowcaseComponent,
}

// Generic helper preserves the specific block subtype
function getBlockComponent<B extends LayoutBlock>(block: B) {
  return blockComponents[block.blockType] as React.ComponentType<B> | undefined
}

export const RenderBlocks: React.FC<{ blocks: LayoutBlock[] }> = ({ blocks }) => {
  if (!Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Block = getBlockComponent(block)
        if (!Block) return null

        return <Block key={index} {...block} />
      })}
    </>
  )
}
