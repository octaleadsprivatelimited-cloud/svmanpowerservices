import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

// Import all pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import TemporaryStaffing from './pages/TemporaryStaffing'
import PermanentPlacement from './pages/PermanentPlacement'
import ExecutiveSearch from './pages/ExecutiveSearch'
import PayrollServices from './pages/PayrollServices'
import HRConsulting from './pages/HRConsulting'
import TrainingDevelopment from './pages/TrainingDevelopment'
import IndustrySolutions from './pages/IndustrySolutions'
import TechnologyStaffing from './pages/TechnologyStaffing'
import HealthcareStaffing from './pages/HealthcareStaffing'
import FinanceStaffing from './pages/FinanceStaffing'
import ManufacturingStaffing from './pages/ManufacturingStaffing'
import RetailStaffing from './pages/RetailStaffing'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Pages */}
            <Route path="/services/temporary-staffing" element={<TemporaryStaffing />} />
            <Route path="/services/permanent-placement" element={<PermanentPlacement />} />
            <Route path="/services/executive-search" element={<ExecutiveSearch />} />
            <Route path="/services/payroll-services" element={<PayrollServices />} />
            <Route path="/services/hr-consulting" element={<HRConsulting />} />
            <Route path="/services/training-development" element={<TrainingDevelopment />} />
            
            {/* Industry Solutions Pages */}
            <Route path="/solutions/industry-solutions" element={<IndustrySolutions />} />
            <Route path="/solutions/technology-staffing" element={<TechnologyStaffing />} />
            <Route path="/solutions/healthcare-staffing" element={<HealthcareStaffing />} />
            <Route path="/solutions/finance-staffing" element={<FinanceStaffing />} />
            <Route path="/solutions/manufacturing-staffing" element={<ManufacturingStaffing />} />
            <Route path="/solutions/retail-staffing" element={<RetailStaffing />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
      <SpeedInsights />
      <Analytics />
    </Router>
  )
}

export default App
