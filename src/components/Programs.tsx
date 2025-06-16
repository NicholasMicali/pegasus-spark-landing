
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      name: "Core Accelerator",
      duration: "12 weeks",
      investment: "$100K-$250K",
      equity: "6-8%",
      icon: Zap,
      description: "Our flagship program for early-stage startups ready to scale rapidly.",
      features: [
        "Weekly mentorship sessions",
        "Product development support",
        "Go-to-market strategy",
        "Fundraising preparation",
        "Demo day presentation",
        "12 months post-program support"
      ],
      highlighted: true
    },
    {
      name: "Growth Accelerator", 
      duration: "8 weeks",
      investment: "$250K-$500K",
      equity: "4-6%",
      icon: TrendingUp,
      description: "Intensive program for startups with proven traction seeking rapid expansion.",
      features: [
        "Revenue optimization",
        "Market expansion strategy",
        "Team scaling guidance",
        "Strategic partnerships",
        "Series A preparation",
        "24/7 support access"
      ],
      highlighted: false
    },
    {
      name: "Fellowship Program",
      duration: "6 months",
      investment: "$50K-$100K",
      equity: "2-4%",
      icon: Users,
      description: "Extended mentorship for exceptional founders building long-term visions.",
      features: [
        "Monthly deep-dive sessions",
        "Industry expert network",
        "Thought leadership development",
        "Community building",
        "Flexible timeline",
        "Lifetime alumni access"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Choose Your <span className="bg-gradient-to-r from-pegasus-600 to-purple-600 bg-clip-text text-transparent">Growth Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored acceleration programs designed to meet startups at every stage of their journey, 
            from early validation to rapid scaling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                program.highlighted 
                  ? 'border-2 border-pegasus-300 shadow-xl scale-105' 
                  : 'border border-gray-200 hover:border-pegasus-200'
              }`}
            >
              {program.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-hero-gradient text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${program.highlighted ? 'pt-12' : 'pt-8'} pb-4`}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pegasus-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <program.icon className="w-8 h-8 text-pegasus-600" />
                </div>
                <CardTitle className="text-2xl font-bold font-playfair mb-2">{program.name}</CardTitle>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-pegasus-600 mb-1">{program.investment}</div>
                  <div className="text-sm text-gray-500 mb-2">Investment Range</div>
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span>{program.equity} equity</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-pegasus-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group ${
                    program.highlighted 
                      ? 'bg-hero-gradient hover:opacity-90 text-white' 
                      : 'bg-white border-2 border-pegasus-300 text-pegasus-700 hover:bg-pegasus-50'
                  }`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which program is right for you? Our team is here to help.
          </p>
          <Button variant="outline" className="border-2 border-pegasus-300 text-pegasus-700 hover:bg-pegasus-50 px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
