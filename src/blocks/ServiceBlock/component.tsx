import { getPayload } from 'payload'
import config from '@/payload.config'
import ServiceCard from '@/components/ServiceCard'

export async function ServiceComponent() {
  const payload = await getPayload({ config })

  const services = await payload.find({
    collection: 'services',
    limit: 10,
    depth: 1,
  })

  console.log('Services fetched:', services)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.docs?.map((service) => (
            <ServiceCard
              key={`grid-${service.id}`}
              id={service.id?.toString()}
              serviceName={service.serviceName}
              shortDescription={service.shortDescription}
              startingPrice={service.startingPrice}
              // avgRating={service.avgRating ?? 4.5} // fallback if not in CMS
              // jobsCompleted={service.jobsCompleted || 0}
              responseTime={service.responseTime}
              serviceArea={service.serviceArea}
              badges={service.badges?.map((b: any) => (typeof b === 'string' ? b : b.label))}
              image={typeof service.image === 'object' ? service.image : null}
              variant={service.variant || 'default'}
              serviceId={service.serviceId}
              buttons={service.buttons ?? []}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
