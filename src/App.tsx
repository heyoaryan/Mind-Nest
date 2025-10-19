import { useState, useEffect } from 'react';
import { BookOpen, Gamepad2, Brain, Video, Globe, FileText, ArrowRight, Star, Users, Target, Zap, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '1-on-1 Interactive Sessions',
      description: 'Personalized learning experience with dedicated one-on-one sessions where students get individual attention and customized teaching approach.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Best Teachers',
      description: 'Learn from highly qualified, experienced educators who are passionate about teaching and committed to student success.'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Live Classes',
      description: 'Real-time interactive classes with expert teachers, bringing concepts to life through engaging and dynamic learning sessions.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'India-First, Global Vision',
      description: 'Starting with India\'s diverse educational needs, we\'re building a platform that will expand globally to make quality education accessible worldwide.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Multi-Language Support',
      description: 'Learn in your preferred language with comprehensive support for Hindi, English, and regional languages according to your needs.'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Gamified Learning Experience',
      description: 'Make learning fun with interactive games, points, badges, and rewards that keep students motivated and engaged throughout their journey.'
    }
  ];

  const steps = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Sign Up',
      description: 'Create your account as a student or teacher'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Choose Your Path',
      description: 'Select subjects and learning goals'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Start Learning',
      description: 'Begin your journey with interactive lessons'
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Track Progress',
      description: 'Watch your skills grow with detailed analytics'
    }
  ];

  const founders = [
    {
      name: 'Aryan Singh Thakur',
      role: 'Co-Founder, CEO & CTO',
      quote: '"Mind Nest is more than just an online learning platform - it\'s a revolution in education. We\'re creating a space where cute, curious students can learn 1-on-1 with passionate teachers, making education personal, engaging, and truly transformative."'
    },
    {
      name: 'Aditi Singh',
      role: 'Co-Founder & COO',
      quote: '"Our vision is to make quality education accessible to every child in India first, then expand globally. Through technology and innovation, we\'re building bridges between students and teachers, creating meaningful learning experiences that last a lifetime."'
    },
    {
      name: 'Pawan Singh',
      role: 'Co-Founder & Head of Operations',
      quote: '"Education is the foundation of a better tomorrow. At Mind Nest, we\'re not just teaching subjects - we\'re nurturing creativity, critical thinking, and confidence in every young mind. Together, we\'re building the future leaders of tomorrow."'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
          <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10 w-full">
          <div className="mb-8 sm:mb-12 animate-fade-in-down">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-lg opacity-30"></div>
                <BookOpen className="relative w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 leading-tight">
                Mind <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Nest</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-semibold mb-4 sm:mb-6 animate-fade-in px-2">
              Building Bright Minds for a Better Future
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
              Transforming primary education through gamified learning, interactive content, and personalized teaching experiences. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center animate-fade-in-up mb-12 sm:mb-16 px-4">
            <a
              href="https://forms.gle/TVCgS7xRhoVXr2E97"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 justify-center border-2 border-blue-400"
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base lg:text-lg">Start Learning Today</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="https://forms.gle/U5wRTbmtafK4GcgH8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 justify-center border-2 border-yellow-300"
            >
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base lg:text-lg">Teach with Us</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          <div className="mt-12 sm:mt-16 animate-bounce-slow">
            <div className="inline-block p-4 sm:p-6 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-white/30">
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="section-about"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              What is <span className="text-blue-600">Mind Nest?</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 order-2 md:order-1">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Mind Nest is revolutionizing primary education through cutting-edge technology and innovative teaching methods.
                  We're creating a world where learning becomes an exciting adventure, connecting bright young minds with 
                  passionate educators through interactive, gamified experiences.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our platform combines the power of AI-driven personalization with human touch, ensuring every child learns 
                  at their own pace while building confidence and curiosity. We're not just teaching subjects—we're nurturing 
                  the next generation of thinkers, creators, and leaders.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 md:order-2">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                  <Brain className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="section-features"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${
          isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              Amazing <span className="text-blue-600">Features</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg px-4">
              Discover what makes Mind Nest special
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="section-how"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible['section-how'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg px-4">
              Get started in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <div className="mt-6 sm:mt-8 mb-3 sm:mb-4 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl text-white shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        id="section-founders"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-yellow-100 transition-all duration-1000 ${
          isVisible['section-founders'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
              Meet Our <span className="text-blue-600">Visionaries</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg max-w-3xl mx-auto px-4">
              The passionate minds behind Mind Nest, dedicated to revolutionizing education through innovation and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                  <p className="text-base sm:text-lg text-blue-600 font-semibold">{founder.role}</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left italic">
                    {founder.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Together, we're building Mind Nest to bridge the gap between traditional education and modern learning needs. 
                Our vision is to create an ecosystem where every child can learn at their own pace, in their own way, 
                with the support of passionate educators and cutting-edge technology.
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                  Building the Future of Education
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h3 className="text-xl sm:text-2xl font-bold">Mind <span className="text-blue-400">Nest</span></h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Building bright minds for a better future through innovative online learning.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <a href="mailto:mindnest@gmail.com" className="text-sm sm:text-base">mindnestlearn@gmail.com</a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <a href="mailto:mindnest@zohomail.in" className="text-sm sm:text-base">mindnestlearn@zohomail.in</a>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transform hover:scale-110 transition-all">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold mb-3 sm:mb-4 text-sm sm:text-base shadow-xl hover:bg-white/30 transition-all duration-300 animate-pulse hover:animate-bounce">
              <span className="animate-pulse">🚀</span> App Launching Soon in <span className="text-yellow-300 font-bold animate-pulse">2026</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Mind Nest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
