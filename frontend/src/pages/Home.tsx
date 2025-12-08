import { SatelliteDish, BarChart3, ShieldCheck } from 'lucide-react';
import Services from './Services';
import Industries from './Industries';
import FAQ from './FAQ';
import Contact from './Contact';
import connectedCar from '../assets/connected_car.png';
import trucksFleet from '../assets/trucks_fleet.jpg';

const Home = () => {
  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-primary-blue via-secondary-blue to-accent-teal/70 text-white pt-28 md:pt-32 pb-20 md:pb-28 scroll-mt-24"
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-10 w-80 h-80 rounded-3xl bg-white/5 blur-3xl" />
          <div className="absolute right-10 top-24 w-64 h-64 rounded-3xl bg-black/10 blur-2xl" />
          <div className="absolute left-1/2 bottom-0 w-96 h-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-teal/20 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1 text-sm font-medium mb-6 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent-teal" />
                <span>Telecom &amp; Telematics Solutions Provider</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Transforming Fleet Operations Through{' '}
                <span className="text-accent-teal">Advanced Telematics</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
                Zaijix delivers enterprise-grade fleet telematics solutions powered by global technologies,
                helping businesses optimize operations, reduce costs, and enhance fleet safety across Jordan
                and the MENA region.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent-teal px-8 py-3 text-base font-semibold text-white shadow-lg shadow-accent-teal/40 hover:bg-accent-teal/90 transition"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Right: Floating feature cards */}
            <div className="relative group">
              <div className="hero-orbit absolute -top-8 -left-4 h-24 w-24 rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-transparent backdrop-blur-lg border border-white/20 shadow-[0_18px_45px_rgba(0,0,0,0.45)]" />
              <div className="hero-orbit-secondary absolute -bottom-10 right-0 h-28 w-28 rounded-3xl bg-gradient-to-tr from-black/40 via-primary-blue/50 to-transparent backdrop-blur-lg border border-white/15 shadow-[0_18px_45px_rgba(0,0,0,0.45)]" />

              {/* Hero image */}
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/20 shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
                <img
                  src={trucksFleet}
                  alt="Fleet of connected trucks on the road"
                  className="h-56 w-full object-cover opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-blue/70 via-transparent to-transparent" />
              </div>

              <div className="relative rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-teal/60 group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                <p className="text-sm font-medium text-accent-teal mb-3 uppercase tracking-[0.15em] group-hover:text-accent-teal">
                  Real-Time Fleet Intelligence
                </p>
                <p className="text-lg text-white/85 mb-6 group-hover:text-white">
                  Unified visibility across vehicles, drivers, and routes—built for enterprise fleets operating
                  in high-cost, high-complexity environments.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/70 hover:bg-white/10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-teal/20 text-accent-teal">
                      <SatelliteDish className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold">Fleet Telematics</p>
                    <p className="text-xs text-white/70">
                      High-fidelity tracking and diagnostics for every asset.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/70 hover:bg-white/10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-teal/20 text-accent-teal">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold">Data &amp; Analytics</p>
                    <p className="text-xs text-white/70">
                      Decision-grade insights to reduce fuel and operating costs.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/70 hover:bg-white/10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-teal/20 text-accent-teal">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold">Safety &amp; Compliance</p>
                    <p className="text-xs text-white/70">
                      Proactive monitoring to protect drivers, cargo, and reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Zaijix */}
      <section id="about" className="scroll-mt-28 py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-primary-blue">
            About Zaijix
          </h2>
          <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
            <div className="order-2 text-lg leading-relaxed bg-white rounded-3xl shadow-sm p-8 md:p-10 lg:order-1">
              <p className="mb-6">
                Zaijix is a telecom and telematics solutions provider focused on addressing the unique challenges
                faced by fleet operators in Jordan and the broader MENA region. We leverage cutting-edge telematics
                technologies to deliver actionable insights and measurable improvements in fleet efficiency.
              </p>
              <p className="mb-6">
                With Jordan&apos;s high fuel costs and under-digitalized fleet operations, the opportunity for
                optimization through real-time data and analytics has never been greater. Zaijix is positioned
                to lead this transformation with enterprise-grade platforms and a deeply local understanding of
                operational realities.
              </p>
              <p>
                We are currently preparing a pilot program with Manaseer Group to demonstrate measurable
                improvements in fleet fuel efficiency and operational visibility—setting the foundation for a
                scalable national telematics footprint.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_22px_70px_rgba(0,0,0,0.25)] border border-primary-blue/15 bg-primary-blue/80">
                <img
                  src={connectedCar}
                  alt="Connected car and telematics visualization"
                  className="h-full w-full object-cover opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-blue/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28">
        <Services />
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-28">
        <Industries />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28">
        <FAQ />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

