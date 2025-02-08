import { useState } from 'react';

const Hero8 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Is my e-signature legally valid?',
      answer:
        'Yes, e-signatures on Indentiplus are legally valid and comply with all relevant legal standards, including the IT Act, 2000.',
      isOpen: true,
    },
    {
      question: 'How do I sign a document on Indentiplus?',
      answer:
        'Just upload your document, add the required signers, and follow the easy steps to sign digitally. Its quick and secure!',
      isOpen: false,
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely! We use advanced encryption to ensure that your documents are secure and protected from unauthorized access.',
      isOpen: false,
    },
    {
      question: 'Can I use Indentiplus for international documents?',
      answer:
        'We support international legal standards for e-signatures; hence you can use the document worldwide.',
      isOpen: false,
    },
    {
      question: 'Can I store my documents on Indentiplus?',
      answer:
        'You can securely store and manage all of your documents, and we organize them and let you access them whenever you need.',
      isOpen: false,
    },
    {
      question: 'What if I need help??',
      answer:
        'Our customer support is always available for 24/7 to solve your queries and concerns. Feel free to contact us anytime!',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-20 lg:px-24 bg-light-blue-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-blue-600 text-lg md:text-xl">
          Explore answers to commonly asked questions about our law firm management services.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg">
          <div className="relative inset-0 bg-gradient-to-r from-light-blue-400 to-blue-600 opacity-30"></div>
          <img
            src="https://img.freepik.com/premium-vector/faqs-concept-illustration_86047-994.jpg?semt=ais_hybrid"
            alt="FAQ Illustration"
            className="object-cover transition-transform transform hover:scale-110 hover:shadow-2xl ease-in-out duration-500"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden shadow-md transition-all duration-300 bg-white"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => toggleFAQ(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg sm:text-xl font-medium text-gray-800">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    faq.isOpen ? 'rotate-180' : ''
                  }`}
                >
                  {faq.isOpen ? (
                    <MinusIcon className="w-6 h-6 text-blue-600" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-blue-600" />
                  )}
                </span>
              </button>
              {faq.isOpen && (
                <div
                  id={`faq-${index}`}
                  className="px-6 py-4 bg-gray-50 text-gray-600 text-sm sm:text-base md:text-lg"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PlusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

export default Hero8;
