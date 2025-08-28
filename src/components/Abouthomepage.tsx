// Abouthomepage Component
// Generated: 2025-08-28T09:41:55.674Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.5

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Hammer, 
  Users, 
  Award, 
  Clock,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Scissors
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      description: "We honor traditional cobbling techniques passed down through generations, ensuring every repair meets the highest standards of quality and durability."
    },
    {
      icon: Scissors,
      title: "Precision & Detail",
      description: "Every stitch, every cut, every restoration is performed with meticulous attention to detail, bringing your beloved shoes back to their former glory."
    },
    {
      icon: Heart,
      title: "Customer Devotion",
      description: "Your satisfaction is our passion. We treat every pair of shoes as if they were our own, delivering results that exceed expectations."
    },
    {
      icon: Clock,
      title: "Timeless Excellence",
      description: "From vintage classics to modern favorites, we preserve the legacy of fine footwear for generations to come."
    }
  ]

  const stats = [
    { value: "1987", label: "Established", icon: Award },
    { value: "15K+", label: "Shoes Restored", icon: Users },
    { value: "98%", label: "Customer Satisfaction", icon: TrendingUp },
    { value: "35+", label: "Years Experience", icon: Clock }
  ]

  const team = [
    {
      name: "Master Giovanni",
      role: "Master Cobbler & Founder",
      image: "MG",
      bio: "Third-generation cobbler with 35+ years perfecting the art of shoe restoration."
    },
    {
      name: "Elena Martinez",
      role: "Leather Restoration Specialist", 
      image: "EM",
      bio: "Expert in exotic leather repair and color matching with 20 years experience."
    },
    {
      name: "Thomas Wright",
      role: "Sole Reconstruction Expert",
      image: "TW",
      bio: "Specializes in resoling and structural repairs for luxury and vintage footwear."
    },
    {
      name: "Sarah Chen",
      role: "Quality Assurance Manager",
      image: "SC",
      bio: "Ensures every restoration meets our exacting standards before returning to clients."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Heritage
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Preserving the Art of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Fine Shoe Craftsmanship
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over three decades, Master's Sole Revival has been the trusted guardian of fine footwear, 
            combining time-honored techniques with modern expertise to restore your cherished shoes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1987 by Master Giovanni, a third-generation cobbler from Italy, Master's Sole Revival 
                began as a small workshop dedicated to preserving the dying art of traditional shoe repair.
              </p>
              <p>
                What started as a passion for saving discarded footwear has grown into the city's premier 
                destination for luxury shoe restoration, serving discerning professionals and fashion enthusiasts 
                who understand the value of quality craftsmanship.
              </p>
              <p>
                Today, we're proud to have restored over 15,000 pairs of shoes, from vintage collectibles 
                to modern designer pieces, each one receiving the same meticulous care and attention.
              </p>
            </div>
            <Button className="group">
              Discover Our Services
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every shoe tells a story. Our job is to ensure that story continues for generations."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Master Giovanni, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide our craftsmanship and define our dedication to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Master Craftspeople</h3>
            <p className="text-muted-foreground">
              Meet the skilled artisans who bring decades of experience to every restoration project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My vintage Italian loafers were completely worn out. Master's Sole Revival didn't just repair them - 
                they brought them back to life. The craftsmanship is absolutely exceptional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RH
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Harrison</div>
                  <div className="text-sm text-muted-foreground">Executive, Fashion Industry</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}