// app/services/[id]/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Media, Service } from '@/payload-types'

// SVG Icons
const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

function getMediaUrl(media: number | Media | string | null | undefined): string {
  if (!media) return '/placeholder.png'
  if (typeof media === 'number') return '/placeholder.png' // cannot render number directly
  if (typeof media === 'string') return media
  return media.url || media.transformedUrl || media.originalUrl || '/placeholder.png'
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string | number }>
}) {
  const { id } = await params
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    limit: 50,
  })

  const service = services.docs.find((s: Service) => s.id.toString() === id.toString())

  // console.log(service)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href={{ pathname: '/' }}>
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formBlock = service.layout?.find((block: any) => block.blockType === 'formBlock')
  const mediaBlock = service.layout?.find((block: any) => block.blockType === 'mediaBlock')
  // console.log('service.layout:', service.layout)

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        <img
          src={getMediaUrl(service?.image)}
          alt={service.serviceName}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          loading="lazy"
        />
        {/* <Media className="-z-10 object-cover" fill resource={service.image?.url} /> */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <Link
              href={{ pathname: '/' }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
            >
              <ArrowLeftIcon />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service?.serviceName}</h1>
            <p className="text-xl text-white/90 mb-6">{service?.shortDescription}</p>
            <div className="flex items-center gap-6">
              <Badge className="bg-primary text-primary-foreground px-3 py-1">
                {service?.startingPrice}
              </Badge>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span className="font-semibold">{service?.id || 0}</span>
              </div>
              <span className="text-white/80">Response: {service?.responseTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* formate it for grid or two section but now I render just block */}
        <div className="">
          {/* Left Column */}
          <div className="">
            {/* Features */}
            <div className="max-w-4xl mx-auto mt-10">
              <section className="relative pt-24 pb-16 mt-10">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                  {/* Title */}
                  <h2
                    className="text-4xl md:text-5xl font-bold tracking-tight 
      text-gray-900 dark:text-gray-100 mb-6 leading-tight"
                  >
                    Our Services
                  </h2>

                  {/* Description */}
                  <p
                    className="text-lg text-gray-600 dark:text-gray-400 
      max-w-2xl mx-auto leading-relaxed"
                  >
                    Expert mechanic services ensuring reliability, performance, and care for every
                    vehicle...
                  </p>

                  {/* Decorative Accent Line */}
                  <div className="mt-10 flex justify-center">
                    <span className="w-20 h-1 rounded-full bg-orange-500 dark:bg-orange-400"></span>
                  </div>
                </div>

                {/* Optional Subtle Background Decoration */}
                <div
                  className="absolute inset-0 -z-10 
    bg-[radial-gradient(circle_at_center,rgba(255,237,213,0.3)_0%,transparent_70%)] 
    dark:bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1)_0%,transparent_70%)]"
                ></div>
              </section>
              <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-center text-2xl">{service.serviceName}</CardTitle>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {service.badges && service.badges.length > 0 ? (
                    <div className="grid gap-3 md:grid-cols-2">
                      {service.badges.map((badge, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <CheckIcon />
                          </div>
                          <span className="text-sm font-medium">{badge.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-sm text-muted-foreground">No badges available</p>
                  )}
                </CardContent>
              </Card>
            </div>
            {service.layout?.length ? (
              <RenderBlocks blocks={service.layout} />
            ) : (
              <p className="text-gray-500">No content available</p>
            )}

            {/* Booking Sidebar could also have steps if stored in Payload */}
            {/* For now, skipping steps unless they are added in CMS */}
          </div>

          {/* Booking Sidebar */}
          {/* <div className="lg:col-span-1">
            {mediaBlock && <RenderBlocks blocks={[mediaBlock]} />}
            {formBlock && <RenderBlocks blocks={[formBlock]} />}
          </div> */}
        </div>
      </div>
    </div>
  )
}
