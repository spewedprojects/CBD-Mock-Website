import React from 'react';
import { ArrowLeft, Award, Users, Globe, Cpu, Target, Rocket, Shield } from 'lucide-react';

interface AboutUsProps {
  onClose: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onClose }) => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'CloudAI was founded by a team of AI researchers and cloud computing veterans',
    },
    {
      year: '2019',
      title: 'First Enterprise Client',
      description: 'Partnered with Fortune 500 manufacturing company for AI-driven optimization',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened offices in APAC and EMEA regions',
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Named as Leader in Gartner Magic Quadrant for Cloud AI Platforms',
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received Cloud Computing Innovation of the Year Award',
    },
    {
      year: '2023',
      title: 'Strategic Growth',
      description: 'Achieved 300% YoY growth with 500+ enterprise clients globally',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: "Pushing the boundaries of what's possible with AI and cloud technology",
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Dedicated to delivering measurable business outcomes for our clients',
    },
    {
      icon: Shield,
      title: 'Enterprise Trust',
      description: 'Maintaining the highest standards of security and compliance',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating positive change across industries and regions',
    },
    {
      icon: Cpu,
      title: 'Technical Excellence',
      description: 'Committed to building robust, scalable solutions',
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Preparing enterprises for the next wave of digital transformation',
    },
  ];

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
              <h2 className="text-4xl text-black font-bold mb-4">About CloudAI</h2>
              
              <div className="prose max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Founded in 2018, CloudAI has emerged as a global leader in enterprise cloud solutions, 
                  combining cutting-edge AI technology with robust cloud infrastructure to drive digital 
                  transformation across industries. Our mission is to empower enterprises with intelligent, 
                  scalable, and secure cloud solutions that deliver measurable business outcomes.
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-black mb-6">Our Journey</h3>
                  <div className="space-y-6">
                    {milestones.map((milestone) => (
                      <div key={milestone.year} className="flex gap-4">
                        <div className="text-blue-600 font-bold text-lg">{milestone.year}</div>
                        <div>
                          <div className="font-semibold text-black">{milestone.title}</div>
                          <div className="text-gray-600">{milestone.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-black mb-6">Our Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value) => (
                      <div key={value.title} className="flex gap-4">
                        <value.icon className="text-blue-600 flex-shrink-0" size={24} />
                        <div>
                          <div className="font-semibold text-black">{value.title}</div>
                          <div className="text-gray-600">{value.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-black mb-6">Leadership</h3>
                  <p className="text-gray-600">
                    Our leadership team brings together decades of experience from leading technology 
                    companies, combining expertise in AI, cloud computing, and enterprise solutions. 
                    With a shared vision of transforming enterprise technology, our leaders drive 
                    innovation while maintaining a steadfast focus on client success.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-black mb-6">Global Presence</h3>
                  <p className="text-gray-600">
                    With headquarters in Silicon Valley and offices across APAC, EMEA, and the Americas, 
                    CloudAI serves enterprise clients globally. Our diverse team of over 1,000 professionals 
                    includes AI researchers, cloud architects, security experts, and industry consultants, 
                    all working together to deliver exceptional value to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;