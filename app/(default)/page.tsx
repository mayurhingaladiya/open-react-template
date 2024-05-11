export const metadata = {
  title: 'The GCSE Computer Science Tutor',
  description: 'The GCSE Computer Science Tutor',
}
import Hero from '@/components/hero'
import GCSEpaper from '@/components/gcsePapers'
import ALevelpaper from '@/components/aLevelPapers'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Masterclass from '@/components/masterclassRes'
import Blocks from "@/components/blocks"
import Cheatsheets from "@/components/cheatsheets"
import GCSEPredicted from "@/components/gcsePredicted"
import PythonRes from "@/components/pythonresource"

export default function Home() {
  return (
    <>
      <Hero />
      <Masterclass/>
      <GCSEpaper />
      <Blocks/>
      <Cheatsheets/>
      <GCSEPredicted/>
      <PythonRes/>
      <Zigzag/>
    </>
  )
}
