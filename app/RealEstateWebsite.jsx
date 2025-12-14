"use client"

import React, { useState } from 'react';
import { Search, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const RealEstateWebsite = () => {
  const [activeFilter, setActiveFilter] = useState('Apartment');
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      id: 1,
      image: '/api/placeholder/400/300',
      title: 'Majestic Royal Mansion',
      location: 'St Ann Black Andrews',
      beds: 4,
      baths: 3,
      sqft: '2,500 sq ft',
      price: '$ 133,500',
      featured: false
    },
    {
      id: 2,
      image: '/api/placeholder/400/300',
      title: 'Verad Resistance',
      location: 'St Ann Black Andrews',
      beds: 3,
      baths: 2,
      sqft: '1,800 sq ft',
      price: '$ 200,000',
      featured: true
    },
    {
      id: 3,
      image: '/api/placeholder/400/300',
      title: 'Valention',
      location: 'St Ann Black Andrews',
      beds: 5,
      baths: 4,
      sqft: '3,200 sq ft',
      price: '$ 170,500',
      featured: false
    }
  ];

  const agents = [
    {
      name: 'Private Pool',
      description: 'Enhance Relaxation And Exclusivity'
    },
    {
      name: 'Private Garden',
      description: 'Provides Greenery And A Serene Environment'
    },
    {
      name: 'Parking Reserve',
      description: 'More Space More And Outdoor Recreation'
    },
    {
      name: 'Spacious Balcony',
      description: 'Offers Living Space And Outdoor Recreation'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      image: '/api/placeholder/300/200',
      title: 'Understanding Real Estate Law',
      category: 'Legal Guidance',
      price: '$ 133,500'
    },
    {
      id: 2,
      image: '/api/placeholder/300/200',
      title: 'Modern Home Design',
      category: 'Architecture',
      price: '$ 133,500'
    },
    {
      id: 3,
      image: '/api/placeholder/300/200',
      title: 'Investment Strategies',
      category: 'Finance',
      price: '$ 133,500'
    },
    {
      id: 4,
      image: '/api/placeholder/300/200',
      title: 'Sustainable Living',
      category: 'Green Homes',
      price: '$ 133,500'
    }
  ];

  const services = [
    {
      number: '01',
      title: 'Furniture Design',
      description: 'Our furniture design service combines style and functionality, tailoring each piece to your unique vision. We focus on high-quality materials and craftsmanship to create stunning, lasting pieces that enhance any space.'
    },
    {
      number: '02',
      title: 'Interior Details',
      description: 'Transform your space with our expert interior detailing. We emphasize dimension, tactile qualities, and captivating visual elements that bring your environment to life through the addition of these final enhancements.'
    },
    {
      number: '03',
      title: 'Home Revamping',
      description: 'Breathe new life into your living space with our home revamping service. We combine traditional influence over the aesthetics, ambiance, and usability of your home, ensuring every detail reflects an our everyday experiences.'
    }
  ];

  const stats = [
    { value: '10+ Million', description: 'Or St Annel Canneletter, Value Lorem Mount Melipireim Releases Vallent Erat Cute Suspendisse Vitae, Tellus Lorem' },
    { value: '8x More', description: 'Or St Annel Canneletter, Value Lorem Mount Melipireim Releases Vallent Erat Cute Suspendisse Vitae, Tellus Lorem' },
    { value: '1+ Million', description: 'Or St Annel Canneletter, Value Lorem Mount Melipireim Releases Vallent Erat Cute Suspendisse Vitae, Tellus Lorem' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                  Welcome To Comfort
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Find Your Dream
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Home With Ease.
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Discover the luxury of modern living while we connect with trusted agents in minutes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Browse Listing
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Property Preview */}
            <div className="relative animate-fade-in-up">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center mb-6">
                  <div className="text-gray-400">
                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Featured Property</h3>
                  <p className="text-gray-600">Luxury living spaces await your discovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{agent.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{agent.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex gap-4 bg-white rounded-full p-2 shadow-lg">
              {['Apartment', 'Office', 'Warehouse'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div 
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.beds}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.baths}
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.sqft}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                    <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Section - User Guide & Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* User Guide */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                User guide for<br />first timer
              </h2>
              
              <div className="space-y-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Step {step}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-medium">Search</span> - Use Filter To Find Properties That Match Your Needs.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats & Case Study */}
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                </div>
              ))}
              
              {/* Case Study Card */}
              <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Abuja, Nigeria. The Transformation Of Real Estate.
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Examine the Noteworthy Shift in the Transformation deepest architecture, home brands, and home expan-sion plan for the Afrolution, both notably shaping how it influence & shaping the future in the Real Estate.Transforming, Creative Crafting, Sustaining & UI/UX
                </p>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Satisfied Clients Speaks</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="flex items-start gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl w-64 h-48 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-rose-500"></div>
                    <div>
                      <h4 className="font-bold text-lg">Bambi Abdullah</h4>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">
                    "I Wished Akuntly Searching Until I Found The Platform. NOW DEAL I Found My Perfect Home, Completed With All Figure, And Ready For Your Life!"
                  </p>
                </div>
              </div>
              
              <button className="w-full py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                See More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Blog Section</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 overflow-hidden">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-sm text-amber-600 font-medium mb-2">{post.category}</p>
                  <h3 className="font-bold text-gray-900 mb-4">{post.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{post.price}</span>
                    <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                      Read
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`rounded-3xl p-10 transition-all duration-500 hover:scale-105 ${
                  index === 0 
                    ? 'bg-white text-gray-900' 
                    : 'bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`leading-relaxed ${index === 0 ? 'text-gray-600' : 'text-gray-300'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Preview Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-6 shadow-2xl">
              {/* Phone Header */}
              <div className="bg-gray-800 rounded-t-[2.5rem] pt-8 px-6 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Find Your Dream<br />Home With Ease.
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Discover the luxury of modern living while we connect with trusted agents.
                </p>
                <button className="w-full py-3 bg-white text-gray-900 rounded-full font-medium text-sm">
                  Browse Listing
                </button>
                <button className="w-full py-3 bg-transparent border border-gray-600 text-white rounded-full font-medium text-sm mt-3">
                  Learn More
                </button>
              </div>

              {/* Phone Content */}
              <div className="bg-gray-100 p-6 space-y-4 max-h-[600px] overflow-y-auto rounded-b-[2.5rem]">
                {/* Preview Card */}
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-32 flex items-center justify-center mb-3">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Property Preview</h4>
                  <p className="text-xs text-gray-600">Featured listing</p>
                </div>

                {/* Features */}
                {agents.slice(0, 3).map((agent, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">{agent.name}</h5>
                      <p className="text-xs text-gray-600">{agent.description}</p>
                    </div>
                  </div>
                ))}

                {/* Property Cards */}
                <div className="space-y-3">
                  {properties.slice(0, 2).map((property) => (
                    <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-32 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="p-3">
                        <h5 className="font-bold text-gray-900 text-sm mb-1">{property.title}</h5>
                        <p className="text-xs text-gray-600 mb-2">{property.location}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-900">{property.price}</span>
                          <button className="px-4 py-1.5 bg-black text-white rounded-full text-xs font-medium">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* User Guide Mobile */}
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm">User guide for first timer</h4>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {step}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900">Step {step}</p>
                          <p className="text-xs text-gray-600">Search - Use Filter To Find Properties</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Mobile */}
                <div className="bg-white rounded-xl p-4 shadow-lg space-y-3">
                  <h4 className="font-bold text-gray-900 text-sm">Satisfied Clients Speaks</h4>
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Bambi Abdullah</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-black text-white rounded-full text-xs font-medium flex items-center justify-center gap-1">
                    See More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Stats Cards Mobile */}
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{stat.value}</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default RealEstateWebsite;
