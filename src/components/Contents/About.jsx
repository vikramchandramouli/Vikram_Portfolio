import React from "react";
import Profileimg from "../../assets/Profileimg.jpg";

export default function About(props) {
  return (
    <>
      <div className="relative !bg-white dark:!bg-black !text-black dark:!text-white min-h-screen">
        <div style={{ opacity: 1 }}>
          <div className="flex flex-col py-3 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-6 text-center">
              <h1 className="text-5xl font-semibold button-text">
                About
              </h1>
              <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold mb-1 mt-3 button-text">
              Here’s a brief introduction about me
              </p>
              <br />
              <div className="relative mx-auto">
                <div className="rounded-full">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div style={{ transform: "none" }}>
                      <span className="flex flex-row justify-center">
                        <img
                          src={Profileimg}
                          className=" h-[5rem] w-[5rem] rounded-full"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mt-2 mx-auto max-w-sm text-black dark:text-white button-text">
                  Hey, I'm{" "}
                  <span className="font-semibold text-3xl text-custom-blue mx-auto max-w-sm">
                    Vikram
                  </span>
                  ,
                </h1>
                <div>
                  <div className="flex flex-col items-center w-full text-center">
                    <p className="text-black dark:text-white text-2xl font-bold max-w-sm button-text">
                      I'm a{" "}
                      <span className="text-black dark:text-white underline font-semibold text-2xl">
                        Software Developer
                      </span>
                      ,
                    </p>
                    {/* <p className="text-black dark:text-white text-2xl font-bold max-w-sm button-text">
                      from{" "}
                      <span className="text-black dark:text-white underline font-semibold text-2xl">
                        India
                      </span>
                      .
                    </p> */}
                  </div>
                  <br />
                  <div className="pb-4 py-4 gap-3 flex flex-col justify-center items-center text-lg max-w-5xl">
                    <h1>
                      I am an experienced Software Engineer specializing in web
                      development, with a strong focus on ReactJS. I am
                      proficient in JavaScript, HTML, CSS, and Git.
                    </h1>
                    <h1>
                      With almost 3 years of experience in ReactJS, I have
                      developed responsive web designs in an efficient manner.
                      One notable project I worked on involved building an
                      inventory management system, where I presented data
                      dynamically using charts and tables for enhanced user
                      interaction.
                    </h1>
                    <h1>
                      Additionally, I have foundational knowledge of Python and
                      React Native, broadening my skill set across different
                      platforms and technologies.
                    </h1>
                    <h1>
                      As a Software Developer, I thrive in collaborative
                      environments where I can contribute my expertise and work
                      alongside talented teams to deliver innovative solutions
                      that exceed expectations.
                      <i className="fas fa-heart heart-icon"></i>
                    </h1>
                    {/* <div className="flex flex-row justify-center items-center mt-3">
                      <div>
                        <a
                          href="https://github.com/salaimuniselvam-s"
                          target="_blank"
                          className="bg-primary font-display font-semibold text-lg px-5 py-2 rounded-md mr-5 button text-white shadow-2xl shadow-primary transition-all duration-200"
                        >
                          <i className="fa-brands fa-github"></i> Github
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://twitter.com/SalaiMuniSelvam"
                          target="_blank"
                          className="bg-primary font-display font-semibold text-lg px-5 py-2 rounded-md button text-white shadow-2xl shadow-primary transition-all duration-200"
                        >
                          <i className="fa-brands fa-twitter"></i> Twitter
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
