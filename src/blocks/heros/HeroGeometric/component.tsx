import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { HeroGeometricBlock } from '@/payload-types'

export const HeroGeometricComponent: React.FC<HeroGeometricBlock> = ({
  title1,
  title2,
  badge,
  paragraph,
}) => {
  return (
    <div className="relative mt-[5.4rem] min-h-[90vh] flex items-center bg-gradient-to-br from-background to-muted">
      <HeroGeometric badge={badge} title1={title1} title2={title2} paragraph={paragraph} />
    </div>
  )
}
