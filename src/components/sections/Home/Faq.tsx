import { useState } from "react";
import { Content } from "./types.courselist";

const Faq = () => {
  const [active, setActive] = useState(-1);
  return (
    <section className="md:-mt-9 -mt-5 z-30 relative 2xl:mx-auto 2xl:mx-w-7xl">
      <div className="bg-punch_offwhite w-full  h-8 md:h-12"></div>
      <div className="bg-punch_offwhite w-full flex -mt-1 pb-14 md:pb-32  pt-16">
        <div className="w-full">
          <div className="flex flex-wrap justify-center border-b ">
            {content.map((faq, idx) => (
              <div className="w-full" key={idx}>
                {faq.questions.map((question, index) => (
                  <div
                    onMouseEnter={() => setActive(question.id)}
                    onMouseLeave={() => setActive(-1)}
                    className="border-t border-gray-300 flex flex-col md:flex-row items-center relative"
                    key={index}
                  >
                    <div className="md:w-1/3 md:flex  hidden">
                      <p
                        className={`w-full md:w-56 text-lg font-semibold border-r border-gray-300 text-center py-4 ${
                          question.category ? "md:block hidden" : "hidden"
                        }`}
                      >
                        {question.category}
                      </p>
                      <p
                        className={`w-full md:w-56 text-lg font-semibold text-center py-4 ${
                          question.sub_category ? "block " : "hidden"
                        } ${
                          question.sub_category ? "border-r border-gray-300" : ""
                        }`}
                      >
                        {question.sub_category}
                      </p>
                    </div>
                    <div className="flex-1 md:w-2/3 flex justify-between items-center px-6 py-4 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
                      <p
                        className={`text-lg text-center md:text-left text-zwilt-text-100 ${
                          active === question.id ? "font-semibold" : ""
                        }`}
                      >
                        {question.question}
                      </p>
                      <img
                        className={` ${
                          active === question.id ? "opacity-1" : "opacity-0"
                        } transition-opacity duration-300  md:block hidden`}
                        src={"/assets/faqicon.svg"}
                        alt="logo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

export const content: Content[] = [
  {
    questions: [
      {
        category: "General",
        question: "I want to work part-time, is that possible",
        id: 1,
      },
      {
        question: "How long are the average projects?",
        id: 2,
      },
      {
        question: "How does the payment works?",
        id: 3,
      },
      {
        question: "How much can i earn ?",
        id: 4,
      },
    ],
  },
  {
    questions: [
      {
        category: "General",
        sub_category: "Joining Process",
        question: "I want to work part-time, is that possible?",
        id: 5,
      },
      {
        question: "How long are the average projects",
        id: 6,
      },
      {
        question: "How long are the average projects",
        id: 7,
      },
      {
        question: "How much can i earn?",
        id: 8,
      },
    ],
  },
];
