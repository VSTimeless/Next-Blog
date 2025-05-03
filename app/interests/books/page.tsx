import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Book {
  title: string
  author: string
  cover: string
  rating: number
  category: string
  review?: string
}

const books: Book[] = [
  {
    title: "The Art of Electronics",
    author: "Paul Horowitz & Winfield Hill",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 5,
    category: "Technical",
    review:
      "The definitive electronics reference. This book has been invaluable throughout my studies, offering clear explanations of complex concepts.",
  },
  {
    title: "Practical Electronics for Inventors",
    author: "Paul Scherz & Simon Monk",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 4.5,
    category: "Technical",
    review:
      "A fantastic hands-on guide that bridges theory and practice. Perfect for when you want to actually build something.",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 5,
    category: "Science Fiction",
    review: "A gripping sci-fi adventure with realistic science and an engaging protagonist. I couldn't put it down!",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 4.5,
    category: "Science Fiction",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 4,
    category: "Personal Development",
    review: "Changed how I approach habit formation and productivity. The concepts are simple yet powerful.",
  },
  {
    title: "Make: Electronics",
    author: "Charles Platt",
    cover: "/placeholder.svg?height=300&width=200",
    rating: 4,
    category: "Technical",
  },
]

// Function to render stars based on rating
function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
      ))}
      {halfStar && <StarHalf className="h-4 w-4 fill-current text-yellow-500" />}
    </div>
  )
}

export default function BooksPage() {
  // Group books by category
  const categories = [...new Set(books.map((book) => book.category))]

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Books</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Books have been an essential part of my learning journey. Here are some of my favorites across different
        categories.
      </p>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books
              .filter((book) => book.category === category)
              .map((book) => (
                <Card key={book.title} className="overflow-hidden">
                  <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-4">
                    <div className="relative w-full h-[150px] sm:h-[180px]">
                      <Image
                        src={book.cover || "/placeholder.svg"}
                        alt={`Cover of ${book.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2">{book.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                      <RatingStars rating={book.rating} />
                      {book.review && <p className="text-sm mt-2 line-clamp-3">{book.review}</p>}
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Currently Reading</h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="relative w-full h-[180px]">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Currently reading"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Designing Embedded Hardware</h3>
              <p className="text-sm text-muted-foreground mb-2">John Catsoulis</p>
              <Badge>In Progress</Badge>
              <p className="text-sm mt-2">
                I'm currently exploring the fascinating world of embedded systems design through this excellent book. It
                provides practical insights into hardware-software integration.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  )
}
