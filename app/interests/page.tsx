import InterestCard from "@/components/interest-card"

export default function InterestsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-2">My Interests</h1>
      <p className="text-lg text-muted-foreground mb-10">
        Beyond electrical engineering, these are the things that I'm passionate about
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <InterestCard
          title="Books"
          description="My reading list and book recommendations spanning technical literature, science fiction, and personal development."
          icon="BookOpen"
          href="/interests/books"
        />
        <InterestCard
          title="Home Labbing"
          description="My electronics lab setup, equipment collection, and various experiments I conduct in my free time."
          icon="Cpu"
          href="/interests/home-labbing"
        />
        <InterestCard
          title="Photography"
          description="A gallery of my photographs capturing landscapes, technology, and everyday moments that inspire me."
          icon="Camera"
          href="/interests/photography"
        />
        <InterestCard
          title="Podcasts"
          description="My favorite tech and engineering podcasts that keep me informed and entertained during commutes."
          icon="Headphones"
          href="/interests/podcasts"
        />
        <InterestCard
          title="Fitness"
          description="My workout routines, fitness goals, and how I balance physical activity with academic pursuits."
          icon="Dumbbell"
          href="/interests/gym"
        />
      </div>
    </main>
  )
}
