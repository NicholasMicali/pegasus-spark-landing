
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const companies = [
    {
      name: "FlowTech AI",
      industry: "Artificial Intelligence",
      valuation: "$850M",
      growth: "+2,400%",
      description: "AI-powered workflow automation for enterprise teams",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "GreenVault",
      industry: "FinTech",
      valuation: "$650M",
      growth: "+1,800%", 
      description: "Sustainable investment platform for ESG-focused portfolios",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "HealthStream",
      industry: "HealthTech",
      valuation: "$1.2B",
      growth: "+3,200%",
      description: "Telemedicine platform connecting patients with specialists",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "EduNext",
      industry: "EdTech",
      valuation: "$420M",
      growth: "+1,200%",
      description: "Personalized learning platform powered by adaptive AI",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CloudScale",
      industry: "Infrastructure",
      valuation: "$980M",
      growth: "+2,100%",
      description: "Serverless computing platform for modern applications",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "RetailBot",
      industry: "E-commerce",
      valuation: "$340M",
      growth: "+950%",
      description: "AI-driven customer service automation for online retailers",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    {
      icon: DollarSign,
      value: "$5.2B+",
      label: "Combined Valuation"
    },
    {
      icon: TrendingUp,
      value: "1,847%",
      label: "Average Growth"
    },
    {
      icon: Users,
      value: "200+",
      label: "Portfolio Companies"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            Portfolio Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Building Tomorrow's <span className="bg-gradient-to-r from-pegasus-600 to-purple-600 bg-clip-text text-transparent">Unicorns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our portfolio companies are reshaping industries and creating billions in value. 
            Here are some of our most successful accelerator graduates.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pegasus-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-pegasus-600" />
              </div>
              <div className="text-3xl font-bold text-pegasus-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card key={index} className="group overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${company.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xl font-bold">{company.name}</div>
                    <div className="text-sm opacity-90">{company.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{company.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-pegasus-600">{company.valuation}</div>
                      <div className="text-sm text-gray-500">Current Valuation</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{company.growth}</div>
                      <div className="text-sm text-gray-500">Growth Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see the full list of our portfolio companies and their success stories?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-pegasus-600 hover:text-pegasus-700 font-semibold group"
          >
            View Complete Portfolio
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
