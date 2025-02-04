import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResourceConfig {
  compute: {
    cpuCores: number;
    gpuType: 'none' | 'v100' | 'a100';
    ram: number;
  };
  storage: {
    ssd: number;
    hdd: number;
  };
  services: {
    mlOps: boolean;
    dataProcessing: boolean;
    monitoring: boolean;
    security: boolean;
  };
  support: 'basic' | 'business' | 'enterprise';
}

const PriceCalculator = () => {
  const [config, setConfig] = useState<ResourceConfig>({
    compute: {
      cpuCores: 8,
      gpuType: 'none',
      ram: 32,
    },
    storage: {
      ssd: 500,
      hdd: 2000,
    },
    services: {
      mlOps: false,
      dataProcessing: false,
      monitoring: false,
      security: false,
    },
    support: 'basic',
  });

  const [totalCost, setTotalCost] = useState(0);
  const [costs, setCosts] = useState({
    compute: 0,
    storage: 0,
    services: 0,
    support: 0,
  });

  // Realistic pricing constants based on enterprise cloud providers
  const PRICING = {
    compute: {
      cpu: 40, // per core per month
      gpu: {
        none: 0,
        v100: 2500, // per GPU per month
        a100: 4000, // per GPU per month
      },
      ram: 6.5, // per GB per month
    },
    storage: {
      ssd: 0.15, // per GB per month
      hdd: 0.05, // per GB per month
    },
    services: {
      mlOps: 2000, // MLOps platform per month
      dataProcessing: 1500, // Data processing pipeline per month
      monitoring: 800, // Advanced monitoring per month
      security: 1200, // Enhanced security features per month
    },
    support: {
      basic: 0,
      business: 1000,
      enterprise: 5000,
    },
  };

  useEffect(() => {
    // Calculate compute costs
    const computeCost = 
      (config.compute.cpuCores * PRICING.compute.cpu) +
      PRICING.compute.gpu[config.compute.gpuType] +
      (config.compute.ram * PRICING.compute.ram);

    // Calculate storage costs
    const storageCost = 
      (config.storage.ssd * PRICING.storage.ssd) +
      (config.storage.hdd * PRICING.storage.hdd);

    // Calculate service costs
    const servicesCost = Object.entries(config.services)
      .reduce((acc, [key, enabled]) => 
        enabled ? acc + PRICING.services[key as keyof typeof PRICING.services] : acc, 0);

    // Support cost
    const supportCost = PRICING.support[config.support];

    setCosts({
      compute: computeCost,
      storage: storageCost,
      services: servicesCost,
      support: supportCost,
    });

    setTotalCost(computeCost + storageCost + servicesCost + supportCost);
  }, [config]);

  const chartData = {
    labels: ['Compute', 'Storage', 'Services', 'Support'],
    datasets: [
      {
        data: [costs.compute, costs.storage, costs.services, costs.support],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Cost Breakdown'],
    datasets: [
      {
        label: 'Compute',
        data: [costs.compute],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
      {
        label: 'Storage',
        data: [costs.storage],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
      },
      {
        label: 'Services',
        data: [costs.services],
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
      },
      {
        label: 'Support',
        data: [costs.support],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calculator size={32} className="text-blue-600 mr-2" />
            <h2 className="text-4xl font-bold">Enterprise Solution Calculator</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate your monthly costs based on your enterprise requirements and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Configure Resources</h3>
            
            {/* Compute Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Compute Resources</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPU Cores ({config.compute.cpuCores} cores)
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="96"
                    value={config.compute.cpuCores}
                    onChange={(e) => setConfig({
                      ...config,
                      compute: {
                        ...config.compute,
                        cpuCores: parseInt(e.target.value),
                      },
                    })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPU Configuration
                  </label>
                  <select
                    value={config.compute.gpuType}
                    onChange={(e) => setConfig({
                      ...config,
                      compute: {
                        ...config.compute,
                        gpuType: e.target.value as 'none' | 'v100' | 'a100',
                      },
                    })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="none">No GPU</option>
                    <option value="v100">NVIDIA V100</option>
                    <option value="a100">NVIDIA A100</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    RAM ({config.compute.ram} GB)
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="512"
                    step="16"
                    value={config.compute.ram}
                    onChange={(e) => setConfig({
                      ...config,
                      compute: {
                        ...config.compute,
                        ram: parseInt(e.target.value),
                      },
                    })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Storage Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Storage</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SSD Storage ({config.storage.ssd} GB)
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={config.storage.ssd}
                    onChange={(e) => setConfig({
                      ...config,
                      storage: {
                        ...config.storage,
                        ssd: parseInt(e.target.value),
                      },
                    })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HDD Storage ({config.storage.hdd} GB)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={config.storage.hdd}
                    onChange={(e) => setConfig({
                      ...config,
                      storage: {
                        ...config.storage,
                        hdd: parseInt(e.target.value),
                      },
                    })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Enterprise Services */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Enterprise Services</h4>
              <div className="space-y-3">
                {Object.entries(config.services).map(([service, enabled]) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      checked={enabled}
                      onChange={(e) => setConfig({
                        ...config,
                        services: {
                          ...config.services,
                          [service]: e.target.checked,
                        },
                      })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={service} className="ml-2 block text-sm text-gray-900">
                      {service === 'mlOps' ? 'MLOps Platform' :
                        service === 'dataProcessing' ? 'Data Processing Pipeline' :
                        service === 'monitoring' ? 'Advanced Monitoring' :
                        'Enhanced Security'}
                      <span className="text-gray-500 ml-2">
                        (${PRICING.services[service as keyof typeof PRICING.services].toLocaleString()}/mo)
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Level */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support Level</h4>
              <select
                value={config.support}
                onChange={(e) => setConfig({
                  ...config,
                  support: e.target.value as 'basic' | 'business' | 'enterprise',
                })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="basic">Basic Support (Included)</option>
                <option value="business">Business Support (${PRICING.support.business.toLocaleString()}/mo)</option>
                <option value="enterprise">Enterprise Support (${PRICING.support.enterprise.toLocaleString()}/mo)</option>
              </select>
            </div>
          </div>

          <div className="space-y-8">
            {/* Cost Summary */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Cost Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Compute Costs:</span>
                  <span className="font-semibold">${costs.compute.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage Costs:</span>
                  <span className="font-semibold">${costs.storage.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Costs:</span>
                  <span className="font-semibold">${costs.services.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Support Costs:</span>
                  <span className="font-semibold">${costs.support.toLocaleString()}/mo</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Estimated Cost:</span>
                    <span className="text-blue-600">${totalCost.toLocaleString()}/mo</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Custom Quote
              </button>
            </div>

            {/* Charts */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Cost Breakdown</h3>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Distribution</h4>
                  <Pie data={chartData} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Breakdown</h4>
                  <Bar options={barOptions} data={barData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;