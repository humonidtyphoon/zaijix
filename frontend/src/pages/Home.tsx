import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Transforming Fleet Operations Through Advanced Telematics
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Zaijix delivers enterprise-grade fleet telematics solutions powered by global technologies,
            helping businesses optimize operations, reduce costs, and enhance fleet safety.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-accent-teal hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-secondary-blue hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Zaijix */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary-blue">
            About Zaijix
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              Zaijix is a telecom and telematics solutions provider focused on addressing the unique challenges 
              faced by fleet operators in Jordan and the broader MENA region. We leverage cutting-edge telematics 
              technologies to deliver actionable insights and measurable improvements in fleet efficiency.
            </p>
            <p className="mb-6">
              With Jordan's high fuel costs and under-digitalized fleet operations, the opportunity for 
              optimization through real-time data and analytics has never been greater. Zaijix is positioned 
              to lead this transformation.
            </p>
            <p>
              We are currently preparing a pilot program with Manaseer Group to demonstrate measurable 
              improvements in fleet fuel efficiency and operational visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary-blue">
            Key Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-blue">Fleet Telematics Solutions</h3>
              <p>Enterprise-grade data insights and operational intelligence for complete fleet visibility.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-blue">Data & Analytics</h3>
              <p>Advanced analytics to identify inefficiencies and optimize fleet performance.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary-blue">Fleet Safety & Compliance</h3>
              <p>Comprehensive safety monitoring and compliance management solutions.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className="text-accent-teal hover:underline font-semibold"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

