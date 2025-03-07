import Layout from '../components/layout'
import ContentDisplay from '../components/content-display'

const stories = [
  {
    title: "The Forgotten Library",
    content: `In a dusty corner of the city, there stood a library that time had forgotten. Its windows were clouded with age, and its door creaked with the weight of countless stories within. 

Sarah, a curious teenager, stumbled upon it one rainy afternoon. As she pushed open the heavy oak door, the musty scent of old books enveloped her. Shelves towered to the ceiling, their contents a mystery waiting to be unraveled.

As she ran her fingers along the spines of the books, one seemed to call out to her. It was a small, leather-bound volume with no title. Sarah opened it, and as she read the first line, the world around her began to shift...`,
    date: "August 10, 2023"
  },
  {
    title: "The Quantum Barista",
    content: `Jake had always been an ordinary barista, until the day he wasn't. It started with a strange customer who ordered a "quantum latte with entangled foam." Jake laughed it off, but as he prepared the drink, something extraordinary happened.

The coffee began to exist in multiple states simultaneously. Hot and cold, bitter and sweet, liquid and solid. Jake blinked, wondering if the lack of sleep was finally getting to him.

But then the customer took a sip, and reality itself seemed to ripple...`,
    date: "September 5, 2023"
  }
]

export default function Stories() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">Short Stories</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
          Dive into worlds of imagination with these short tales.
        </p>
        {stories.map((story, index) => (
          <ContentDisplay key={index} {...story} />
        ))}
      </div>
    </Layout>
  )
}

