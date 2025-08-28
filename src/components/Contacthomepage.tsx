// Contacthomepage Component
// Generated: 2025-08-28T09:41:55.674Z
// Template: contact-c001
// Context: Homepage
// Position: pages.0.sections.6

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Scissors,
  Wrench
} from "lucide-react"

export default function Contacthomepage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shoeType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Consultation",
      description: "Send photos for repair estimate",
      contact: "repairs@mastersolerevival.com",
      action: "Send Photos"
    },
    {
      icon: Phone,
      title: "Call Our Craftsmen",
      description: "Speak with master cobblers",
      contact: "+1 (555) COBBLER",
      action: "Call Workshop"
    },
    {
      icon: MessageSquare,
      title: "Repair Consultation",
      description: "Discuss restoration options",
      contact: "Available Mon-Sat",
      action: "Start Consultation"
    }
  ]

  const workshops = [
    {
      city: "Downtown Atelier",
      address: "142 Craftsman Boulevard, Heritage District",
      timezone: "Mon-Sat 8AM-7PM"
    },
    {
      city: "Uptown Studio",
      address: "89 Artisan Square, Professional Quarter",
      timezone: "Tue-Sat 9AM-6PM"
    },
    {
      city: "Westside Workshop",
      address: "256 Leather Lane, Fashion District",
      timezone: "Mon-Fri 8AM-6PM"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Scissors className="size-3 mr-2" />
            Expert Consultation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Restore Your Shoes to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Perfect Condition
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to breathe new life into your favorite footwear? Our master cobblers 
            are here to discuss your restoration needs and provide expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Request Repair Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your shoes and we'll provide a detailed restoration plan within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="shoeType" className="block text-sm font-medium mb-2">
                    Type of Footwear
                  </label>
                  <select
                    id="shoeType"
                    name="shoeType"
                    value={formData.shoeType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select shoe type...</option>
                    <option value="dress-shoes">Dress Shoes</option>
                    <option value="boots">Boots</option>
                    <option value="sneakers">Premium Sneakers</option>
                    <option value="loafers">Loafers</option>
                    <option value="heels">High Heels</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Describe the Repair Needed *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe the condition of your shoes, any damage, or specific restoration needs. Include brand and material if known..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Request Free Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Wrench className="size-5 text-primary" />
                Connect with Our Craftsmen
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Workshop Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Workshop Locations
              </h3>
              <div className="space-y-3">
                {workshops.map((workshop, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">{workshop.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{workshop.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary">
                        {workshop.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Hours */}
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Workshop Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Scissors className="size-4" />
                    Emergency repairs available for business professionals
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}