
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Rocket, Users, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-pegasus-200 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gold-200 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to <span className="bg-gradient-to-r from-pegasus-600 to-purple-600 bg-clip-text text-transparent">Accelerate</span> Your Success?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the next generation of successful entrepreneurs. Our application process is competitive, 
            but the rewards are transformational.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Entrepreneurs Card */}
          <Card className="relative overflow-hidden bg-white border-2 border-pegasus-200 hover:border-pegasus-300 transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pegasus-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-pegasus-600" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-2">For Entrepreneurs</h3>
                <p className="text-gray-600">
                  Ready to scale your startup? Apply to our accelerator program and get the support you need to succeed.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Zap className="w-5 h-5 text-pegasus-600" />
                  <span>12-week intensive program</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Users className="w-5 h-5 text-pegasus-600" />
                  <span>World-class mentorship</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-pegasus-600" />
                  <span>$100K-$500K investment</span>
                </div>
              </div>

              <Button className="w-full bg-hero-gradient hover:opacity-90 text-white font-semibold py-3 group">
                Apply to Accelerator
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Applications close December 31st, 2024
              </p>
            </CardContent>
          </Card>

          {/* Investors Card */}
          <Card className="relative overflow-hidden bg-white border-2 border-gold-200 hover:border-gold-300 transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-100 to-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-2">For Investors</h3>
                <p className="text-gray-600">
                  Join our network of angel investors and VCs. Get early access to our vetted startups.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Zap className="w-5 h-5 text-gold-600" />
                  <span>Pre-screened opportunities</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Users className="w-5 h-5 text-gold-600" />
                  <span>Exclusive investor events</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-gold-600" />
                  <span>Portfolio insights & support</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-gold-500 to-yellow-500 hover:opacity-90 text-white font-semibold py-3 group">
                Join Investor Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Minimum investment: $25K
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
            <a href="mailto:hello@pegasusangel.com" className="hover:text-pegasus-600 transition-colors">
              hello@pegasusangel.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+1-555-0123" className="hover:text-pegasus-600 transition-colors">
              +1 (555) 123-4567
            </a>
            <span className="hidden sm:block">•</span>
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
