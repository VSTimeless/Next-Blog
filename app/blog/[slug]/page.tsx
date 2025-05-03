import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

// This would typically fetch data from your content source
// For demo purposes, we're using mock data
const getBlogPost = (slug: string) => {
  const posts = {
    "circuit-design-intro": {
      title: "Getting Started with Circuit Design",
      date: "April 25, 2023",
      category: "Tutorials",
      content: `
        <p>Circuit design is a fundamental skill for any electrical engineer. Whether you're building a simple LED circuit or designing a complex microcontroller system, understanding the basics is essential.</p>
        
        <h2>Understanding Components</h2>
        <p>Before diving into design, you need to understand the basic components:</p>
        
        <ul>
          <li><strong>Resistors</strong>: Limit current flow</li>
          <li><strong>Capacitors</strong>: Store electrical energy</li>
          <li><strong>Inductors</strong>: Store energy in a magnetic field</li>
          <li><strong>Diodes</strong>: Allow current to flow in one direction</li>
          <li><strong>Transistors</strong>: Amplify or switch electronic signals</li>
        </ul>
        
        <h2>Circuit Analysis</h2>
        <p>There are two fundamental laws you need to know for circuit analysis:</p>
        
        <p><strong>Ohm's Law</strong>: V = I × R, where V is voltage, I is current, and R is resistance.</p>
        <p><strong>Kirchhoff's Laws</strong>:</p>
        <ul>
          <li>Kirchhoff's Current Law (KCL): The sum of currents entering a node equals the sum of currents leaving the node.</li>
          <li>Kirchhoff's Voltage Law (KVL): The sum of all voltage drops around a closed loop equals zero.</li>
        </ul>
        
        <h2>Design Process</h2>
        <p>Here's a simplified process for designing a circuit:</p>
        
        <ol>
          <li>Define requirements (what should the circuit do?)</li>
          <li>Select appropriate components</li>
          <li>Draw a schematic</li>
          <li>Calculate component values</li>
          <li>Simulate the circuit (using software like LTspice or PSPICE)</li>
          <li>Build a prototype</li>
          <li>Test and refine</li>
        </ol>
        
        <h2>Tools for Circuit Design</h2>
        <p>Some essential tools for circuit design include:</p>
        
        <ul>
          <li><strong>Circuit Design Software</strong>: KiCad, Eagle, Altium Designer</li>
          <li><strong>Simulation Software</strong>: LTspice, PSPICE, Multisim</li>
          <li><strong>Measurement Tools</strong>: Multimeter, Oscilloscope, Function Generator</li>
        </ul>
        
        <h2>Example: LED Circuit</h2>
        <p>Let's design a simple LED circuit as an example:</p>
        
        <ol>
          <li>Requirements: Power an LED from a 9V battery</li>
          <li>Components: 9V battery, LED, resistor</li>
          <li>Schematic: Battery → Resistor → LED → Ground</li>
          <li>Calculations: If the LED has a forward voltage of 2V and requires 20mA, the resistor value would be R = (9V - 2V) / 0.02A = 350Ω. We would choose the standard value of 330Ω or 360Ω.</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Circuit design is both an art and a science. It requires theoretical knowledge, practical skills, and creative problem-solving. Start with simple circuits, understand the fundamentals, and gradually work your way up to more complex designs.</p>
        
        <p>In future tutorials, we'll dive deeper into specific aspects of circuit design, including PCB layout, digital circuits, and more advanced analog designs.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
    },
    "ieee-conference": {
      title: "My Experience at the IEEE Conference",
      date: "March 10, 2023",
      category: "Events",
      content: `
        <p>Last month, I had the opportunity to attend my first IEEE conference on Power Electronics. It was an eye-opening experience that I wanted to share with fellow engineering students.</p>
        
        <h2>The Conference Environment</h2>
        <p>Walking into the conference center was initially overwhelming. Hundreds of engineers, researchers, and industry professionals were gathered in one place, all passionate about power electronics. The energy was palpable.</p>
        
        <p>The conference was organized into several tracks:</p>
        <ul>
          <li>Renewable Energy Integration</li>
          <li>Power Conversion Techniques</li>
          <li>Electric Vehicle Technologies</li>
          <li>Smart Grid Solutions</li>
          <li>Emerging Technologies in Power Electronics</li>
        </ul>
        
        <h2>Keynote Presentations</h2>
        <p>The highlight of the conference was the keynote by Dr. Sarah Chen, a pioneer in wide-bandgap semiconductor applications. Her presentation on the future of GaN and SiC in power electronics was not only informative but inspirational. She discussed how these materials are revolutionizing power density and efficiency in modern electronics.</p>
        
        <p>Another memorable keynote was by Prof. James Rodriguez on "The Role of Power Electronics in a Carbon-Neutral Future." He presented compelling data on how advanced power electronics are essential for efficiently integrating renewable energy sources into the grid and reducing carbon emissions.
        
        <h2>Networking Opportunities</h2>
        <p>Perhaps the most valuable aspect of the conference was the networking. During coffee breaks and poster sessions, I had the chance to speak with professionals from companies like Texas Instruments, ABB, and Siemens. I also connected with fellow students from universities around the world.</p>
        
        <p>These conversations led to:</p>
        <ul>
          <li>Potential internship opportunities</li>
          <li>Research collaboration ideas</li>
          <li>Insights into industry trends</li>
          <li>Career advice from experienced engineers</li>
        </ul>
        
        <h2>Technical Sessions</h2>
        <p>I attended several technical sessions focusing on my areas of interest. The presentations on high-frequency power converters were particularly relevant to my current projects. I learned about new topologies and control strategies that I'm eager to implement in my own designs.</p>
        
        <h2>Key Takeaways</h2>
        <p>My main takeaways from the conference were:</p>
        
        <ol>
          <li>The importance of staying updated with the latest research</li>
          <li>The value of cross-disciplinary knowledge in electrical engineering</li>
          <li>The rapid pace of innovation in power electronics</li>
          <li>The growing focus on sustainability and efficiency</li>
          <li>The power of community and collaboration in engineering</li>
        </ol>
        
        <h2>Advice for First-Time Attendees</h2>
        <p>If you're planning to attend your first IEEE conference, here are some tips:</p>
        
        <ul>
          <li>Plan your schedule in advance, but leave room for spontaneity</li>
          <li>Bring business cards or have your contact info ready to share</li>
          <li>Don't be shy about approaching speakers after their presentations</li>
          <li>Take notes during sessions, but also be present and engaged</li>
          <li>Follow up with new connections within a week of the conference</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Attending the IEEE conference was a valuable experience that broadened my perspective on electrical engineering and reinforced my passion for the field. I encourage all engineering students to attend conferences when possible—they're not just educational, but inspirational and potentially career-changing.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
    },
  }

  return posts[slug as keyof typeof posts]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div className="container py-12">Post not found</div>
  }

  return (
    <main className="container py-12 max-w-3xl">
      <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="mr-1 h-4 w-4" />
          {post.date}
        </div>
        <div className="flex items-center">
          <Tag className="mr-1 h-4 w-4" />
          {post.category}
        </div>
      </div>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}
