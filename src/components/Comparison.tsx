import React from 'react';
import { Check, X, Zap, Shield, Clock, Award, Cpu, Users, DollarSign } from 'lucide-react';

const competitors = {
  cloudai: {
    name: 'CloudAI',
    features: {
      'Total Cost of Ownership Reduction': '40% average',
      'Enterprise SLA Guarantee': '99.99% uptime',
      'Regulatory Compliance': 'SOC 2, HIPAA, GDPR, ISO 27001, PCI DSS',
      'Time to Market': '60% faster deployment',
      'Risk Management': 'Real-time threat monitoring',
      'Data Sovereignty': 'Multi-region support',
      'Integration Capabilities': 'Native enterprise connectors',
      'Vendor Lock-in Protection': 'Open standards support',
      'Scalability': 'Auto-scaling infrastructure',
      'ROI Timeline': '6-8 months average',
    },
    advantages: [
      {
        icon: DollarSign,
        title: 'Cost Optimization',
        description: 'Reduce TCO by 40% with AI-driven resource optimization',
      },
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Complete compliance coverage with real-time threat monitoring',
      },
      {
        icon: Clock,
        title: 'Rapid Time-to-Value',
        description: 'Go live in weeks with pre-built enterprise solutions',
      },
      {
        icon: Award,
        title: 'Industry Leadership',
        description: 'Named leader in Enterprise Cloud Solutions by Gartner',
      },
      {
        icon: Cpu,
        title: 'Future-Ready Infrastructure',
        description: 'Built for next-gen AI and quantum computing readiness',
      },
      {
        icon: Users,
        title: 'Strategic Partnership',
        description: 'Dedicated CIO advisory and solution architecture team',
      },
    ],
  },
  competitor1: {
    name: 'Competitor A',
    features: {
      'Total Cost of Ownership Reduction': '25% average',
      'Enterprise SLA Guarantee': '99.9% uptime',
      'Regulatory Compliance': 'SOC 2, HIPAA',
      'Time to Market': 'Standard deployment',
      'Risk Management': 'Basic monitoring',
      'Data Sovereignty': 'Limited regions',
      'Integration Capabilities': 'Basic integrations',
      'Vendor Lock-in Protection': 'Proprietary standards',
      'Scalability': 'Manual scaling',
      'ROI Timeline': '12-14 months average',
    },
  },
  competitor2: {
    name: 'Competitor B',
    features: {
      'Total Cost of Ownership Reduction': '20% average',
      'Enterprise SLA Guarantee': '99.5% uptime',
      'Regulatory Compliance': 'SOC 2',
      'Time to Market': 'Slower deployment',
      'Risk Management': 'Limited monitoring',
      'Data Sovereignty': 'Single region',
      'Integration Capabilities': 'Limited integrations',
      'Vendor Lock-in Protection': 'Vendor lock-in risk',
      'Scalability': 'Limited scaling',
      'ROI Timeline': '14-16 months average',
    },
  },
};

const Comparison = () => {
  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose CloudAI?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we stack up against the competition with our enterprise-grade AI cloud solutions.
          </p>
        </div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {competitors.cloudai.advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <advantage.icon className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-600 font-semibold">Features</th>
                  {Object.values(competitors).map((competitor) => (
                    <th
                      key={competitor.name}
                      className={`px-6 py-4 text-left font-semibold ${
                        competitor.name === 'CloudAI'
                          ? 'text-blue-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.keys(competitors.cloudai.features).map((feature) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">{feature}</td>
                    {Object.values(competitors).map((competitor) => (
                      <td
                        key={`${competitor.name}-${feature}`}
                        className={`px-6 py-4 ${
                          competitor.name === 'CloudAI'
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-600'
                        }`}
                      >
                        {typeof competitor.features[feature] === 'boolean' ? (
                          competitor.features[feature] ? (
                            <Check className="text-green-500" size={20} />
                          ) : (
                            <X className="text-red-500" size={20} />
                          )
                        ) : (
                          competitor.features[feature]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the CloudAI difference with our enterprise-grade AI solutions and industry-leading support.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule a Comparison Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;