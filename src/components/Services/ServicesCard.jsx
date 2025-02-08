import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    category: "Solution",
    modelno: "234REDT",
    title: "Online-verification",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://decentro.tech/images/resources/aadhaar-verification/aadhaar-verification-api.svg",
  },
  {
    category: "Security",
    modelno: "234REDS",
    title: "Network Security",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "🔒",
    link: "#",
    image: "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/4DeXJpGhjPbWnXCyAZRPU5/en-US/expansion-opportunities-1-is1193842896-sb-640x360.jpg?auto=format,compress&w=640&q=60"
  },
  {
    title: "Aadhar Tracking Security",
    modelno: "234REDY",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://t3.ftcdn.net/jpg/01/95/74/98/360_F_195749821_1hHA17CVi20rUsALHouBvoEnbHL6wAen.jpg"
  },
  {
    title: "Virtual Tracking Security",
    modelno: "234REDO",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/329230127/AP/ZH/CC/193828473/digital-signature-certificate-provider-500x500.jpg"
  },
  {
    title: "Digital Signature",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWqOwNQvxQo4fU-4IKhhzT2xu8XP83WlsA90LkeS9LLKc7W0ze7ATHAC3pP2PWKtzEkE&usqp=CAU"
  },
  {
    title: "Verification Security",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBHVnBRdRorbvVEziMpFCGesE_doDoGxKLoUxFE_N4D0hRGzuZTTQi06Rv3d36-arB8Y&usqp=CAU"
  },
  {
    title: "Digi-Locker Identification",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://www.learnworlds.com/app/themes/learnworlds/dist/images/create-school/interactive-video-editor/interactive-video-section2.png"
  },
  {
    title: "Person Identification Security",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://focus.namirial.com/en/wp-content/uploads/sites/4/2022/12/digital-signature.jpg"
  },
  {
    title: "PanCard Security",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://t3.ftcdn.net/jpg/01/95/74/98/360_F_195749821_1hHA17CVi20rUsALHouBvoEnbHL6wAen.jpg"
  },
  {
    title: "Visa Identification",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://focus.namirial.com/en/wp-content/uploads/sites/4/2022/12/digital-signature.jpg"
  },
  {
    title: "Pancard Security",
    modelno: "234REDT",
    description: "Each demo built with Teba will look different. You can customize almost anything in the appearance",
    icon: "📊",
    link: "#",
    image: "https://static.vecteezy.com/system/resources/previews/017/586/100/non_2x/electronic-signature-smartphone-businessman-hands-digital-sign-business-agreement-electronic-document-isolated-flat-illustration-vector.jpg"
  },
];

const ServicesCard = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 6;
      setScrollWidth(containerWidth);
    }
  }, []);

  const handleImageClick = (service) => {
    console.log('hello', service);
    navigate("/service-detail", {
      state: { service },
    });
  };

  return (
    <section className="w-full bg-gray-900 text-white py-28 overflow-hidden">
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl text-blue-500 font-sans">Services</h1>
      </div>

      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold mb-10 text-center">
          We Delivered Best Solution
        </h1>
        <div className="relative w-full overflow-hidden" style={{ display: "flex" }}>
          <div
            ref={containerRef}
            className="flex gap-6 animate-scroll"
            style={{
              animationDuration: `${scrollWidth / 50}s`,
              animationPlayState: isHovered ? "paused" : "running",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...services, ...services].map((service, index) => (
              <div
                onClick={() => handleImageClick(service)}
                key={index}
                className="group relative w-[300px] flex-shrink-0 rounded-lg overflow-hidden"
              >
                <div className="relative h-[400px] w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="z-10 cursor-pointer object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <span className="text-blue-500 text-sm mb-2 block">
                    {service.category || "Category"}
                  </span>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: ${scrollWidth / 20}s; /* Faster scroll on smaller screens */
          }
          .w-[300px] {
            width: 250px; /* Smaller width on medium and smaller screens */
          }
          .h-[400px] {
            height: 350px; /* Smaller image height */
          }
        }

        @media (max-width: 480px) {
          .w-[250px] {
            width: 200px; /* Further reduce width on smaller screens */
          }
          .h-[350px] {
            height: 300px; /* Further reduce height on smaller screens */
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesCard;
