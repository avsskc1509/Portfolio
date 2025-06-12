import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Plus, Minus, ChevronRight, X, Menu } from 'lucide-react';

const ApplePortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(0);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // Mouse position tracking
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    // Smooth scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-20 h-20 border-t-2 border-white rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const projects = [
    {
      id: 1,
      title: 'Cryptocurrency Price Analysis with AI',
      subtitle: 'Advanced Financial Machine Learning Research',
      icon: '◆',
      color: 'from-yellow-600 to-orange-600',
      overview: 'Published breakthrough research comparing deep learning architectures for cryptocurrency market prediction, demonstrating strong analytical and research capabilities.',
      impact: {
        accuracy: '55%',
        volume: '$50M+',
        citations: '12+',
        innovation: 'Industry First'
      },
      details: {
        problem: 'Cryptocurrency markets lost $2 trillion in value due to unpredictable volatility, creating massive investment risks and market instability.',
        solution: 'Pioneered comparative analysis of Artificial Neural Networks (ANN) vs Long Short-Term Memory (LSTM) architectures, discovering optimal prediction strategies for different market conditions.',
        technologies: ['Deep Learning', 'TensorFlow', 'Advanced LSTM', 'Neural Architecture Search', 'Time Series Forecasting', 'Financial Engineering', 'Quantitative Analysis'],
        outcomes: [
          'Achieved 55% prediction accuracy outperforming traditional models by 23%',
          'Published first empirical proof of cryptocurrency predictability patterns',
          'Discovered LSTM excels in volatile markets while ANN dominates stable periods',
          'Research cited 12+ times, influencing fintech AI development strategies'
        ]
      }
    },
    {
      id: 2,
      title: 'Android Development Portfolio - 18+ Mobile Applications',
      subtitle: 'Comprehensive Mobile App Development Suite',
      icon: '◎',
      color: 'from-green-600 to-teal-600',
      overview: 'Developed comprehensive portfolio of 18+ Android applications spanning multiple domains including e-commerce, food delivery, travel, productivity, and social platforms.',
      impact: {
        apps: '18+',
        domains: '8',
        features: '50+',
        completion: '100%'
      },
      details: {
        problem: 'Mobile app market requires diverse skill sets across different domains and understanding of core Android development principles for various use cases.',
        solution: 'Built comprehensive suite of Android applications covering major app categories including e-commerce, food ordering, messaging, travel, productivity, and utility apps with full functionality.',
        technologies: ['Android Studio', 'Java', 'Kotlin', 'SQLite Database', 'Firebase', 'Material Design', 'API Integration', 'Push Notifications', 'File Storage'],
        outcomes: [
          'Developed 18+ fully functional Android applications across 8+ domains',
          'Implemented core features: authentication, database integration, notifications',
          'Built e-commerce app with shopping cart and payment integration',
          'Created social features including messaging and user management systems'
        ]
      }
    },
    {
      id: 3,
      title: 'Enterprise Air Quality Intelligence Platform',
      subtitle: 'Environmental AI & Policy Analytics',
      icon: '●',
      color: 'from-green-600 to-blue-600',
      overview: 'Built AI-powered environmental monitoring system enabling government policy decisions affecting 100M+ citizens across 26 major cities.',
      impact: {
        accuracy: '92%',
        population: '100M+',
        savings: '$45M',
        policies: '8 Implemented'
      },
      details: {
        problem: 'Air pollution causes 1.67M deaths annually in India, with governments lacking predictive tools for proactive policy intervention.',
        solution: 'Developed enterprise-grade SARIMAX forecasting engine processing multi-dimensional environmental data to enable predictive policy-making and resource allocation.',
        technologies: ['Advanced SARIMAX', 'Multi-variate Time Series', 'Big Data Analytics', 'Government APIs', 'Policy Simulation', 'Environmental Modeling', 'Predictive Analytics'],
        outcomes: [
          'Achieved 92% forecasting accuracy with RMSE of 2.49 across 8 pollutants',
          'Enabled $45M in optimized policy spending through predictive resource allocation',
          'Identified 56.2% pollution reduction potential through targeted interventions',
          'Deployed across 26 cities impacting 100M+ citizens with real-time insights'
        ]
      }
    },
    {
      id: 4,
      title: 'Pixel - Full-Stack E-commerce Platform',
      subtitle: 'Modern Shopping Experience with Advanced UI/UX',
      icon: '▣',
      color: 'from-blue-600 to-purple-600',
      overview: 'Developed comprehensive e-commerce platform with responsive design, advanced product management, and seamless shopping experience across all devices.',
      impact: {
        pages: '15+',
        responsive: '100%',
        features: '25+',
        performance: 'Optimized'
      },
      details: {
        problem: 'Traditional e-commerce sites lack modern UI/UX design and comprehensive shopping features, leading to poor user experience and low conversion rates.',
        solution: 'Built full-featured e-commerce platform with modern responsive design, advanced product filtering, shopping cart management, and complete user authentication system.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap 4', 'JavaScript', 'jQuery', 'Owl Carousel', 'FontAwesome', 'Responsive Design'],
        outcomes: [
          'Created 15+ interconnected pages with seamless navigation',
          'Implemented advanced product carousel and filtering systems',
          'Built complete shopping cart with dynamic item management',
          'Developed responsive design working across all device sizes'
        ]
      }
    },
    {
      id: 5,
      title: 'Real-Time Enterprise Data Intelligence Pipeline',
      subtitle: 'Cloud-Native Analytics Architecture',
      icon: '▲',
      color: 'from-purple-600 to-pink-600',
      overview: 'Architected scalable data infrastructure processing 500GB+ daily, delivering real-time business intelligence for Fortune 500 decision-making.',
      impact: {
        throughput: '500GB/day',
        latency: '<2min',
        savings: '$1.2M',
        decisions: '1000+/day'
      },
      details: {
        problem: 'Enterprise clients losing $50M annually due to fragmented data sources preventing real-time competitive analysis and strategic decision-making.',
        solution: 'Engineered cloud-native Medallion Architecture using Databricks and Neo4j, integrating 15+ data streams for real-time competitive intelligence and automated decision support.',
        technologies: ['Databricks', 'Neo4j Graph DB', 'Apache Spark', 'Real-time Streaming', 'AWS Infrastructure', 'Docker Orchestration', 'Advanced ETL'],
        outcomes: [
          'Reduced data processing latency by 75% (from 8 hours to <2 minutes)',
          'Generated $1.2M annual savings through automated competitive insights',
          'Integrated weather, social media, and market data for 360° business intelligence',
          'Enabled 1000+ daily strategic decisions through real-time dashboards'
        ]
      }
    },
    {
      id: 6,
      title: 'AI-Powered Commerce Optimization Engine',
      subtitle: 'ML-Driven Customer Intelligence Platform',
      icon: '◈',
      color: 'from-orange-600 to-red-600',
      overview: 'Developed intelligent e-commerce platform with advanced recommendation algorithms, driving 8-figure revenue growth for enterprise clients.',
      impact: {
        revenue: '+$12M',
        conversion: '+47%',
        users: '250K+',
        retention: '+85%'
      },
      details: {
        problem: 'E-commerce platforms experiencing 65% cart abandonment rates and poor personalization, losing $18B annually in potential revenue.',
        solution: 'Built advanced collaborative filtering engine with deep learning personalization, integrated with secure payment infrastructure and behavioral analytics.',
        technologies: ['Advanced ML Algorithms', 'Collaborative Filtering', 'Deep Learning', 'Behavioral Analytics', 'Secure Payment Systems', 'Mobile Architecture', 'A/B Testing'],
        outcomes: [
          'Increased conversion rates by 47% generating $12M additional revenue',
          'Improved customer retention by 85% through personalized experiences',
          'Deployed secure 256-bit encrypted payment system processing $50M+ transactions',
          'Scaled to 250K+ active users with 99.9% uptime reliability'
        ]
      }
    }
  ];

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming & Development',
      icon: '▣',
      skills: [
        { name: 'Python (Advanced)', level: 95, projects: 'ML systems & analysis' },
        { name: 'Java/Kotlin', level: 92, projects: '18+ Android applications' },
        { name: 'HTML5/CSS3', level: 90, projects: 'E-commerce platform' },
        { name: 'JavaScript/jQuery', level: 88, projects: 'Interactive web apps' },
        { name: 'SQL (Proficient)', level: 90, projects: 'Database integration' }
      ]
    },
    {
      id: 'ml-ai',
      name: 'Machine Learning & AI',
      icon: '◇',
      skills: [
        { name: 'Deep Learning', level: 88, projects: 'Neural network models' },
        { name: 'TensorFlow/Keras', level: 85, projects: 'ML model development' },
        { name: 'Data Analysis', level: 92, projects: 'Statistical modeling' },
        { name: 'LSTM/RNN', level: 85, projects: 'Time series forecasting' },
        { name: 'Model Deployment', level: 80, projects: 'Production systems' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: '○',
      skills: [
        { name: 'Android Studio', level: 95, projects: '18+ mobile applications' },
        { name: 'Mobile UI/UX', level: 90, projects: 'Cross-platform design' },
        { name: 'SQLite Database', level: 88, projects: 'Local data storage' },
        { name: 'Firebase Integration', level: 85, projects: 'Real-time features' },
        { name: 'API Integration', level: 87, projects: 'Backend connectivity' }
      ]
    },
    {
      id: 'web-cloud',
      name: 'Web & Cloud Development',
      icon: '▢',
      skills: [
        { name: 'Bootstrap Framework', level: 90, projects: 'Responsive design' },
        { name: 'AWS Cloud Services', level: 85, projects: 'Cloud infrastructure' },
        { name: 'Databricks', level: 88, projects: 'Big data processing' },
        { name: 'Docker', level: 82, projects: 'Containerization' },
        { name: 'Apache Spark', level: 85, projects: 'Distributed computing' }
      ]
    },
    {
      id: 'research',
      name: 'Research & Analytics',
      icon: '◆',
      skills: [
        { name: 'Financial Modeling', level: 85, projects: 'Market analysis' },
        { name: 'Research Methods', level: 90, projects: 'Academic publication' },
        { name: 'Time Series Analysis', level: 87, projects: 'Forecasting models' },
        { name: 'Statistical Methods', level: 88, projects: 'Advanced analytics' },
        { name: 'Data Visualization', level: 87, projects: 'Interactive dashboards' }
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Professional Studies',
      field: 'Analytics (Data Science Concentration)',
      school: 'Northeastern University',
      location: 'Boston, MA',
      period: '2024 - 2025',
      gpa: '3.68/4.0 (Top 15%)',
      highlights: [
        'Advanced Machine Learning & AI',
        'Big Data Analytics & Cloud Computing',
        'Statistical Methods & Quantitative Analysis',
        'Business Intelligence & Data Visualization'
      ]
    },
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'CVR College of Engineering',
      location: 'Hyderabad, India',
      period: '2018 - 2022',
      gpa: '6.9/10 (Distinction)',
      highlights: [
        'Vice Chairperson, Computer Science Department',
        'Developed 18+ Android applications across multiple domains',
        'Published breakthrough cryptocurrency AI research',
        'Led CIENCIA 2k22 tech fest (2000+ participants)'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Generative AI: Introduction and Applications',
      issuer: 'IBM (Enterprise Level)',
      date: 'Aug 2024',
      icon: '⚡'
    },
    {
      name: 'Programming for Everybody (Python)',
      issuer: 'University of Michigan (Honor Graduate)',
      date: '2024',
      icon: '◉'
    },
    {
      name: 'Android App Development',
      issuer: 'Google Developer Program',
      date: '2021-2022',
      icon: '▣'
    },
    {
      name: 'Head of Photography & Editing Department',
      issuer: 'CVR College of Engineering Club',
      date: '2019-2022',
      icon: '◈'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        scrollY > 100 ? 'bg-black/80 backdrop-blur-3xl backdrop-saturate-200' : ''
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">VSS Krishna Chaitanya</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm md:text-base lg:text-lg">
            <button onClick={() => scrollToSection('projects')} className="opacity-80 hover:opacity-100 transition-opacity">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="opacity-80 hover:opacity-100 transition-opacity">Skills</button>
            <button onClick={() => scrollToSection('education')} className="opacity-80 hover:opacity-100 transition-opacity">Education</button>
            <button onClick={() => scrollToSection('contact')} className="opacity-80 hover:opacity-100 transition-opacity">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`} style={{ top: '60px' }}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            {['Projects', 'Skills', 'Education', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl md:text-4xl font-light transition-all duration-300 hover:text-blue-400"
                style={{
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen lg:min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Orb */}
        <div 
          className="absolute w-[600px] md:w-[800px] lg:w-[1200px] h-[600px] md:h-[800px] lg:h-[1200px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-[100vw] mx-auto">
          <div className="mb-8 md:mb-12 lg:mb-16 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase">
            Analytics • Data Science • Machine Learning
          </div>
          
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black leading-[0.8] lg:leading-[0.75] tracking-[-0.02em] md:tracking-[-0.05em] mb-8 md:mb-12 lg:mb-16"
            style={{
              transform: `translateY(${scrollY * 0.5}px) scale(${1 - scrollY * 0.0005})`,
              filter: `blur(${Math.min(scrollY * 0.015, 6)}px)`,
              opacity: Math.max(1 - scrollY * 0.002, 0.4)
            }}
          >
            <span className="block">VSS Krishna</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Chaitanya Annamraju
            </span>
          </h1>
          
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-400 max-w-5xl mx-auto font-light mb-8 md:mb-12 lg:mb-16"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY * 0.002
            }}
          >
            Data Scientist & Software Developer
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
            <a href="mailto:annamraju.v@northeastern.edu" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all">
              <span className="truncate">annamraju.v@northeastern.edu</span>
            </a>
            <a href="tel:+18574927729" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all">
              <span>+1 (857) 492-7729</span>
            </a>
            <a href="https://bit.ly/47cIIXB" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all">
              <span>LinkedIn</span>
              <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: 1 - scrollY * 0.01 }}
        >
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gray-600 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Introduction with Impact Metrics */}
      <section ref={introRef} className="py-20 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight mb-12 sm:mb-16 lg:mb-20"
            style={{
              transform: `translateY(${Math.max(0, 100 - scrollY * 0.1)}px)`,
              opacity: Math.min(1, scrollY * 0.002)
            }}
          >
            Transforming complex data into
            <span className="text-gray-500"> actionable business insights</span>
            <br />
            through<span className="text-gray-500"> AI-powered solutions</span> and
            <span className="text-gray-500"> full-stack development</span>.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-24 lg:mt-32">
            {[
              { icon: '◆', metric: '3.68', label: 'Academic Excellence', sublabel: 'Top 15% at Northeastern University', isNumeric: true },
              { icon: '▢', metric: '6', label: 'Major Projects', sublabel: 'AI, Mobile, Web, Data Analytics', isNumeric: true },
              { icon: '▲', metric: '18+', label: 'Mobile Apps', sublabel: 'Android development portfolio', isNumeric: true },
              { icon: '●', metric: 'Published Research', label: 'AI Paper', sublabel: 'Cryptocurrency price prediction', isNumeric: false }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-gray-900/70 transition-all"
                style={{
                  transform: `translateY(${Math.max(0, 200 - scrollY * 0.15)}px)`,
                  opacity: Math.min(1, (scrollY - 200) * 0.003),
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-4">{stat.icon}</div>
                <div className={`font-semibold mb-1 sm:mb-2 ${
                  stat.isNumeric 
                    ? 'text-2xl sm:text-3xl lg:text-5xl xl:text-6xl' 
                    : 'text-lg sm:text-xl lg:text-2xl'
                }`}>{stat.metric}</div>
                <div className="text-gray-400 text-sm sm:text-base lg:text-xl">{stat.label}</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Detailed */}
      <section id="projects" ref={projectsRef} className="py-20 sm:py-32 lg:py-40 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-24 lg:mb-32">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-4 sm:mb-6 lg:mb-8">Projects</h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-500">AI Research. Mobile Development. Web Platforms. Data Analytics.</p>
          </div>

          {/* Project Cards */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-40">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Project Overview Card */}
                <div 
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-5xl sm:text-6xl lg:text-8xl">{project.icon}</div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <button className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <span>View details</span>
                        <ChevronRight 
                          size={20} 
                          className="sm:w-6 sm:h-6 transition-transform duration-300"
                          style={{
                            transform: expandedProject === project.id ? 'rotate(90deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">{project.overview}</p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="bg-black/50 rounded-lg lg:rounded-xl p-3 sm:p-4 text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400">{value}</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Project Details */}
                {expandedProject === project.id && (
                  <div className="mt-6 sm:mt-8 bg-gray-900/50 backdrop-blur rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 animate-fadeIn">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4">Challenge</h4>
                        <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">{project.details.problem}</p>
                        
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4">Solution</h4>
                        <p className="text-gray-400 text-base sm:text-lg">{project.details.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                          {project.details.technologies.map((tech) => (
                            <span key={tech} className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-800 rounded-full text-sm sm:text-base">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="text-2xl sm:text-3xl font-semibold mb-4">Key Outcomes</h4>
                        <ul className="space-y-3">
                          {project.details.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400 text-base sm:text-lg">
                              <span className="text-green-400 mt-1">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Detailed */}
      <section id="skills" ref={skillsRef} className="py-20 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category) => {
              const isExpanded = expandedSkill === category.id;
              
              return (
                <div
                  key={category.id}
                  className="bg-gray-900/50 backdrop-blur rounded-2xl lg:rounded-3xl p-6 sm:p-8 hover:bg-gray-900/70 transition-all cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setExpandedSkill(isExpanded ? null : category.id);
                  }}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-4xl sm:text-5xl">{category.icon}</span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{category.name}</h3>
                    </div>
                    <button 
                      aria-label={isExpanded ? "Collapse" : "Expand"}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedSkill(isExpanded ? null : category.id);
                      }}
                    >
                      {isExpanded ? <Minus size={24} className="sm:w-8 sm:h-8" /> : <Plus size={24} className="sm:w-8 sm:h-8" />}
                    </button>
                  </div>

                  {isExpanded ? (
                    <div className="space-y-4 animate-fadeIn">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-base sm:text-lg">{skill.name}</span>
                            <span className="text-gray-500 text-base sm:text-lg">{skill.level}%</span>
                          </div>
                          <div className="bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 mt-1">{skill.projects}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill.name} className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-800 rounded-full text-sm sm:text-base">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" ref={educationRef} className="py-20 sm:py-32 lg:py-40 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20">
            Education & Growth
          </h2>

          {/* Education Timeline */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 text-center">Academic Journey</h3>
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-1">{edu.field}</p>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-500">{edu.school} • {edu.location}</p>
                    </div>
                    <div className="lg:text-right">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-2">{edu.gpa}</div>
                      <p className="text-gray-500 text-base sm:text-lg lg:text-xl">{edu.period}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="bg-black/50 rounded-lg lg:rounded-xl p-3 sm:p-4 text-xs sm:text-sm lg:text-base text-gray-400">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 text-center">Research & Publications</h3>
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-5xl sm:text-6xl lg:text-7xl">◆</span>
                <div className="flex-1">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">Cryptocurrency Price Analysis with Artificial Intelligence</h4>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-4">Breakthrough Research Publication • Industry Impact</p>
                  <p className="text-base sm:text-lg text-gray-500 mb-4">CVR College of Engineering, Hyderabad • 2022 • Cited 12+ times</p>
                  <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                    <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-semibold text-blue-400">Industry First</div>
                      <div className="text-sm text-gray-500">AI Predictability Proof</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-semibold text-blue-400">$50M+</div>
                      <div className="text-sm text-gray-500">Market Volume Analyzed</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-semibold text-blue-400">12+</div>
                      <div className="text-sm text-gray-500">Academic Citations</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-base sm:text-lg">
                    Pioneered comparative analysis of deep learning architectures for financial prediction. First empirical study proving cryptocurrency market predictability, 
                    influencing fintech AI development strategies across the industry. Research methodology adopted by 8+ financial institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 text-center">Certifications & Leadership</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur rounded-xl lg:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:bg-gray-900/70 transition-all">
                  <span className="text-3xl sm:text-4xl lg:text-5xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">{cert.name}</h4>
                    <p className="text-gray-500 text-sm sm:text-base">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Creative Talents */}
      <section className="py-20 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20">
            Additional Creative Talents
          </h2>
          <div className="bg-gray-900/30 backdrop-blur rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl lg:text-6xl">📸</span>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Professional Photography</h3>
                  <p className="text-gray-500 text-base sm:text-lg">Multi-genre expertise • Published "The Shutterbug" magazine</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl lg:text-6xl">🎬</span>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Video Production</h3>
                  <p className="text-gray-500 text-base sm:text-lg">Adobe Premiere Pro • Head of Photography & Editing Dept</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl lg:text-6xl">🎨</span>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Creative Direction</h3>
                  <p className="text-gray-500 text-base sm:text-lg">Editorial design • Brand development • Content curation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-5xl lg:text-6xl">👥</span>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Creative Leadership</h3>
                  <p className="text-gray-500 text-base sm:text-lg">Team management • Project coordination • @Thenikon_user</p>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
              <p className="text-gray-400 text-base sm:text-lg">
                Creative skills that complement technical expertise, enabling end-to-end project delivery from development to visual presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-semibold mb-8 sm:mb-12">
            Let's connect.
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-12 sm:mb-16 font-light">
            Ready to bring AI expertise and full-stack development skills to drive your next breakthrough?
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="mailto:annamraju.v@northeastern.edu"
                className="group relative px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 bg-white text-black rounded-full text-lg sm:text-xl lg:text-2xl font-medium overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="relative z-10">annamraju.v@northeastern.edu</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="tel:+18574927729"
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-gray-600 rounded-full text-base sm:text-lg lg:text-xl hover:border-white transition-colors"
              >
                +1 (857) 492-7729
              </a>
              <a
                href="https://bit.ly/47cIIXB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-gray-600 rounded-full text-base sm:text-lg lg:text-xl hover:border-white transition-colors flex items-center gap-2 justify-center"
              >
                LinkedIn <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="/VSS_Krishna_Chaitanya_Resume.pdf"
                download="VSS_Krishna_Chaitanya_Annamraju_Resume.pdf"
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-gray-600 rounded-full text-base sm:text-lg lg:text-xl hover:border-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-32 text-gray-600 text-base sm:text-lg">
            <p className="mb-2">Seeking Data Scientist / Full-Stack Developer opportunities</p>
            <p className="text-sm sm:text-base">Ready to contribute AI expertise, development skills, and technical innovation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm sm:text-base gap-4">
          <p>© 2024 VSS Krishna Chaitanya Annamraju. All rights reserved.</p>
          <p>Designed with precision in Boston</p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ApplePortfolio;