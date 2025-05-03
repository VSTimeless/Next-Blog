import Link from "next/link"
import { Calendar, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  href: string
}

export default function BlogPostCard({ title, excerpt, date, category, href }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={href}>
        <CardContent className="p-6">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4" />
              {category}
            </div>
          </div>
          <p className="text-muted-foreground">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  )
}
