import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileDown } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="container py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <section className="mb-10">
            <p className="text-lg mb-4">
              I'm an Electrical Engineering student at [University Name], currently in my [year] year of studies. My
              passion for electronics began when I was young, taking apart old devices to understand how they worked.
            </p>
            <p className="text-lg mb-4">
              Today, I'm focused on developing skills in circuit design, embedded systems, and signal processing. I
              believe in the power of technology to solve real-world problems and improve lives.
            </p>
            <p className="text-lg">
              When I'm not studying or working on projects, you can find me exploring new books, tinkering in my home
              lab, taking photographs, or working out at the gym.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">Bachelor of Science in Electrical Engineering</h3>
                  <p className="text-muted-foreground">University Name • Expected Graduation: May 2025</p>
                </div>
                <p>Relevant Coursework:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Digital Electronics</li>
                  <li>Signal Processing</li>
                  <li>Microcontroller Programming</li>
                  <li>Circuit Analysis and Design</li>
                  <li>Embedded Systems</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">My Resume</h2>
            <Button asChild className="gap-2">
              <a href="/resume.pdf" download>
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </section>
        </div>

        <div className="md:w-1/3">
          <div className="sticky top-20">
            <div className="mb-8">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=250&width=350" alt="Volodymyr" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Circuit Design</Badge>
                <Badge>PCB Layout</Badge>
                <Badge>Embedded Systems</Badge>
                <Badge>Arduino</Badge>
                <Badge>Raspberry Pi</Badge>
                <Badge>FPGA</Badge>
                <Badge>MATLAB</Badge>
                <Badge>C/C++</Badge>
                <Badge>Python</Badge>
                <Badge>KiCad</Badge>
                <Badge>Oscilloscopes</Badge>
                <Badge>Signal Analysis</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
