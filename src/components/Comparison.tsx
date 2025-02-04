import React from 'react';
import { Check, X, Zap, Shield, Clock, Award, Cpu, Users } from 'lucide-react';

const competitors = {
  cloudai: {
    name: 'CloudAI',
    features: {
      'AI Model Training Time': '4-6 hours',
      'GPU Types Available': 'Latest NVIDIA A100, V100',
      'Custom AI Development': true,
      'Data Processing Speed': '500K records/sec',
      'Automated MLOps': true,
      'Enterprise Support SLA': '15 minutes',
      'Compliance Certifications': 'SOC 2, HIPAA, GDPR, ISO 27001',
      'Dedicated Solutions Architect': true,
      'Cost Optimization Tools': true,
      'Multi-Region Deployment': true,
    },
    advantages: [
      {
        icon: Zap,
        title: 'Superior Performance',
        description: '40% faster AI model training with our optimized infrastructure',
      },
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Military-grade encryption with real-time threat monitoring',
      },
      {
        icon: Clock,
        title: 'Rapid Deployment',
        description: 'Production-ready AI solutions in weeks, not months',
      },
      {
        icon: Award,
        title: 'Industry Recognition',
        description: 'Named leader in AI Cloud Solutions by Gartner',
      },
      {
        icon: Cpu,
        title: 'Advanced Infrastructure',
        description: 'Latest NVIDIA A100 GPUs and custom AI accelerators',
      },
      {
        icon: Users,
        title: 'Expert Support',
        description: '24/7 dedicated team of ML engineers and data scientists',
      },
    ],
  },
  competitor1: {
    name: 'Competitor A',
    features: {
      'AI Model Training Time': '8-12 hours',
      'GPU Types Available': 'NVIDIA V100 only',
      'Custom AI Development': true,
      'Data Processing Speed': '200K records/sec',
      'Automated MLOps': false,
      'Enterprise Support SLA': '1 hour',
      'Compliance Certifications': 'SOC 2, HIPAA',
      'Dedicated Solutions Architect': false,
      'Cost Optimization Tools': true,
      'Multi-Region Deployment': true,
    },
  },
  competitor2: {
    name: 'Competitor B',
    features: {
      'AI Model Training Time': '10-14 hours',
      'GPU Types Available': 'NVIDIA T4',
      'Custom AI Development': false,
      'Data Processing Speed': '150K records/sec',
      'Automated MLOps': true,
      'Enterprise Support SLA': '4 hours',
      'Compliance Certifications': 'SOC 2',
      'Dedicated Solutions Architect': true,
      'Cost Optimization Tools': false,
      'Multi-Region Deployment': false,
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