import { AboutSection } from './components/AboutSection'
import { AvailabilitySection } from './components/AvailabilitySection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { ServicesSection } from './components/ServicesSection'
import { TraceSection } from './components/TraceSection'
import { WoodRail } from './components/WoodRail'
import { WorkSection } from './components/WorkSection'
import { HeroField } from './components/heroes/HeroField'
import { StackSection } from './components/stack/StackSection'
import { c } from './theme'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: c.bg, position: 'relative' }}>
      <ProgressBar />
      <Header />

      <div id="top" />

      {/* sections alternate backgrounds; a wooden rail marks every seam */}
      <HeroField />
      <WoodRail variant={0} />
      <StackSection />
      <WoodRail variant={1} />
      <ServicesSection />
      <WoodRail variant={2} />
      <TraceSection />
      <WoodRail variant={3} />
      <WorkSection />
      <WoodRail variant={0} />
      <AboutSection />
      <WoodRail variant={1} />
      <AvailabilitySection />
      <WoodRail variant={2} />
      <ContactSection />
      <Footer />
    </div>
  )
}
