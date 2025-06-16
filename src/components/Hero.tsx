
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pegasus-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gold-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-pegasus-200 mb-8">
            <Zap className="w-4 h-4 text-pegasus-600 mr-2" />
            <span className="text-sm font-medium text-pegasus-800">Now Accepting Applications for Cohort 2024</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            <span className="bg-gradient-to-r from-pegasus-600 via-purple-600 to-gold-500 bg-clip-text text-transparent">
              Accelerating
            </span>
            <br />
            <span className="text-gray-900">Startup Success</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-inter">
            Where visionary startups meet transformative capital. We accelerate the next generation of unicorns through 
            <span className="font-semibold text-pegasus-700"> mentorship, funding, and strategic partnerships.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-pegasus-600" />
              <span className="font-semibold">$500M+</span>
              <span className="text-gray-500">Invested</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-5 h-5 text-pegasus-600" />
              <span className="font-semibold">200+</span>
              <span className="text-gray-500">Startups</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Zap className="w-5 h-5 text-pegasus-600" />
              <span className="font-semibold">15x</span>
              <span className="text-gray-500">Avg. Growth</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button size="lg" className="bg-hero-gradient hover:opacity-90 text-white font-semibold px-8 py-4 text-lg group">
              Apply to Accelerator
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-pegasus-300 text-pegasus-700 hover:bg-pegasus-50 px-8 py-4 text-lg group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="opacity-60">
            <p className="text-sm text-gray-500 mb-4">Trusted by founders from</p>
            <div className="flex justify-center items-center space-x-8 grayscale">
              <div className="w-20 h-8 bg-gray-300 rounded opacity-50"></div>
              <div className="w-24 h-8 bg-gray-300 rounded opacity-50"></div>
              <div className="w-16 h-8 bg-gray-300 rounded opacity-50"></div>
              <div className="w-22 h-8 bg-gray-300 rounded opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
