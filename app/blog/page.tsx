import BlogPostCard from "@/components/blog-post-card"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Tutorials", "Projects", "Events", "Opinion"]

export default function BlogPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-lg text-muted-foreground mb-6">
        My thoughts, tutorials, and experiences in electrical engineering
      </p>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Badge key={category} variant={category === "All" ? "default" : "outline"} className="cursor-pointer">
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogPostCard
          title="Getting Started with Circuit Design"
          excerpt="An introduction to the fundamentals of electrical circuit design for beginners."
          date="April 25, 2023"
          category="Tutorials"
          href="/blog/circuit-design-intro"
        />
        <BlogPostCard
          title="My Experience at the IEEE Conference"
          excerpt="Reflections and key takeaways from attending my first IEEE conference."
          date="March 10, 2023"
          category="Events"
          href="/blog/ieee-conference"
        />
        <BlogPostCard
          title="Building a Custom PCB for My Weather Station"
          excerpt="The process of designing and fabricating a custom PCB for my Arduino weather station project."
          date="February 15, 2023"
          category="Projects"
          href="/blog/custom-pcb-weather-station"
        />
        <BlogPostCard
          title="The Future of Renewable Energy Integration"
          excerpt="My thoughts on the challenges and opportunities in integrating renewable energy sources into the grid."
          date="January 5, 2023"
          category="Opinion"
          href="/blog/renewable-energy-integration"
        />
        <BlogPostCard
          title="Understanding Operational Amplifiers"
          excerpt="A comprehensive guide to understanding and using op-amps in your electronic circuits."
          date="December 12, 2022"
          category="Tutorials"
          href="/blog/operational-amplifiers"
        />
        <BlogPostCard
          title="Troubleshooting Common Circuit Problems"
          excerpt="A systematic approach to identifying and fixing issues in electronic circuits."
          date="November 8, 2022"
          category="Tutorials"
          href="/blog/troubleshooting-circuits"
        />
      </div>
    </main>
  )
}
