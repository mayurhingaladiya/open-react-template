export const metadata = {
  title: 'The GCSE Computer Science Tutor',
  description: 'Page description',
}
import { SpeedInsights } from "@vercel/speed-insights/next"
import Hero from '@/components/hero'
import GCSEpaper from '@/components/gcsePapers'
import ALevelpaper from '@/components/aLevelPapers'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from "@/components/blocks"
import Cheatsheets from "@/components/cheatsheets"
import GCSEPredicted from "@/components/gcsePredicted"
import PythonRes from "@/components/pythonresource"

export default function Home() {
  return (
    <>
    <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8253882393151973"
     ></script></head>
      <Hero />
      <GCSEpaper />
      <Blocks/>
      <Cheatsheets/>
      <GCSEPredicted/>
      <PythonRes/>
      <Zigzag/>
    </>
  )
}
