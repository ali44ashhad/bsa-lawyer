import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/aboutPages/About';
import Practice from './pages/practice/Practice';
import Article from './pages/articlePage/Article';
import Contact from './pages/conatct/Contact';
import BankingFinance from './pages/practicesAreasOne/BankingFinance';
import CompetitionAndAntiTrust from './pages/practicesAreasOne/CompetitionAndAntiTrust';
import DisputeResolution from './pages/practicesAreasOne/DisputeResolution';
import EnergyAndResource from './pages/practicesAreasOne/EnergyAndResources';
import HumanResourceEmployementLaw from './pages/practicesAreasOne/HumanResourceEmployementLaw';
import HighNetWorth from './pages/practicesAreasOne/HighNetWorth';
import IntellectualProperty from './pages/practicesAreasOne/IntellectualProperty';
import InternationalDisputeInvestigation from './pages/practicesAreasOne/InternationalDisputeInvestigation';
import InfrastructureRealEstate from './pages/practicesAreasSecond/InfrastructureRealEstate';
import MergersAcquisitions from './pages/practicesAreasSecond/MergersAcquisitations';
import PrivateEquity from './pages/practicesAreasSecond/PrivateEquity';
import RetailEcommerce from './pages/practicesAreasSecond/RetailEcommerce';
import Regularity from './pages/practicesAreasSecond/Regularity';
import TaxPractice from './pages/practicesAreasSecond/TaxPractice';
import TechnologyMedia from './pages/practicesAreasSecond/TechnologyMedia';
import WhiteCollarCrime from './pages/practicesAreasSecond/WhiteCollarCrime';
import Blog from './pages/articlePage/Blog';
import RiskoMeter from './pages/riskoMeter/RiskoMeter';
import Dashboard from './pages/dashboard/Dashboard';
import CompanyLawAdvisory from './pages/gridCardPages/CompanyLawAdvisory';
import SportsAndGaming from './pages/gridCardPages/SportsAndGaming';
import Environment from './pages/gridCardPages/Environment';
import HeroSection from './pages/HeroSection';
import InternHero from './pages/internPage/InternHero';
import AdminLogin from './components/AdminLogin';
import AdminProtectedRoute from './components/AdminProtectedRoute';

function App() {

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();
  const location = useLocation();

  // ❌ Hide Hero on these pages
  const hideHeroRoutes = ["/", "/risko-meter", "/dashboard"];

  if (location.pathname === "/login") {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative min-h-screen">

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-[#a57740] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

     

      <Navbar />

      {/* ✅ Hero Section Hidden for Specific Pages */}
      {!hideHeroRoutes.includes(location.pathname) && <HeroSection />}

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/article' element={<Article />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/intern' element={<InternHero />} />
        <Route path='/admin-login' element={<AdminLogin />} />

        {/* Practices Areas */}
        <Route path='/practices/banking-finance&insolvency' element={<BankingFinance />} />
        <Route path='/practices/competition-and-anti-trust-law' element={<CompetitionAndAntiTrust />} />
        <Route path='/practices/dispute-resolution' element={<DisputeResolution />} />
        <Route path='/practices/energy-resources' element={<EnergyAndResource />} />
        <Route path='/practices/human-resource-employement-law' element={<HumanResourceEmployementLaw />} />
        <Route path='/practices/high-net-worth' element={<HighNetWorth />} />
        <Route path='/practices/intellectual-property-rights' element={<IntellectualProperty />} />
        <Route path='/practices/international-dispute&investigation' element={<InternationalDisputeInvestigation />} />

        {/* Second Practices */}
        <Route path='/practices/infrastructure&real-estate' element={<InfrastructureRealEstate />} />
        <Route path='/practices/mergers&acquisitions' element={<MergersAcquisitions />} />
        <Route path='/practices/private-equity' element={<PrivateEquity />} />
        <Route path='/practices/retail' element={<RetailEcommerce />} />
        <Route path='/practices/regularity' element={<Regularity />} />
        <Route path='/practices/tax' element={<TaxPractice />} />
        <Route path='/practices/technology-media-and-telecom' element={<TechnologyMedia />} />
        <Route path='/practices/white-collar' element={<WhiteCollarCrime />} />
        <Route path='/practices/company-law-advisory-secretarial' element={<CompanyLawAdvisory />} />
        <Route path='/practices/sports-gaming-law' element={<SportsAndGaming />} />
        <Route path='/practices/environment' element={<Environment />} />

        {/* Riskometer */}
        <Route path='/risko-meter' element={<RiskoMeter />} />

        {/* Dashboard Protected */}
        <Route
          path="/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />

        {/* Blog */}
        <Route path='/blog' element={<Blog />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;