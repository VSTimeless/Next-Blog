"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PhotoProps {
  src: string
  alt: string
  category: string
  description?: string
}

const photos: PhotoProps[] = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "City skyline at sunset",
    category: "Urban",
    description: "Downtown skyline captured during golden hour",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Macro shot of a circuit board",
    category: "Tech",
    description: "Close-up detail of a custom PCB design",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mountain landscape",
    category: "Nature",
    description: "Mountain view during a hiking trip last summer",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Oscilloscope display",
    category: "Tech",
    description: "Capturing signal patterns during a lab experiment",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sunset over lake",
    category: "Nature",
    description: "Peaceful evening by the lake",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Close-up of electronic components",
    category: "Tech",
    description: "Macro photography of resistors and capacitors",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "City street at night",
    category: "Urban",
    description: "Neon lights reflecting off wet pavement after rain",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Forest path",
    category: "Nature",
    description: "Sunlight filtering through trees on a forest trail",
  },
  {
    src: "/placeholder.svg?height=800&width=600",
    alt: "Robotics project",
    category: "Tech",
    description: "A small robot I built during a weekend project",
  },
]

const categories = [...new Set(photos.map((photo) => photo.category))]

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPhotos = selectedCategory ? photos.filter((photo) => photo.category === selectedCategory) : photos

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Photography</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Photography allows me to capture the beauty in technology and the world around us. Here's a collection of some
        of my favorite shots.
      </p>

      <div className="flex gap-2 mb-8">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <Badge variant="outline" className="mb-2">
                {photo.category}
              </Badge>
              <p className="text-sm">{photo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Photography Equipment</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Camera</h3>
              <p>Sony Alpha a6400 Mirrorless Camera</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Lenses</h3>
              <ul className="space-y-1">
                <li>Sony 16-50mm f/3.5-5.6 OSS (Kit lens)</li>
                <li>Sony 50mm f/1.8 Prime Lens</li>
                <li>Sigma 30mm f/1.4 DC DN</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
