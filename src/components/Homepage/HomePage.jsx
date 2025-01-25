'use client'
import { useState, useEffect } from 'react';
import { 
  Search, CheckCircle, ShieldCheck, TrendingUp, Network, 
  Building, Atom, Cpu, Shirt, Globe, Zap, Users, 
  ArrowRight, Star, ChevronLeft, ChevronRight, Menu, X
} from 'lucide-react';


const RawMaterialsPlatform = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const bannerContent = [
    {
      title: "Revolutionize Your Procurement",
      subtitle: "AI-Powered Supplier Matching",
      background: "bg-blue-600",
      buttonText: "Explore Solutions"
    },
    {
      title: "Global Supply Chain Intelligence",
      subtitle: "Real-Time Market Insights",
      background: "bg-purple-600",
      buttonText: "View Analytics"
    },
    {
      title: "Compliance & Quality Assurance",
      subtitle: "Automated Regulatory Tracking",
      background: "bg-green-600",
      buttonText: "Learn More"
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: <Building className="text-blue-500" size={48} /> },
    { name: 'Pharmaceuticals', icon: <Atom className="text-green-500" size={48} /> },
    { name: 'Technology', icon: <Cpu className="text-purple-500" size={48} /> },
    { name: 'Textiles', icon: <Shirt className="text-pink-500" size={48} /> },
    { name: 'Automotive', icon: <Globe className="text-orange-500" size={48} /> },
    { name: 'Aerospace', icon: <Zap className="text-red-500" size={48} /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CPO, TechGlobal Inc.',
      quote: "RawSource transformed our procurement strategy with unparalleled supplier intelligence.",
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Supply Chain Director, PharmaSolutions',
      quote: "The platform's AI-driven matching has reduced our sourcing time by 40%.",
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Procurement Lead, AutoTech',
      quote: "Comprehensive market insights that drive strategic decision-making.",
      rating: 5
    }
  ];

  const partners = [
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
    { name: 'Apple', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' },
    { name: 'Meghna group', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/MGI_Logo.png' },
    { name: 'Pfizer', logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEbPzjochVquA/company-logo_200_200/company-logo_200_200/0/1631305874324?e=2147483647&v=beta&t=slBfEtphAJQwRginClju8RdIPKqSWYeIjjAD9aYmBSc' }
  ];

  const features = [
    {
      title: 'AI Matching',
      description: 'Advanced algorithms connect you with ideal suppliers.',
      icon: <Network className="text-blue-500" size={40} />
    },
    {
      title: 'Real-time Analytics',
      description: 'Instant market insights and pricing intelligence.',
      icon: <TrendingUp className="text-green-500" size={40} />
    },
    {
      title: 'Compliance Tracking',
      description: 'Automated regulatory and quality standard monitoring.',
      icon: <ShieldCheck className="text-purple-500" size={40} />
    }
  ];

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(bannerInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerContent.length) % bannerContent.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Placeholder for subscription logic
    console.log('Subscribed with email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 w-full">
            <div className="text-2xl font-bold text-blue-600 flex-grow">RawSource</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {['Markets', 'Solutions', 'Suppliers', 'Insights'].map(item => (
                <a key={item} href="#" className="text-gray-600 hover:text-blue-600">
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <nav className="flex flex-col">
              {['Markets', 'Solutions', 'Suppliers', 'Insights'].map(item => (
                <a 
                  key={item} 
                  href="#" 
                  className="px-4 py-3 border-b text-gray-600 hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-4 py-3 text-left text-blue-600 hover:bg-gray-100">
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Banner Section */}
      <div className="relative h-[500px] overflow-hidden">
        {bannerContent.map((banner, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            } ${banner.background} text-white flex items-center justify-center`}
            style={{ transform: `translateX(${(index - currentBanner) * 100}%)` }}
          >
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
              <p className="text-xl mb-8">{banner.subtitle}</p>
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}
        <button 
          onClick={prevBanner} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={nextBanner} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Search Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Find Your Perfect Supplier
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search materials, suppliers, industries..."
              className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Industries */}
        <section className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {industries.map((industry) => (
            <div 
              key={industry.name} 
              className="bg-white border rounded-xl p-4 text-center hover:shadow-md transition"
            >
              {industry.icon}
              <p className="text-sm mt-2">{industry.name}</p>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="relative py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="max-w-2xl mx-auto relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 right-0 transition-all duration-700 ease-in-out ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transform: `translateX(${(index - currentTestimonial) * 100}%)` }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div className="font-semibold">
                    {testimonial.name}
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2"
          >
            <ChevronRight />
          </button>
        </section>

        {/* Partners */}
        <section className="text-center">
  <h2 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h2>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {partners.map((partner) => (
      <img 
        key={partner.name} 
        src={partner.logo} 
        alt={partner.name} 
        className="w-20 h-auto grayscale hover:grayscale-0 transition object-contain" // Controls size and maintains aspect ratio
      />
    ))}
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
            <p className="text-gray-300 mb-6">
              Subscribe for market insights, procurement strategies, and exclusive updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
          {[
            { 
              title: 'Platform', 
              links: ['Markets', 'Solutions', 'Pricing'] 
            },
            { 
              title: 'Resources', 
              links: ['Blog', 'Whitepapers', 'Case Studies'] 
            },
            { 
              title: 'Company', 
              links: ['About', 'Careers', 'Press'] 
            },
            { 
              title: 'Support', 
              links: ['Contact', 'Help Center', 'Documentation'] 
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-gray-200">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-400 mt-8 pt-6 border-t border-gray-800">
          © 2024 RawSource Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default RawMaterialsPlatform;