import { AboutSection } from './components/AboutSection'
import { AvailabilitySection } from './components/AvailabilitySection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { ServicesSection } from './components/ServicesSection'
import { TraceSection } from './components/TraceSection'
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

      <HeroField />
      <StackSection />
      <ServicesSection />
      <TraceSection />
      <WorkSection />
      <AboutSection />
      <AvailabilitySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
