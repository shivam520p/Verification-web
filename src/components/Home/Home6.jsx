import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const Home6 = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      date: { day: '01', month: 'Apr' },
      title: 'How Digital Identity Verification is Changing Online Security with Identiplus',
      author: 'identiplus',
      comments: 3,
      image: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      
    },
    {
      id: 2,
      date: { day: '02', month: 'Apr' },
      title: 'Trends in Identity Verification for E-commerce: Expectations for 2025',
      author: 'identiplus',
      comments: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnQ9yPyPEF-AOdAvG8on7hpzJBrHuZhpKMA&s',
    },
    {
      id: 3,
      date: { day: '03', month: 'Apr' },
      title: 'Discover New Tech Insights',
      author: 'identiplus',
      comments: 2,
      image: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
    },

  ];

  // Settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  const handleBlog = (post) => {
    navigate('/home/blog', {
      state: { post }, // Pass the post data correctly
    });
  };

  return (
    <div className="py-16 px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-blue-500 font-medium">Blogs</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Legal Research and Briefing Materials
        </h2>
      </div>

      {/* React Slick Slider */}
      <div className="mx-auto w-full container px-4 lg:px-20">
        <Slider {...settings}>
          {posts.map((post) => (
            <div
              onClick={() => handleBlog(post)}
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-105 mt-3"
              style={{
                minHeight: '500px', // Enforce consistent card height
                maxHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Date Badge */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white rounded-lg p-2 text-center w-16">
                  <div className="text-xl font-bold">{post.date.day}</div>
                  <div className="text-sm">{post.date.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold mb-4 truncate"
                    style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                  >
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm sm:text-base mb-4">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home6;
