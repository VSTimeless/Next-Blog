import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import BlogPostCard from "@/components/blog-post-card"
import InterestCard from "@/components/interest-card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Volodymyr</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-2">
                Electrical Engineering Student | Tech Enthusiast
              </p>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                I'm an Electrical Engineering student passionate about technology, innovation, and lifelong learning.
                Through this website, I share my projects, knowledge, and interests.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/projects">
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-60 w-60 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Volodymyr"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-primary hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Microcontroller Weather Station"
              description="A DIY weather station built with Arduino that measures temperature, humidity, and atmospheric pressure."
              image="/placeholder.svg?height=200&width=300"
              tags={["Arduino", "IoT", "C++"]}
              href="/projects/weather-station"
            />
            <ProjectCard
              title="LED Music Visualizer"
              description="An LED matrix that creates visual patterns in response to music using FFT analysis."
              image="/placeholder.svg?height=200&width=300"
              tags={["Digital Signal Processing", "PCB Design"]}
              href="/projects/led-visualizer"
            />
            <ProjectCard
              title="Home Automation System"
              description="A DIY home automation system integrating various sensors and actuators."
              image="/placeholder.svg?height=200&width=300"
              tags={["Raspberry Pi", "Python", "MQTT"]}
              href="/projects/home-automation"
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link href="/blog" className="text-primary hover:underline flex items-center">
              Read All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InterestCard
              title="Books"
              description="My reading list and book recommendations"
              icon="BookOpen"
              href="/interests/books"
            />
            <InterestCard
              title="Home Labbing"
              description="My electronics lab setup and projects"
              icon="Cpu"
              href="/interests/home-labbing"
            />
            <InterestCard
              title="Photography"
              description="Capturing moments and scenes through my lens"
              icon="Camera"
              href="/interests/photography"
            />
            <InterestCard
              title="Podcasts"
              description="My favorite tech and engineering podcasts"
              icon="Headphones"
              href="/interests/podcasts"
            />
            <InterestCard
              title="Fitness"
              description="My workout routines and fitness journey"
              icon="Dumbbell"
              href="/interests/gym"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Feel free to reach out if you want to connect, collaborate, or just have a chat.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:Shchuryshyn@protonmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/VSTimeless" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/vstimeless/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
