"use client"

import { useState, useEffect } from "react"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Bell,
  Menu,
  X,
  ChevronDown,
  Globe,
  Shield,
  Truck,
  Clock,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"

export default function RawMaterialsMarketplace() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [isTopHeaderDropdownOpen, setIsTopHeaderDropdownOpen] = useState(false)

  const toggleTopHeaderDropdown = () => {
    setIsTopHeaderDropdownOpen(!isTopHeaderDropdownOpen)
  }

  const categories = [
    {
      name: "Industrial Metals",
      subcategories: ["Steel & Alloys", "Aluminum", "Copper", "Precious Metals", "Raw Ore", "Scrap Metal"],
    },
    {
      name: "Chemicals",
      subcategories: [
        "Industrial Chemicals",
        "Agricultural Chemicals",
        "Pharmaceutical Chemicals",
        "Solvents",
        "Polymers",
        "Laboratory Chemicals",
      ],
    },
    {
      name: "Textiles",
      subcategories: [
        "Raw Cotton",
        "Synthetic Fibers",
        "Yarn",
        "Technical Textiles",
        "Fabric Materials",
        "Textile Chemicals",
      ],
    },
    {
      name: "Plastics",
      subcategories: [
        "Raw Polymers",
        "Recycled Plastics",
        "Engineering Plastics",
        "Biodegradable Materials",
        "Plastic Additives",
        "Resins",
      ],
    },
    {
      name: "Construction",
      subcategories: ["Cement", "Aggregates", "Steel Bars", "Wood Materials", "Glass", "Insulation"],
    },
  ]

  const deals = [
    {
      title: "Premium Steel Alloy",
      price: "BDT 154.83/ton",
      originalPrice: "BDT 202.60/ton",
      discount: "-31%",
      minOrder: "5 tons",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Industrial Grade Copper",
      price: "BDT 288.95/kg",
      originalPrice: "BDT 340.67/kg",
      discount: "-25%",
      minOrder: "100 kg",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Raw Cotton Premium",
      price: "BDT 312.94/bale",
      originalPrice: "BDT 384.78/bale",
      discount: "-35%",
      minOrder: "50 bales",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Industrial Chemicals",
      price: "BDT 89.99/L",
      originalPrice: "BDT 120.00/L",
      discount: "-28%",
      minOrder: "200 L",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const partners = [
    {
      name: "BASF",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Chemical Manufacturing",
    },
    {
      name: "ArcelorMittal",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Steel Production",
    },
    {
      name: "Dow Chemical",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Chemical Solutions",
    },
    {
      name: "ThyssenKrupp",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Industrial Materials",
    },
    {
      name: "Covestro",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Polymer Materials",
    },
    {
      name: "Siemens",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Industrial Solutions",
    },
  ]

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Sourcing",
      description: "Access suppliers worldwide",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Suppliers",
      description: "Quality assured partners",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics Support",
      description: "End-to-end shipping",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ]

  const banners = [
    {
      title: "Global Industrial Materials",
      subtitle: "Direct from Verified Manufacturers",
      image: "/placeholder.svg?height=400&width=1200",
      color: "from-blue-900 to-blue-700",
    },
    {
      title: "Premium Chemical Supply",
      subtitle: "ISO Certified Products",
      image: "/placeholder.svg?height=400&width=1200",
      color: "from-green-900 to-green-700",
    },
    {
      title: "Bulk Metal & Alloys",
      subtitle: "Competitive Factory Pricing",
      image: "/placeholder.svg?height=400&width=1200",
      color: "from-purple-900 to-purple-700",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="py-2 border-b text-sm">
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  Ship to: Bangladesh
                </span>
                <span>|</span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  10,000+ Suppliers
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-blue-600 transition">
                  Supplier Zone
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Help Center
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Register
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  Sign In
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    Ship to: Bangladesh
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    10,000+ Suppliers
                  </span>
                </div>
                <button onClick={toggleTopHeaderDropdown} className="text-gray-600 hover:text-blue-600 transition">
                  {isTopHeaderDropdownOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

              {isTopHeaderDropdownOpen && (
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col space-y-3">
                    <a href="#" className="hover:text-blue-600 transition">
                      Supplier Zone
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                      Help Center
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                      Register
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                      Sign In
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Header */}
          <div className="flex flex-col md:flex-row items-center py-4 space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="text-2xl font-bold text-blue-600">RawMart</div>

              {/* Icons */}
              <div className="flex md:hidden items-center space-x-4">
                <button className="relative hover:text-blue-600 transition">
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="relative hover:text-blue-600 transition">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="w-full md:max-w-4xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, suppliers, or categories..."
                  className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 md:py-1.5 rounded-md hover:bg-blue-700 transition text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="relative hover:text-blue-600 transition">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="relative hover:text-blue-600 transition">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Categories Navigation */}
          <nav className="hidden md:block relative">
            <div className="flex items-center space-x-8 py-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition">
                    <span>{category.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeCategory === category.name && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-50 hover:text-blue-600 transition"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Expanded Categories */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b fixed top-[153px] left-0 right-0 z-40 overflow-y-auto max-h-[calc(100vh-153px)]">
          <div className="container mx-auto px-4 py-2">
            <div className="mb-4 border-b pb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Categories</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              {categories.map((category) => (
                <div key={category.name} className="py-2 border-b last:border-b-0">
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>{category.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition ${activeCategory === category.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeCategory === category.name && (
                    <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg">
                      {category.subcategories.map((sub) => (
                        <a key={sub} href="#" className="block py-1 hover:text-blue-600">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart (2)</span>
                </button>
                <button className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notifications (3)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-4">
        {/* Banner Carousel */}
        <div className="relative overflow-hidden h-[400px] mb-12">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500`}
              style={{
                transform: `translateX(${(index - currentBanner) * 100}%)`,
              }}
            >
              <div className={`bg-gradient-to-r ${banner.color} h-full relative`}>
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  fill
                  className="object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
                    <p className="text-lg md:text-xl mb-8">{banner.subtitle}</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Features Section */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="text-blue-600 bg-blue-100 p-3 rounded-full">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Today's Deals */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Today's Deals</h2>
            <a href="#" className="text-blue-600 hover:underline flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
              >
                <div className="relative h-48">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition">{deal.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-bold text-blue-600">{deal.price}</span>
                      <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600">Min. Order: {deal.minOrder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Companies */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative w-32 h-16 mb-4 overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Metrics */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-blue-200">Verified Suppliers</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">20M+</div>
                <div className="text-blue-200">Product Listings</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-200">Countries Served</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Quality Assurance & Certification</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              All suppliers on our platform undergo rigorous verification processes and must maintain relevant industry
              certifications. We ensure compliance with international quality standards to provide you with the best
              products and services.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
              Learn More About Our Standards
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">About RawMart</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Buy on RawMart</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    All Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Supplier Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Buyer Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trade Assurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Sell on RawMart</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Supplier Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Learning Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Partner Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Trade Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trade Assurance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Logistics Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Letter of Credit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Inspection Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2024 RawMart. All rights reserved. | Terms of Use | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

