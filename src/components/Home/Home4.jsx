import React, { useState, useEffect, useRef } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { IoMdBulb } from 'react-icons/io';
import { BiSolidMegaphone } from 'react-icons/bi';

// Helper function to animate number increment
const useCounter = (start, end, duration, trigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const stepTime = duration / (end - start);
    let current = start;

    const interval = setInterval(() => {
      if (current < end) {
        current += 1;
        setCount(current);
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, end, duration, trigger]);

  return count;
};

const HeroMid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      icon: (
        <FaHandshake className="w-12 h-12 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
      ),
      number: useCounter(5000, 5600, 1500, isVisible),
      label: 'Satisfied Clients',
    },
    {
      icon: (
        <AiOutlineRocket className="w-12 h-12 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
      ),
      number: useCounter(0, 600, 1500, isVisible),
      label: 'Finished Projects',
    },
    {
      icon: (
        <IoMdBulb className="w-12 h-12 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
      ),
      number: useCounter(0, 250, 1200, isVisible),
      label: 'Skilled Experts',
    },
    {
      icon: (
        <BiSolidMegaphone className="w-12 h-12 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
      ),
      number: useCounter(0, 590, 1000, isVisible),
      label: 'Media Posts',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto mb-11 py-6 mt-20 px-4 sm:px-10 md:px-16 lg:px-20 bg-gray-600 shadow-lg lg:rounded-xl"
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center text-white mb-6">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex justify-center items-center bg-gray-200 p-4 rounded-full mb-4">
              {stat.icon}
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                {stat.number}+
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMid;
