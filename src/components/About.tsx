
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Rocket, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Focus",
      description: "We identify and nurture startups with the highest potential for exponential growth and market disruption."
    },
    {
      icon: Rocket,
      title: "Rapid Acceleration",
      description: "Our 12-week intensive program compresses years of learning into months of actionable growth strategies."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Access to 100+ successful entrepreneurs, VCs, and industry leaders who guide you through every challenge."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Tap into our worldwide ecosystem of partners, customers, and investors across all major markets."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            About Pegasus Angel
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Transforming <span className="bg-gradient-to-r from-pegasus-600 to-purple-600 bg-clip-text text-transparent">Vision</span> into Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another accelerator. We're a catalyst for extraordinary growth, connecting ambitious founders 
            with the resources, expertise, and capital needed to build category-defining companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pegasus-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-pegasus-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-6 text-gray-900">
                Our Track Record Speaks for Itself
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 2018, Pegasus Angel Accelerator has been the launchpad for some of the world's most innovative startups. 
                Our portfolio companies have collectively raised over $500M in follow-on funding and achieved a combined 
                valuation exceeding $5B.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-pegasus-600 mb-2">94%</div>
                  <div className="text-sm text-gray-500">Survival Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pegasus-600 mb-2">87%</div>
                  <div className="text-sm text-gray-500">Raise Follow-on</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pegasus-600 mb-2">23x</div>
                  <div className="text-sm text-gray-500">Avg ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pegasus-600 mb-2">12</div>
                  <div className="text-sm text-gray-500">Unicorns Created</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pegasus-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="w-32 h-32 bg-hero-gradient rounded-full flex items-center justify-center animate-float">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pegasus-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
