import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeLabPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Home Lab</h1>
      <p className="text-lg text-muted-foreground mb-10">
        My personal electronics lab is where I experiment, learn, and bring my project ideas to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Setup</h2>
          <p className="mb-4">
            I've been building my home lab over the past few years, gradually adding equipment and tools as I take on
            more complex projects. My workspace is designed to be functional yet comfortable for long hours of
            tinkering.
          </p>
          <p>
            The lab allows me to work on everything from simple Arduino projects to custom PCB designs and more advanced
            analog circuits. It's constantly evolving as I discover new interests and requirements.
          </p>
        </div>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="My home electronics lab"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Tabs defaultValue="equipment" className="mb-12">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
        </TabsList>
        <TabsContent value="equipment" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Test & Measurement</h3>
                <ul className="space-y-1">
                  <li>Rigol DS1054Z Digital Oscilloscope</li>
                  <li>Fluke 117 Digital Multimeter</li>
                  <li>Bench Power Supply (0-30V, 0-5A)</li>
                  <li>Logic Analyzer</li>
                  <li>Function Generator</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Soldering & Rework</h3>
                <ul className="space-y-1">
                  <li>Hakko FX-888D Soldering Station</li>
                  <li>Hot Air Rework Station</li>
                  <li>Solder Fume Extractor</li>
                  <li>PCB Vice and Helping Hands</li>
                  <li>Solder Wire, Flux, and Cleaning Supplies</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Prototyping</h3>
                <ul className="space-y-1">
                  <li>Breadboards (various sizes)</li>
                  <li>Jumper Wire Kits</li>
                  <li>Perfboards</li>
                  <li>PCB Fabrication Tools</li>
                  <li>3D Printer for Enclosures</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Development Platforms</h3>
                <ul className="space-y-1">
                  <li>Arduino Collection (Uno, Nano, Mega)</li>
                  <li>Raspberry Pi 4 & Pi Zero</li>
                  <li>ESP32 & ESP8266 Boards</li>
                  <li>STM32 Development Boards</li>
                  <li>FPGA Development Kit</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="components" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Passive Components</h3>
                <p>Organized storage for resistors, capacitors, inductors, and transformers of various values.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Active Components</h3>
                <p>Collection of transistors, diodes, ICs, voltage regulators, and op-amps.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Sensors & Actuators</h3>
                <p>Various sensors (temperature, humidity, pressure, motion) and actuators (motors, servos, relays).</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Display & Interface</h3>
                <p>LEDs, LCDs, OLED displays, buttons, switches, and other user interface components.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="software" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Design Software</h3>
                <ul className="space-y-1">
                  <li>KiCad for PCB Design</li>
                  <li>Fusion 360 for Mechanical Design</li>
                  <li>LTspice for Circuit Simulation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Development Environments</h3>
                <ul className="space-y-1">
                  <li>Arduino IDE</li>
                  <li>Visual Studio Code with PlatformIO</li>
                  <li>STM32CubeIDE</li>
                  <li>Jupyter Notebooks for Data Analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Lab Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="relative w-full h-48">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Audio Amplifier Project"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Class D Audio Amplifier</h3>
              <p className="text-sm">Building and testing a high-efficiency audio amplifier circuit.</p>
            </CardContent>
          </Card>
          <Card>
            <div className="relative w-full h-48">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Temperature Controller"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">PID Temperature Controller</h3>
              <p className="text-sm">Precision temperature control system with PID algorithm implementation.</p>
            </CardContent>
          </Card>
          <Card>
            <div className="relative w-full h-48">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Logic Analyzer Usage"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">I2C Protocol Analysis</h3>
              <p className="text-sm">Exploring and debugging I2C communication between microcontrollers.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Future Upgrades</h2>
        <p className="mb-6">I'm always looking to improve my lab setup. Here are some items on my wishlist:</p>
        <ul className="space-y-2">
          <li>• Higher-end digital oscilloscope with more bandwidth</li>
          <li>• Spectrum analyzer</li>
          <li>• Better microscope for SMD work</li>
          <li>• Automated PCB prototyping machine</li>
          <li>• Environmental chamber for testing under various conditions</li>
        </ul>
      </div>
    </main>
  )
}
