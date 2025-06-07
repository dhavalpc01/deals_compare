"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px] opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your Ultimate Travel Companion
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-muted-foreground max-w-[600px] mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Book tickets, find the best deals, and explore amazing destinations all in one place. Start your journey
                with TravelEase today.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" asChild>
                <Link href="/bus-booking">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Travel Illustration"
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 w-40">
                <div className="text-sm font-medium">Popular Destinations</div>
                <div className="text-xs text-muted-foreground mt-1">Explore 1000+ destinations</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-background rounded-lg shadow-lg p-4 w-40">
                <div className="text-sm font-medium">Best Offers</div>
                <div className="text-xs text-muted-foreground mt-1">Save up to 40% on bookings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
