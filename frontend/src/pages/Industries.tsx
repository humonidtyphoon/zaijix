const Industries = () => {
  return (
    <div className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center mb-8 text-primary-blue">
          Industries We Serve
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Zaijix specializes in delivering fleet telematics solutions tailored to the specific needs 
          of three key industries in Jordan, aligned with our strategic market focus.
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Energy & Fuel Distribution */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-6">
                E
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
                  Energy & Fuel Distribution
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  The energy and fuel distribution sector requires precise monitoring of high-value cargo, 
                  route optimization, and strict compliance with safety regulations. Our telematics solutions 
                  provide real-time visibility into fuel tanker locations, driver behavior monitoring, and 
                  automated compliance reporting.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Key Benefits:</strong> Enhanced security for valuable cargo, optimized delivery 
                  routes, improved fuel efficiency for transport operations, and comprehensive safety monitoring 
                  for hazardous material transport.
                </p>
              </div>
            </div>
          </div>

          {/* Logistics & Transportation */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-6">
                L
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
                  Logistics & Transportation
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Logistics operations demand efficiency, reliability, and real-time visibility. Our solutions 
                  enable logistics companies to optimize routes, reduce delivery times, monitor vehicle health, 
                  and provide customers with accurate ETAs and delivery tracking.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Key Benefits:</strong> Reduced operational costs through route optimization, improved 
                  customer service with real-time tracking, decreased vehicle downtime through predictive 
                  maintenance, and enhanced driver productivity monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Retail & Delivery */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-6">
                R
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-semibold mb-4 text-secondary-blue">
                  Retail & Delivery
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Retail operations with delivery fleets require precise coordination, efficient routing, 
                  and exceptional customer service. Our telematics solutions help retail businesses manage 
                  last-mile delivery, optimize delivery schedules, and provide customers with transparent 
                  delivery tracking.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Key Benefits:</strong> Optimized last-mile delivery operations, improved delivery 
                  success rates, reduced fuel costs in urban delivery environments, and enhanced customer 
                  satisfaction through delivery transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Focus Note */}
        <div className="max-w-5xl mx-auto mt-12 p-6 bg-accent-teal bg-opacity-10 border-l-4 border-accent-teal rounded">
          <p className="text-lg">
            <strong>Strategic Focus:</strong> These three industries represent our initial market focus 
            in Jordan, aligned with our pilot program with Manaseer Group. As we expand, we will extend 
            our solutions to additional sectors that can benefit from advanced fleet telematics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Industries;

