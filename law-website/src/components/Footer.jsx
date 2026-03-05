import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for internal routing
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  // Practice Areas Data with custom paths
  const practiceAreas1 = [
    { title: "Banking, Finance, and Insolvency", path: "/practices/banking-finance&insolvency" },
    { title: "Competition and Anti-Trust Law", path: "/practices/competition-and-anti-trust-law" },
    { title: "Dispute Resolution", path: "/practices/dispute-resolution" },
    { title: "Energy and Resources", path: "/practices/energy-resources" },
    { title: "Human Resources and Employment law", path: "/practices/human-resource-employement-law" },
    { title: "High Net-worth Individuals", path: "/practices/high-net-worth" },
    { title: "Intellectual Property Rights", path: "/practices/intellectual-property-rights" },
    { title: "International Disputes", path: "/practices/international-dispute&investigation" }
  ];

  const practiceAreas2 = [
    { title: "Infrastructure and Real estate", path: "/practices/infrastructure&real-estate" },
    { title: "Mergers & Acquisitions", path: "/practices/mergers&acquisitions" },
    { title: "Private Equity Investment", path: "/practices/private-equity" },
    { title: "Retail and E-Commerce", path: "/practices/retail" },
    { title: "Regulatory and Securities Laws", path: "/practices/regularity" },
    { title: "Tax Practice", path: "/practices/tax" },
    { title: "Technology Media and Telecom", path: "/practices/technology-media-and-telecom" },
    { title: "White-Collar Crime", path: "/practices/white-collar" }
  ];

  // Social Media Data with custom paths
  const socialLinks = [
    { icon: <Twitter size={18} />, path: "https://twitter.com" },
    { icon: <Facebook size={18} />, path: "https://facebook.com" },
    { icon: <Youtube size={18} />, path: "https://youtube.com" },
    { icon: <Instagram size={18} />, path: "https://instagram.com" },
    { icon: <Linkedin size={18} />, path: "https://linkedin.com" }
  ];

  return (
    <footer className="bg-[#0D1117] text-white py-2 px-6 md:px-20 font-sans">
      <div className="max-w-6xl h-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-4xl garamond-font text-[#AA9166] mb-8">Practices Areas</h2>
          <ul className="space-y-4">
            {practiceAreas1.map((item, idx) => (
              <li key={idx}>
                <Link 
                  to={item.path} 
                  className="group hover:text-[#a57740] flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <ChevronRight className="w-4 h-4 text-[#AA9166]" />
                  <span className="text-gray-400 hover:text-[#a57740] group-hover:text-white transition-colors">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-4xl garamond-font text-[#AA9166] mb-8">Practices Areas</h2>
          <ul className="space-y-4">
            {practiceAreas2.map((item, idx) => (
              <li key={idx}>
                <Link 
                  to={item.path} 
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <ChevronRight className="w-4 h-4 text-[#AA9166]" />
                  <span className="text-gray-400 hover:text-[#a57740] group-hover:text-white transition-colors">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-4xl garamond-font text-[#AA9166] mb-8">Get in touch</h2>
          <div className="space-y-6 text-gray-400">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#AA9166] shrink-0" />
              <p>A-140 Defence Colony,<br />New Delhi-110024 India</p>
            </div>
            
            <a href="tel:01146714601" className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-[#AA9166]" />
              <p>011-46714601</p>
            </a>
            
            <a href="mailto:info@bsalegalfirm.com" className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-[#AA9166]" />
              <p>info@bsalegalfirm.com</p>
            </a>

            {/* Social Icons with Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#AA9166]" />
                  <div className="text-white group-hover:text-[#AA9166] transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;