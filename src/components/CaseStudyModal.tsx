import React from 'react';
import { ArrowLeft, CheckCircle, BarChart, Users, Clock } from 'lucide-react';

interface CaseStudyModalProps {
  study: {
    company: string;
    industry: string;
    result: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  const metrics = {
    'TechCorp Manufacturing': [
      { label: 'Cost Reduction', value: '30%', icon: BarChart },
      { label: 'Downtime Decrease', value: '45%', icon: Clock },
      { label: 'Equipment Lifespan Increase', value: '2.5 years', icon: CheckCircle },
    ],
    'Global Health Systems': [
      { label: 'Diagnostic Accuracy', value: '45%', icon: CheckCircle },
      { label: 'Patient Wait Time Reduction', value: '60%', icon: Clock },
      { label: 'Screening Efficiency', value: '3x', icon: BarChart },
    ],
    'RetailMax': [
      { label: 'Inventory Turnover Increase', value: '25%', icon: BarChart },
      { label: 'Stockout Reduction', value: '40%', icon: CheckCircle },
      { label: 'Supply Chain Efficiency', value: '35%', icon: Clock },
    ],
  };

  const challenges = {
    'TechCorp Manufacturing': [
      'Frequent unexpected equipment failures leading to costly downtime',
      'Inefficient maintenance schedules based on fixed intervals',
      'Limited visibility into equipment performance metrics',
      'High operational costs due to reactive maintenance',
    ],
    'Global Health Systems': [
      'Long patient wait times for diagnostic results',
      'Increasing pressure on radiologists to process more images',
      'Need for improved diagnostic accuracy',
      'Manual image analysis causing workflow bottlenecks',
    ],
    'RetailMax': [
      'Inconsistent inventory levels across stores',
      'High rates of stockouts during peak seasons',
      'Inefficient supply chain operations',
      'Manual demand forecasting leading to errors',
    ],
  };

  const solutions = {
    'TechCorp Manufacturing': [
      'Deployed IoT sensors across 12 manufacturing plants',
      'Implemented real-time equipment monitoring system',
      'Developed AI-driven predictive maintenance algorithms',
      'Created automated maintenance scheduling system',
    ],
    'Global Health Systems': [
      'Integrated AI imaging analysis platform across 8 hospitals',
      'Implemented automated image preprocessing workflow',
      'Deployed real-time diagnostic assistance tools',
      'Created centralized medical imaging database',
    ],
    'RetailMax': [
      'Implemented AI-powered demand forecasting system',
      'Deployed automated inventory management across 200+ stores',
      'Created real-time supply chain optimization platform',
      'Integrated point-of-sale data with predictive analytics',
    ],
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <img
              src={study.image}
              alt={study.company}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <div className="text-sm text-blue-600 mb-2">{study.industry}</div>
              <h2 className="text-4xl font-bold mb-4">{study.company}</h2>
              <p className="text-xl text-gray-600">{study.description}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {metrics[study.company as keyof typeof metrics].map((metric) => (
                <div key={metric.label} className="bg-gray-50 p-6 rounded-xl">
                  <metric.icon className="text-blue-600 mb-2" size={24} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {challenges[study.company as keyof typeof challenges].map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  {solutions[study.company as keyof typeof solutions].map((solution) => (
                    <li key={solution} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule a Similar Solution Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;