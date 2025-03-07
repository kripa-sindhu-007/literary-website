import Layout from '../components/layout'
import ContentDisplay from '../components/content-display'

const poems = [
  {
    title: "Whispers of the Wind",
    content: `In the gentle breeze, secrets unfold,
Carrying whispers of stories untold.
Leaves dance in the air, a silent ballet,
Nature's poetry on display.

Through meadows and forests, the wind does roam,
Bringing tales from lands unknown.
In its soft murmur, we find solace and grace,
A reminder of our small place.`,
    date: "June 15, 2023"
  },
  {
    title: "Urban Symphony",
    content: `Concrete jungle, steel and glass,
A cacophony of lives that pass.
Neon lights and blaring horns,
A city that never sleeps nor mourns.

In the chaos, beauty thrives,
A million stories, a million lives.
From dawn to dusk, dusk to dawn,
The urban symphony plays on.`,
    date: "July 2, 2023"
  }
]

export default function Poetry() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">Poetry Collection</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
          Explore the rhythms and rhymes of my poetic expressions.
        </p>
        {poems.map((poem, index) => (
          <ContentDisplay key={index} {...poem} />
        ))}
      </div>
    </Layout>
  )
}

