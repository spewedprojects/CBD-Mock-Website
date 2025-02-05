import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Business with AI-Driven Cloud Innovation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Partner with CloudAI to accelerate digital transformation, reduce operational costs by 40%, 
            and achieve regulatory compliance while maintaining enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 w-full sm:w-auto">
              Schedule a Strategic Consultation
              <ArrowRight size={20} />
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto">
              View Enterprise Success Stories
            </button>
          </div>
        </div>

        {/* Stats Bar - Updated with more CIO-relevant metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { metric: '40%', label: 'Average Cost Reduction' },
            { metric: '60%', label: 'Faster Time-to-Market' },
            { metric: '99.99%', label: 'Enterprise SLA Uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;