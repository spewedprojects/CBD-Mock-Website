import React, { useState } from 'react';
import { Brain, Factory, ShoppingCart, Activity, Database, Shield } from 'lucide-react';
import SolutionDetails from './SolutionDetails';

const solutions = [
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Advanced predictive analytics and automation tools powered by state-of-the-art machine learning models.',
    id: 'ai-ml',
  },
  {
    icon: Factory,
    title: 'Manufacturing Intelligence',
    description: 'Predictive maintenance and quality control systems that reduce downtime by up to 50%.',
    id: 'manufacturing',
  },
  {
    icon: ShoppingCart,
    title: 'Retail Analytics',
    description: 'Demand forecasting and inventory optimization using real-time market data analysis.',
    id: 'retail',
  },
  {
    icon: Activity,
    title: 'Healthcare Solutions',
    description: 'HIPAA-compliant diagnostic tools and patient care optimization systems.',
    id: 'healthcare',
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Scalable data processing pipelines with real-time analytics and reporting.',
    id: 'data-processing',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built-in.',
    id: 'security',
  },
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored AI and cloud solutions to drive innovation and efficiency across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => setSelectedSolution(solution.id)}
            >
              <solution.icon
                size={32}
                className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
              <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedSolution && (
        <SolutionDetails
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </section>
  );
};

export default Solutions;