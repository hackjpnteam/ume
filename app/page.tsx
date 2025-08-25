import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ProcessSection from './components/ProcessSection'
import KodawariSection from './components/KodawariSection'
import PresidentMessageSection from './components/PresidentMessageSection'
import CompanyInfoSection from './components/CompanyInfoSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProcessSection />
        <KodawariSection />
        <PresidentMessageSection />
        <CompanyInfoSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}
