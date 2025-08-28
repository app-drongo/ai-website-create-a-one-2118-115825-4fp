// Services Component
// Generated: 2025-08-28T09:41:55.674Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Hammer,
  Scissors,
  Sparkles,
  Shield,
  Clock,
  Award,
  Wrench,
  Palette
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "leather-restoration",
      title: "Premium Leather Restoration",
      description: "Revive worn leather with expert conditioning and refinishing",
      longDescription: "Our master craftsmen specialize in restoring premium leather footwear to its original beauty. Using traditional techniques and high-quality materials, we repair scuffs, cracks, and discoloration while preserving the leather's natural character.",
      icon: Sparkles,
      benefits: [
        "Deep conditioning and moisturizing",
        "Color matching and refinishing",
        "Crack repair and prevention",
        "Waterproofing treatment"
      ],
      pricing: "Starting at $45",
      timeline: "3-5 business days",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "sole-replacement",
      title: "Custom Sole Replacement",
      description: "Complete sole reconstruction with premium materials",
      longDescription: "When your favorite shoes need new life from the ground up, our sole replacement service provides durable, comfortable solutions. We work with leather, rubber, and specialty materials to match your lifestyle needs.",
      icon: Hammer,
      benefits: [
        "Goodyear welt reconstruction",
        "Premium leather and rubber soles",
        "Custom grip patterns available",
        "Heel height adjustments"
      ],
      pricing: "Starting at $85",
      timeline: "7-10 business days"
    },
    {
      id: "heel-repair",
      title: "Professional Heel Repair",
      description: "Quick and precise heel restoration and replacement",
      longDescription: "From worn-down heels to broken stilettos, our heel repair service ensures your shoes maintain their elegance and stability. We offer same-day service for most heel repairs.",
      icon: Wrench,
      benefits: [
        "Same-day service available",
        "Height matching for pairs",
        "Reinforcement for durability",
        "Style preservation"
      ],
      pricing: "Starting at $25",
      timeline: "Same day - 2 days",
      badge: "Quick Service"
    },
    {
      id: "shoe-cleaning",
      title: "Deep Cleaning & Conditioning",
      description: "Professional cleaning that preserves and protects",
      longDescription: "Our comprehensive cleaning service goes beyond surface dirt to deep-clean, condition, and protect your investment footwear. Perfect for maintaining luxury shoes and extending their lifespan.",
      icon: Palette,
      benefits: [
        "Deep cleaning all materials",
        "Stain removal expertise",
        "Conditioning treatments",
        "Protective finishing"
      ],
      pricing: "Starting at $35",
      timeline: "1-2 business days",
      badge: "Maintenance"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Master Cobbler Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Expert Craftsmanship for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Every Shoe Repair Need
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional shoe repair and restoration services that honor traditional craftsmanship while meeting modern quality standards
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Service
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need Expert Advice?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which service your shoes need? Our master cobbler will assess your footwear and recommend the best restoration approach.
          </p>
          <Button size="lg">
            Get Free Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}