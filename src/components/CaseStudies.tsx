import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const caseStudies = [
  {
    company: 'TechCorp Manufacturing',
    industry: 'Manufacturing',
    result: 'Reduced operational costs by 30%',
    description: 'TechCorp implemented our AI-driven predictive maintenance system across their 12 manufacturing plants. Within 6 months, they achieved a 30% reduction in operational costs, 45% decrease in unplanned downtime, and improved equipment lifespan by 2.5 years. The system now processes data from 10,000+ IoT sensors in real-time.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    company: 'Global Health Systems',
    industry: 'Healthcare',
    result: 'Improved diagnostic accuracy by 45%',
    description: 'Global Health Systems integrated our healthcare AI platform across their network of 8 hospitals. The system processes over 50,000 medical images daily, improving diagnostic accuracy by 45% and reducing patient wait times by 60%. Their radiologists now complete 3x more screenings while maintaining higher accuracy rates.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    company: 'RetailMax',
    industry: 'Retail',
    result: 'Increased inventory turnover by 25%',
    description: 'RetailMax deployed our AI-powered demand forecasting system across their 200+ stores. The system analyzes millions of data points daily, leading to a 25% increase in inventory turnover, 40% reduction in stockouts, and 15% improvement in profit margins. Their supply chain efficiency improved by 35% within the first year.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
];

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading enterprises are transforming their operations with our AI-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={study.image}
                alt={study.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                <p className="text-gray-600 mb-4">{study.result}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                <button 
                  onClick={() => setSelectedStudy(study)}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Case Study
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </section>
  );
};

export default CaseStudies;