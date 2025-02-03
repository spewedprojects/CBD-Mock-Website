import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResourceConfig {
  cpu: number;
  gpu: number;
  ram: number;
  ssdStorage: number;
  hddStorage: number;
  services: {
    ai: boolean;
    database: boolean;
    loadBalancer: boolean;
    security: boolean;
  };
}

const PriceCalculator = () => {
  const [config, setConfig] = useState<ResourceConfig>({
    cpu: 4,
    gpu: 12,
    ram: 4,
    ssdStorage: 100,
    hddStorage: 500,
    services: {
      ai: false,
      database: false,
      loadBalancer: false,
      security: false,
    },
  });

  const [totalCost, setTotalCost] = useState(0);
  const [costs, setCosts] = useState({
    compute: 0,
    storage: 0,
    services: 0,
  });

  // Pricing constants
  const PRICING = {
    cpu: 10, // per core
    gpu: 40, // per core
    ram: 10, // per GB
    ssdStorage: 0.1, // per GB
    hddStorage: 0.05, // per GB
    services: {
      ai: 599,
      database: 399,
      loadBalancer: 199,
      security: 649,
    },
  };

  useEffect(() => {
    // Calculate costs
    const computeCost = (config.cpu * PRICING.cpu) + (config.gpu * PRICING.gpu) + (config.ram * PRICING.ram);
    const storageCost = (config.ssdStorage * PRICING.ssdStorage) + (config.hddStorage * PRICING.hddStorage);
    const servicesCost = Object.entries(config.services)
      .reduce((acc, [key, enabled]) => enabled ? acc + PRICING.services[key as keyof typeof PRICING.services] : acc, 0);

    setCosts({
      compute: computeCost,
      storage: storageCost,
      services: servicesCost,
    });

    setTotalCost(computeCost + storageCost + servicesCost);
  }, [config]);

  const chartData = {
    labels: ['Compute', 'Storage', 'Services'],
    datasets: [
      {
        data: [costs.compute, costs.storage, costs.services],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
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
            <h2 className="text-4xl font-bold">Price Calculator</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate your monthly costs based on your resource requirements and additional services.
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
                    CPU Cores ({config.cpu} cores)
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="64"
                    value={config.cpu}
                    onChange={(e) => setConfig({ ...config, cpu: parseInt(e.target.value) })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPU Cores ({config.gpu} cores)
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="496"
                    value={config.gpu}
                    onChange={(e) => setConfig({ ...config, gpu: parseInt(e.target.value) })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    RAM ({config.ram} GB)
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="128"
                    step="2"
                    value={config.ram}
                    onChange={(e) => setConfig({ ...config, ram: parseInt(e.target.value) })}
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
                    SSD Storage ({config.ssdStorage} GB)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="50"
                    value={config.ssdStorage}
                    onChange={(e) => setConfig({ ...config, ssdStorage: parseInt(e.target.value) })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HDD Storage ({config.hddStorage} GB)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="100"
                    value={config.hddStorage}
                    onChange={(e) => setConfig({ ...config, hddStorage: parseInt(e.target.value) })}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Additional Services</h4>
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
                      {service.charAt(0).toUpperCase() + service.slice(1)} Service
                      <span className="text-gray-500 ml-2">
                        (${PRICING.services[service as keyof typeof PRICING.services]}/mo)
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Cost Summary */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Cost Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Compute Costs:</span>
                  <span className="font-semibold">${costs.compute.toFixed(2)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage Costs:</span>
                  <span className="font-semibold">${costs.storage.toFixed(2)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Costs:</span>
                  <span className="font-semibold">${costs.services.toFixed(2)}/mo</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Estimated Cost:</span>
                    <span className="text-blue-600">${totalCost.toFixed(2)}/mo</span>
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