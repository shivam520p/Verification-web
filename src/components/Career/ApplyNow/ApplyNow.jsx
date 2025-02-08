import React from "react";
import CareerHero from "../CareerHero";
import { useNavigate } from "react-router-dom";

const ApplyNow = () => {
  const navigate = useNavigate();
  const ListItems = [
    {
      reqList: [
        "4+ years experience on NodeJs with express JS and Cypress (Unit Testing).",
        "1+ years experience in the cloud, specifically working with AWS Lambda, Cloud Watch, and S3.",
        "Experience with Swagger, Tomcat 8, Maven, Sonar Cube, Jenkins, GIT, Postman, and RESTful Services.",
        "Good knowledge of databases: AWS DynamoDB, SQL, MySQL, PostgreSQL.",
        "Javascript (ES6), Typescript 4, Node.js, Git/Gitlab/Gitlab-CI, NPM, Grunt, Postgres, Jest, Docker, AWS Lambda, AWS S3.",
        "Swagger/OpenAPI 3.",
        "HTML 5, CSS 3, Express.js, Helmet.js.",
        "Agile Scrum, Jira/Confluence, RESTful service design, TDD, Clean code.",
        "Good written and verbal communication.",
        "Experience with Scrum/Agile development methodologies.",
        "Experience working with international clients (UK and US).",
        "Meeting tight deadlines with a cool head.",
        "Ability to handle pressure and last-minute changes.",
        "Taking responsibility and ownership of development work.",
        "Meeting the customer quality standards.",
        "Nodejs, Javascript, Cypress, Others, Aws, Typescript, Expressjs.",
      ],
      reqList2: [
        "Industry Type: IT Services & Consulting",
        "Department: Engineering - Software & QA",
        "Employment Type: Full Time, Permanent",
        "Role Category: Software Development",
        "Education",
      ],
    },
  ];

  return (
    <>
      <CareerHero />
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-5">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b-2">
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
                NodeJS Developer
              </h2>
              <span className="text-lg sm:text-xl font-semibold text-gray-600">
                Delhi, India
              </span>
            </div>
            <div className="flex items-center justify-center w-full sm:w-auto">
              <button
                onClick={() => {
                  navigate("/career/apply-form");
                }}
                className="w-full sm:w-auto px-8 py-2 border-2 border-black hover:bg-gray-800 hover:text-white font-medium rounded-full duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-5 py-5">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Job Category:
              <span className="text-sm font-normal ml-2">NodeJS Developer</span>
            </h4>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Job Type:
              <span className="text-sm font-normal ml-2">Full Time</span>
            </h4>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Job Location:
              <span className="text-sm font-normal ml-2">Delhi, India</span>
            </h4>
            <p className="text-black">
              We are looking for an experienced Node.js (AWS) Developer to join
              our team. The ideal candidate will have extensive experience in
              software development, particularly with Node.js and AWS services,
              and a proven track record of delivering high-quality software
              solutions.
            </p>

            <ul className="list-disc pl-8">
              {ListItems[0].reqList.map((skill, index) => (
                <li key={index} className="text-base font-normal text-black">
                  {skill}
                </li>
              ))}
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-700">
              Role : <span>Full Stack Developer</span>
            </h4>
            <ul className="list-disc pl-8">
              {ListItems[0].reqList2.map((skill, index) => (
                <li key={index} className="text-base font-normal text-black">
                  {skill}
                </li>
              ))}
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-700">
              UG : <span>Any Graduate</span>
            </h4>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-700">
              PG : <span>Any Postgraduate</span>
            </h4>

            <p className="text-black">
              Maven, Tomcat, Quality standards, GIT, Postgresql, MySQL,
              Javascript, Scrum, AWS, SQL
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyNow;
