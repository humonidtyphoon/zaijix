const About = () => {
  return (
    <div className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center mb-12 text-primary-blue">
          About Zaijix
        </h1>

        {/* Company Summary */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary-blue">
              Company Summary
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Zaijix is a specialized telecom and telematics solutions provider dedicated to transforming 
              fleet operations across Jordan and the MENA region. We combine technical expertise with 
              deep market understanding to deliver solutions that address real operational challenges.
            </p>
            <p className="text-lg leading-relaxed">
              Our approach is built on enterprise-grade technologies, data-driven insights, and a commitment 
              to measurable results. We partner with organizations that demand excellence in fleet management, 
              operational efficiency, and cost optimization.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary-blue">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed">
                To establish Zaijix as the leading provider of fleet telematics solutions in Jordan and 
                the MENA region, enabling businesses to achieve unprecedented levels of operational 
                efficiency and cost savings through advanced technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary-blue">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                To deliver enterprise-grade telematics solutions that provide real-time operational 
                visibility, reduce fuel costs, enhance fleet safety, and enable data-driven decision 
                making for businesses operating vehicle fleets.
              </p>
            </div>
          </div>
        </section>

        {/* Market Opportunity (Jordan) */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-secondary-blue">
              Market Opportunity in Jordan
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Jordan presents a significant opportunity for telematics adoption due to several key factors:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>High Fuel Costs:</strong> Jordan's fuel prices are among the highest in the region, 
                  making fuel efficiency a critical concern for fleet operators.
                </li>
                <li>
                  <strong>Under-digitalized Fleets:</strong> Many fleet operations still rely on manual processes 
                  and lack real-time visibility into vehicle performance and driver behavior.
                </li>
                <li>
                  <strong>Growing Demand for Efficiency:</strong> Businesses across logistics, energy, and retail 
                  sectors are increasingly seeking technology-driven solutions to improve operational efficiency.
                </li>
                <li>
                  <strong>Government Readiness:</strong> Increasing focus on digital transformation and smart 
                  infrastructure creates a favorable environment for telematics adoption.
                </li>
              </ul>
              <p className="mt-6">
                Zaijix is currently preparing a pilot program with <strong>Manaseer Group</strong>, one of 
                Jordan's leading industrial conglomerates, to demonstrate measurable improvements in fleet 
                fuel efficiency and operational visibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

