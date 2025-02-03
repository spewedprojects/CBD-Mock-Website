import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SolutionDetailProps {
  solution: string;
  onClose: () => void;
}

const solutionDetails = {
  'ai-ml': {
    title: 'AI/ML Solutions',
    description: 'Advanced predictive analytics and automation tools powered by state-of-the-art machine learning models.',
    features: [
      'Custom AI Model Development',
      'AutoML Platform',
      'Neural Network Training',
      'MLOps Pipeline Integration',
      'Model Monitoring & Retraining',
    ],
    benefits: [
      'Reduce development time by 60%',
      'Improve prediction accuracy by 40%',
      'Automate 75% of routine decisions',
      'Scale AI operations efficiently',
    ],
    useCases: [
      'Customer Behavior Prediction',
      'Fraud Detection Systems',
      'Natural Language Processing',
      'Computer Vision Applications',
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'CUDA-enabled GPU clusters',
      'Distributed Training',
    ],
  },
  manufacturing: {
    title: 'Manufacturing Intelligence',
    description: 'Predictive maintenance and quality control systems that reduce downtime by up to 50%.',
    features: [
      'Real-time Equipment Monitoring',
      'Predictive Maintenance',
      'Quality Control Automation',
      'Supply Chain Optimization',
      'Digital Twin Integration',
    ],
    benefits: [
      'Reduce maintenance costs by 40%',
      'Improve production quality by 35%',
      'Optimize inventory by 25%',
      'Increase equipment lifespan',
    ],
    useCases: [
      'Assembly Line Optimization',
      'Defect Detection',
      'Inventory Management',
      'Energy Consumption Optimization',
    ],
    technologies: [
      'IoT Sensors',
      'Edge Computing',
      'Computer Vision',
      'Time Series Analysis',
    ],
  },
  retail: {
    title: 'Retail Analytics',
    description: 'Demand forecasting and inventory optimization using real-time market data analysis.',
    features: [
      'Demand Forecasting',
      'Price Optimization',
      'Customer Segmentation',
      'Inventory Management',
      'Personalization Engine',
    ],
    benefits: [
      'Increase sales by 30%',
      'Reduce stockouts by 45%',
      'Improve customer retention by 25%',
      'Optimize pricing strategies',
    ],
    useCases: [
      'Dynamic Pricing',
      'Customer Journey Analysis',
      'Store Layout Optimization',
      'Promotion Effectiveness',
    ],
    technologies: [
      'Real-time Analytics',
      'Machine Learning',
      'Big Data Processing',
      'Recommendation Systems',
    ],
  },
  healthcare: {
    title: 'Healthcare Solutions',
    description: 'HIPAA-compliant diagnostic tools and patient care optimization systems.',
    features: [
      'Medical Image Analysis',
      'Patient Risk Assessment',
      'Treatment Optimization',
      'Clinical Trial Matching',
      'Remote Patient Monitoring',
    ],
    benefits: [
      'Improve diagnosis accuracy by 45%',
      'Reduce patient wait times by 30%',
      'Optimize resource allocation by 40%',
      'Enhance patient outcomes',
    ],
    useCases: [
      'Disease Detection',
      'Patient Flow Optimization',
      'Drug Discovery',
      'Personalized Medicine',
    ],
    technologies: [
      'Deep Learning',
      'Secure Health Records',
      'Telemedicine Platform',
      'Biomedical Data Analysis',
    ],
  },
  'data-processing': {
    title: 'Data Processing',
    description: 'Scalable data processing pipelines with real-time analytics and reporting.',
    features: [
      'Real-time Data Processing',
      'ETL Pipeline Automation',
      'Data Warehousing',
      'Analytics Dashboard',
      'Custom Reporting',
    ],
    benefits: [
      'Process data 5x faster',
      'Reduce data errors by 90%',
      'Automate 80% of reporting',
      'Real-time insights delivery',
    ],
    useCases: [
      'Log Analysis',
      'Customer Data Integration',
      'Business Intelligence',
      'Regulatory Reporting',
    ],
    technologies: [
      'Apache Spark',
      'Kafka',
      'ElasticSearch',
      'Data Lakes',
    ],
  },
  security: {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built-in.',
    features: [
      'Zero Trust Architecture',
      'Threat Detection',
      'Compliance Automation',
      'Identity Management',
      'Data Encryption',
    ],
    benefits: [
      'Reduce security incidents by 75%',
      'Achieve compliance in weeks',
      'Automate 90% of security tasks',
      'Real-time threat response',
    ],
    useCases: [
      'Access Control',
      'Audit Logging',
      'Vulnerability Management',
      'Incident Response',
    ],
    technologies: [
      'AI-powered SIEM',
      'Blockchain',
      'Biometrics',
      'Zero Trust Network',
    ],
  },
};

const SolutionDetails: React.FC<SolutionDetailProps> = ({ solution, onClose }) => {
  const details = solutionDetails[solution as keyof typeof solutionDetails];

  if (!details) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative p-8">
            <button
              onClick={onClose}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back
            </button>

            <div className="mt-8">
              <h2 className="text-4xl font-bold mb-4">{details.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{details.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {details.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {details.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
                  <ul className="space-y-2">
                    {details.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
                  <ul className="space-y-2">
                    {details.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetails;