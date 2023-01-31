import AboutMe from '@/components/AboutMe'
import Awards from '@/components/Awards'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Introduction from '@/components/Introduction'
import Head from 'next/head'
import { useRef } from 'react'

export default function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const learnMore = () => {
    aboutMeRef.current?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <>
      <Head>
        <title>Aviv Yaari</title>
        <meta name="description" content="Hello, my name is Aviv Yaari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduction onLearnMore={learnMore} />
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <Experience />
        <Awards />
        <Education />
      </main>
    </>
  )
}
