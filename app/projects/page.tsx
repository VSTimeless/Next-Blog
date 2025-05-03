import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-10">
        A collection of my electrical engineering projects and experiments
      </p>

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
        <ProjectCard
          title="FPGA-based Digital Filter"
          description="Implementation of digital filters on an FPGA platform using VHDL."
          image="/placeholder.svg?height=200&width=300"
          tags={["FPGA", "VHDL", "Digital Signal Processing"]}
          href="/projects/fpga-filter"
        />
        <ProjectCard
          title="Solar Charge Controller"
          description="Design and implementation of a charge controller for a small solar panel system."
          image="/placeholder.svg?height=200&width=300"
          tags={["Power Electronics", "PCB Design", "Renewable Energy"]}
          href="/projects/solar-controller"
        />
        <ProjectCard
          title="Bluetooth Audio Amplifier"
          description="A custom-designed Bluetooth receiver with an integrated audio amplifier."
          image="/placeholder.svg?height=200&width=300"
          tags={["Audio Electronics", "Bluetooth", "Amplifier Design"]}
          href="/projects/bluetooth-amplifier"
        />
      </div>
    </main>
  )
}
