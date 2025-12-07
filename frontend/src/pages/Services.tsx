import { SatelliteDish, BarChart3, ShieldCheck, PanelsTopLeft, Plug, Fuel } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center mb-8 text-primary-blue">
          Our Services
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Zaijix provides comprehensive fleet telematics solutions powered by global technologies. 
          Our services are designed to deliver measurable improvements in operational efficiency, 
          cost reduction, and fleet safety.
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Fleet Telematics Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <SatelliteDish />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Fleet Telematics Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              Enterprise-grade telematics solutions compatible with leading global platforms. 
              Our systems provide real-time tracking, vehicle diagnostics, and comprehensive fleet 
              monitoring to give you complete operational visibility.
            </p>
          </div>

          {/* Data and Analytics */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <BarChart3 />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Data and Analytics
            </h2>
            <p className="text-lg leading-relaxed">
              Transform raw telematics data into actionable insights. Our analytics platform identifies 
              inefficiencies, tracks key performance indicators, and provides detailed reporting to support 
              data-driven decision making across your organization.
            </p>
          </div>

          {/* Fleet Safety & Compliance */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <ShieldCheck />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Fleet Safety & Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              Enhance driver safety through behavior monitoring, real-time alerts, and comprehensive 
              compliance management. Our solutions help reduce accidents, improve driver performance, 
              and ensure regulatory compliance.
            </p>
          </div>

          {/* Operational Visibility & Optimization */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <PanelsTopLeft />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Operational Visibility & Optimization
            </h2>
            <p className="text-lg leading-relaxed">
              Gain complete visibility into your fleet operations with real-time location tracking, 
              route optimization, and utilization analytics. Identify opportunities to improve efficiency, 
              reduce idle time, and maximize asset utilization.
            </p>
          </div>

          {/* Software Integrations / APIs */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <Plug />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Software Integrations / APIs
            </h2>
            <p className="text-lg leading-relaxed">
              Seamlessly integrate telematics data with your existing business systems. Our API solutions 
              enable connectivity with ERP, logistics, and fleet management platforms to create a unified 
              operational ecosystem.
            </p>
          </div>

          {/* Fuel Cost Reduction Consulting */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-accent-teal/15 text-accent-teal mb-4">
              <Fuel />
            </div>
            <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
              Fuel Cost Reduction Consulting
            </h2>
            <p className="text-lg leading-relaxed">
              Expert consulting services focused on reducing fuel consumption and costs. We analyze your 
              fleet's fuel usage patterns, identify optimization opportunities, and implement strategies 
              to achieve measurable fuel savings—critical in Jordan's high fuel cost environment.
            </p>
          </div>
        </div>

        {/* Technology Note */}
        <div className="max-w-5xl mx-auto mt-12 p-6 bg-accent-teal bg-opacity-10 border-l-4 border-accent-teal rounded">
          <p className="text-lg">
            <strong>Technology Foundation:</strong> Our solutions are built on enterprise telematics 
            standards and are compatible with leading global platforms, ensuring reliability, scalability, 
            and future-proof technology investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

