import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { SiAzuredevops } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import Profileimg from "../../assets/Profileimg2.jpg";
export default function Home(props) {
    const Navigate=useNavigate()
  return (
    <>
      <div className="flex justify-center text-center !bg-white dark:!bg-black">
        <Row gutter={[16, 16]}>
          <Col span={24} className="font-sans">
            <div className="flex flex-row !text-black dark:!text-white justify-center items-center relative top-[3%] m-[2.5rem]">
              <img
                src={Profileimg}
                className=" h-[5rem] w-[5rem] rounded-full"
              ></img>
              {/* <span className="font-semibold text-4xl m-4 dark:!text-white !text-black">
                Vikram
              </span> */}
            </div>{" "}
            <div className="">
              <h1 className="mx-auto max-w-4xl text-5xl font-semibold sm:text-7xl !text-black dark:!text-white text-center button-text mt-5">
                <span>Hi there</span>, I'm{" "}
                <span className="text-primary">
                  <span className=" text-custom-blue">
                    {" "}
                    <br />
                    Vikram
                  </span>
                </span>{" "}
                <div className="mt-3">
                  {" "}
                  I'm a <span>Software Developer</span>
                </div>
              </h1>
              {/* <h1 className="mx-auto max-w-4xl text-5xl font-semibold sm:text-7xl !text-black dark:!text-white text-center button-text">
                <div className="mt-3">
                  {" "}
                  from <span className="text-underline-2px mt-2">India</span>
                </div>
              </h1> */}
            </div>
            <div className="flex flex-row justify-center items-center mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="transform-none">
                  <button
                    className="bg-custom-blue shadow-2xl shadow-custom-blue !text-white  font-display font-semibold text-lg px-10 py-3 rounded-md button button-text cursor-pointer"
                    onClick={()=>Navigate("/Contact")}
                  >
                    Contact Me
                  </button>
                </div>
                <div>
                  <button
                    className="bg-custom-blue shadow-2xl shadow-custom-blue !text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text cursor-pointer"
                    onClick={()=>Navigate("/About")}
                  >
                    About Me
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={24}>
          <div
              className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center mt-3 mb-5"
              data-aos="fade-right"
            >
              <h1 className="text-5xl font-bold text-underline-2px button-text !text-black dark:!text-white">
                Skills
              </h1>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 items-center mt-4">
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                        <FaHtml5 className="text-2xl text-orange-500"/>
                        
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      HTML
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                      <IoLogoCss3 className="text-3xl text-blue-600" />
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      CSS
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                      <RiTailwindCssFill className="text-3xl text-[#38bdf8]" />
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      TailwindCSS
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                      <RiJavascriptFill className="text-3xl text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      Javascript
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                      <FaReact className="text-3xl text-[#38bdf8]" />
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      React
                    </p>
                  </div>
                </div>  
                <div className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full outline outline-black hover:outline-custom-blue dark:outline-white dark:hover:outline-custom-blue hover:shadow-2xl hover:scale-[1.02] transform">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-white/30 dark:bg-white/5 rounded-md h-[35px] w-[35px]">
                      <div className="flex justify-center items-center h-[26px] mt-1">
                      <FaGithub className="text-3xl text-black dark:text-white" />
                      </div>
                    </div>
                    <p className="text-md text-black dark:text-white font-semibold button-text">
                      Git
                    </p>
                  </div>
                </div>  
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
