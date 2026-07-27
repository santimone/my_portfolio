import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { AvailabilitySection } from './components/AvailabilitySection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { ServicesSection } from './components/ServicesSection'
import { TraceSection } from './components/TraceSection'
import { TreatmentSwitcher, type Treatment } from './components/TreatmentSwitcher'
import { WorkSection } from './components/WorkSection'
import { HeroBoot } from './components/heroes/HeroBoot'
import { HeroField } from './components/heroes/HeroField'
import { HeroStatement } from './components/heroes/HeroStatement'
import { StackSection } from './components/stack/StackSection'
import { c } from './theme'

export default function App() {
  const [treatment, setTreatment] = useState<Treatment>('boot')

  return (
    <div style={{ minHeight: '100vh', background: c.bg, position: 'relative' }}>
      <ProgressBar />
      <Header />

      <div id="top" />

      {treatment === 'boot' && <HeroBoot />}
      {treatment === 'statement' && <HeroStatement />}
      {treatment === 'field' && <HeroField />}

      <TreatmentSwitcher value={treatment} onChange={setTreatment} />

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
