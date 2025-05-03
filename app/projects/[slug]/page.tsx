import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// This would typically fetch data from your content source
// For demo purposes, we're using mock data
const getProjects = () => {
  return {
    "weather-station": {
      title: "Microcontroller Weather Station",
      date: "October 2023",
      description:
        "A DIY weather station built with Arduino that measures temperature, humidity, and atmospheric pressure.",
      longDescription: `
        <p>This project involves the development of a weather station using an Arduino microcontroller and various sensors. The station is capable of measuring temperature, humidity, barometric pressure, wind speed, and rainfall.</p>
        <p>The data collected by the sensors is processed by the Arduino, which then displays the information on a small LCD screen and transmits it to a web server for remote monitoring. The system is powered by a small solar panel with a battery backup, making it self-sufficient and suitable for outdoor deployment.</p>
        <p>Key components used in this project include:</p>
        <ul>
          <li>Arduino Nano as the main controller</li>
          <li>DHT22 sensor for temperature and humidity</li>
          <li>BMP280 sensor for barometric pressure</li>
          <li>Anemometer for wind speed</li>
          <li>Rain gauge for precipitation</li>
          <li>ESP8266 WiFi module for data transmission</li>
          <li>16x2 LCD display for local readings</li>
          <li>Solar panel and LiPo battery for power</li>
        </ul>
        <p>This project taught me a lot about sensor integration, low-power design, and environmental monitoring. The biggest challenge was designing a weatherproof enclosure that allowed the sensors to interact with the environment while protecting the electronics.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Arduino", "IoT", "C++", "Sensors", "Solar Power"],
      githubUrl: "https://github.com/volodymyr/weather-station",
      demoUrl: "",
    },
    "led-visualizer": {
      title: "LED Music Visualizer",
      date: "July 2023",
      description: "An LED matrix that creates visual patterns in response to music using FFT analysis.",
      longDescription: `
        <p>The LED Music Visualizer is a project that combines digital signal processing with visual display. It analyzes audio input in real-time, performs Fast Fourier Transform (FFT) to break down the frequency components, and displays corresponding patterns on an LED matrix.</p>
        <p>The project features:</p>
        <ul>
          <li>Real-time audio analysis</li>
          <li>Multiple visualization modes</li>
          <li>Beat detection algorithm</li>
          <li>Customizable color schemes</li>
          <li>User-friendly control interface</li>
        </ul>
        <p>The system uses an MSGEQ7 graphic equalizer IC to simplify the FFT process, making it possible to run the visualizer on a modest microcontroller. The display consists of a 16x16 WS2812B LED matrix, controlled via the FastLED library.</p>
        <p>Building this project improved my skills in digital signal processing, real-time systems, and PCB design. I also learned a lot about optimizing code for performance-critical applications.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Digital Signal Processing", "PCB Design", "Arduino", "LEDs", "Audio"],
      githubUrl: "https://github.com/volodymyr/led-visualizer",
      demoUrl: "https://youtube.com/watch?v=demo-video",
    },
    "home-automation": {
      title: "Home Automation System",
      date: "January 2023",
      description: "A DIY home automation system integrating various sensors and actuators.",
      longDescription: `
        <p>I built a comprehensive home automation system using Raspberry Pi as the central hub, integrating various sensors and actuators throughout my home. The system provides monitoring and control capabilities for lighting, temperature, security, and energy consumption.</p>
        <p>The core features include:</p>
        <ul>
          <li>Smart lighting control with scheduling and motion detection</li>
          <li>Climate control with temperature and humidity sensors</li>
          <li>Security cameras with motion alerts</li>
          <li>Door and window sensors</li>
          <li>Energy monitoring for major appliances</li>
          <li>Voice control integration with popular assistants</li>
          <li>Mobile app for remote monitoring and control</li>
        </ul>
        <p>The system uses MQTT protocol for communication between devices, with Node-RED for workflow automation and a custom web interface built with React for user control. Data is stored in an InfluxDB time-series database and visualized using Grafana dashboards.</p>
        <p>This project taught me a lot about system integration, networking protocols, and creating reliable automated systems. The biggest challenge was creating a unified interface that could handle the diverse range of devices and protocols.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Raspberry Pi", "Python", "MQTT", "Node-RED", "IoT", "React"],
      githubUrl: "https://github.com/volodymyr/home-automation",
      demoUrl: "",
    }
  }
}

// This is required for static export with dynamic routes
export async function generateStaticParams() {
  const projects = getProjects();
  return Object.keys(projects).map(slug => ({
    slug
  }));
}

const getProject = (slug: string) => {
  const projects = getProjects();
  return projects[slug as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return <div className="container py-12">Project not found</div>
  }

  return (
    <main className="container py-12 max-w-4xl">
      <Link href="/projects" className="flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-muted-foreground">{project.date}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p className="text-xl font-medium mb-6">{project.description}</p>
        <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            className="flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            className="flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-5 w-5" />
            Live Demo
          </Link>
        )}
      </div>
    </main>
  )
}
