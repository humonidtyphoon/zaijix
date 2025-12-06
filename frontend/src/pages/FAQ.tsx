import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is fleet telematics?",
      answer: "Fleet telematics is a technology-driven approach to monitoring and managing vehicle fleets. It combines GPS tracking, onboard diagnostics, and telecommunications to collect real-time data about vehicle location, performance, driver behavior, and operational metrics. This data is then analyzed to provide actionable insights that improve efficiency, reduce costs, and enhance safety."
    },
    {
      question: "How can telematics reduce fuel costs?",
      answer: "Telematics reduces fuel costs through multiple mechanisms: monitoring and reducing idle time, optimizing routes to minimize unnecessary mileage, identifying inefficient driving behaviors (such as excessive acceleration or speeding), providing real-time alerts for maintenance issues that affect fuel efficiency, and enabling data-driven decisions about fleet composition and utilization. In Jordan's high fuel cost environment, these savings can be substantial."
    },
    {
      question: "What industries benefit most from telematics?",
      answer: "While telematics benefits any organization operating vehicle fleets, certain industries see particularly strong returns: logistics and transportation companies benefit from route optimization and delivery tracking; energy and fuel distribution companies gain enhanced security and compliance monitoring; retail and delivery operations improve last-mile efficiency; construction and service industries optimize field operations. Zaijix currently focuses on energy, logistics, and retail sectors in Jordan."
    },
    {
      question: "Is Zaijix operational yet?",
      answer: "Zaijix is preparing for market entry with a strategic pilot program with Manaseer Group, one of Jordan's leading industrial conglomerates. This pilot will demonstrate the measurable value of our telematics solutions in real-world operations. We are building our technical infrastructure, establishing partnerships, and preparing to deliver enterprise-grade solutions to the Jordanian market."
    },
    {
      question: "What solutions does Zaijix provide?",
      answer: "Zaijix provides comprehensive fleet telematics solutions including: real-time vehicle tracking and monitoring, data analytics and reporting, fleet safety and compliance management, operational visibility and optimization tools, software integrations and API connectivity, and fuel cost reduction consulting. Our solutions are built on enterprise telematics standards and are compatible with leading global platforms."
    },
    {
      question: "What technology platforms does Zaijix use?",
      answer: "Zaijix builds its solutions on enterprise telematics standards and maintains compatibility with leading global platforms. Our technology foundation ensures reliability, scalability, and future-proof investment for our clients. We leverage industry-standard telematics devices and enterprise-grade software infrastructure."
    },
    {
      question: "How does Zaijix ensure data security?",
      answer: "Data security is fundamental to our operations. We implement enterprise-grade security protocols including encrypted data transmission, secure cloud storage, role-based access controls, regular security audits, and compliance with international data protection standards. Fleet data is sensitive business information, and we treat it accordingly."
    },
    {
      question: "Can telematics integrate with our existing systems?",
      answer: "Yes. Zaijix provides API solutions that enable seamless integration with existing business systems including ERP platforms, logistics management software, fuel management systems, and custom enterprise applications. Our goal is to enhance your existing operational ecosystem, not replace it."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center mb-8 text-primary-blue">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Common questions about fleet telematics and Zaijix's solutions. 
          If you have additional questions, please contact us.
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h2 className="text-xl font-semibold text-secondary-blue pr-8">
                  {faq.question}
                </h2>
                <span className="text-2xl text-accent-teal flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

