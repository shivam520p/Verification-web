import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner",
    image:
      "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
    quote:
      "Indentiplus has totally revolutionized the way we deal with legal documents. It's quick, secure, and very user-friendly. We saved a lot of time and labor! ",
    rating: 4,
  },
  {
    id: 2,
    name: "Priya Mishra",
    role: " Freelancer",
    image:
      "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
    quote:
      "As a freelancer, I was looking for an easy, no-fuss, and secure means to sign contracts. Indentiplus has made everything easy to deal with online. It makes me confident that my documents are secure and legally binding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Tiwari",
    role: " HR Manager",
    image:
      "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
    quote:
      "Indentiplus is a game-changer for our company. It streamlined our whole document workflow so that signing and storing contracts would take much less time and effort. I highly recommend it.",
    rating: 3,
  },
  {
    id: 4,
    name: "Sandeep Kumar",
    role: " Entrepreneur",
    image:
      "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
    quote:
      "I like the way it's easy and saves me loads of time when dealing with paper works. No more printing, signing, or scanning of papers. Great service!",
    rating: 5,
  },
];

const Hero7 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-600">
            Hear from our satisfied customers who trust us to deliver
            excellence.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="relative bg-white shadow-sm rounded-xl p-8 overflow-hidden">
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center text-center transition-opacity duration-700 ease-in-out transform ${
                  currentSlide === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="w-48 h-48 object-cover bg-center"
                  />
                </div>
                <p className="text-xl sm:text-2xl italic text-gray-700 py-5 px-40">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-gray-900 text-lg sm:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  {testimonial.role}
                </p>
                
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 shadow-md rounded-full p-3 md:p-4"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 shadow-md rounded-full p-3 md:p-4"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-transform transform ${
                  currentSlide === index
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300 scale-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
