import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$2,999',
    period: 'per month',
    features: [
      'Up to 100 AI model deployments',
      '24/7 monitoring',
      'Basic support',
      '99.9% uptime SLA',
      '1TB data processing',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$5,999',
    period: 'per month',
    features: [
      'Unlimited AI model deployments',
      'Advanced monitoring & alerts',
      'Priority support',
      '99.95% uptime SLA',
      '5TB data processing',
      'Custom model training',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Custom AI solution development',
      'Dedicated support team',
      '99.99% uptime SLA',
      'Unlimited data processing',
      'On-premise deployment option',
      'Custom compliance requirements',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your enterprise needs with our transparent pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-1">{plan.price}</div>
                <div className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check
                      size={20}
                      className={plan.highlighted ? 'text-blue-100' : 'text-blue-600'}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;