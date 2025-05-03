import Link from "next/link"
import { ArrowRight, BookOpen, Camera, Cpu, Dumbbell, Headphones, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface InterestCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function InterestCard({ title, description, icon, href }: InterestCardProps) {
  // Map icon string to Lucide icon component
  const IconMap: Record<string, LucideIcon> = {
    BookOpen,
    Camera,
    Cpu,
    Dumbbell,
    Headphones,
  }

  const Icon = IconMap[icon] || Cpu

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={href}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary text-sm font-medium">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
