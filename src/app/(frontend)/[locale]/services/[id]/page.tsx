// app/services/[id]/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'

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

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    limit: 50,
  })

  const service = services.docs.find((s: any) => s.serviceId === id)
  console.log(service)

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
  console.log('service.layout:', service.layout)

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        <img
          src={service.image?.url || '/placeholder.svg'}
          alt={service.serviceName}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          loading="lazy"
        />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.serviceName}</h1>
            <p className="text-xl text-white/90 mb-6">{service.shortDescription}</p>
            <div className="flex items-center gap-6">
              <Badge className="bg-primary text-primary-foreground px-3 py-1">
                {service.startingPrice}
              </Badge>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span className="font-semibold">{service.avgRating || 0}</span>
              </div>
              <span className="text-white/80">Response: {service.responseTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>What&rsquos Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.badges?.map((badge: any, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckIcon />
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <RenderBlocks blocks={service.layout || []} />

            {/* Booking Sidebar could also have steps if stored in Payload */}
            {/* For now, skipping steps unless they are added in CMS */}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            {/* <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Book This Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 border-b">
                  <div className="text-3xl font-bold text-primary">{service.startingPrice}</div>
                  <div className="text-sm text-muted-foreground">Starting price</div>
                </div>

                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="vehicle">Vehicle Information</Label>
                    <Input id="vehicle" placeholder="Year, Make, Model" />
                  </div>

                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Describe your issue or special requirements"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Schedule Service
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Response time: {service.responseTime}</p>
                  <p>Available 24/7 for emergencies</p>
                </div>
              </CardContent>
            </Card> */}

            {mediaBlock && <RenderBlocks blocks={[mediaBlock]} />}
            {formBlock && <RenderBlocks blocks={[formBlock]} />}
          </div>
        </div>
      </div>
    </div>
  )
}
