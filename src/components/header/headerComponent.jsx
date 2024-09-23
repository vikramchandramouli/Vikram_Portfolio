/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import { Row, Col, Menu,Dropdown } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaUsersCog, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuSunMoon, LuMoonStar } from "react-icons/lu";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdApps } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { CiMail } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
export const HeaderComponent = () => {
  const navigate = useNavigate();
  const [currPage, setCurrPage] = useState('/');
  const [theme, setTheme] = useState(false);
  const [themeColor, setThemeColor] = useState(localStorage.getItem('theme') || 'light');
  const [isOverflow, setIsOverflow] = useState(false);
  const menuItems = [
    {
      label: "Home",
      key: '/',
      link: '/',
      icon: <AiOutlineHome size={18} />,
    },
    {
      label: "About",
      key: '/About',
      link: '/About',
      icon: <IoPersonOutline size={18} />,
    },
    {
      label: "Experience",
      key: '/Experience',
      link: '/Experience',
      icon: <FaUsersCog size={18} />,
    },
    {
      label: "Contact",
      key: '/Contact',
      link: '/Contact',
      icon: <MdOutlineMailOutline size={18} />,
    },
  ];
  const items = [
    // {
    //   label: (
    //     <a
    //       // href="https://github.com/Gowrisankar24"
    //       title="Git Hub"
    //       target="_blank"
    //       className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
    //     >
    //       <FaGithub size={19} />
    //     </a>
    //   ),
    //   key: "github",
    // },
    {
      label: (
        <a
          href="https://www.linkedin.com/in/vikram-chandra-mouli-4a303b230"
          title="LinkedIn"
          target="_blank"
          className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
        >
          <FaLinkedin size={19} />
        </a>
      ),
      key: "LinkedIn",
    },
    {
      label: (
        <a
          href="mailto:vikramchandramouli15@gmail.com"
          title="Gmail"
          target="_blank"
          className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
        >
          <MdOutlineMailOutline size={19} />
        </a>
      ),
      key: "mail",
    },
  ];
  useEffect(() => {
      document.documentElement.classList.toggle('dark', themeColor === 'dark');
      setTheme(themeColor === 'light' ? false : true);
      localStorage.setItem('theme', themeColor);
  }, [themeColor]);

  const checkOverflow = () => {
    if (window.innerWidth < 1050) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [isOverflow]);

  const menuOnlick = ({ key }) => {
      navigate(key);
      setCurrPage(key);
  };
  return (
    <>
      <Row gutter={[16, 16]} className="!bg-white dark:!bg-black">
        <Col span={24}>
          <Row
            gutter={[16, 16]}
            className="flex justify-center text-center font-sans"
          >
            <Col span={20}>
              <Menu
               defaultSelectedKeys={'/'}
                onClick={menuOnlick} 
                selectedKeys={[location.pathname]}
                className="bg-transparent font-semibold text-[15px]"
                mode="horizontal"
                items={menuItems}
                overflowedIndicator={
                  <IoMdApps
                      size={20}
                      className="!text-black dark:!text-white relative top-5 "
                  />
              }/>
            </Col>
            <Col span={4}>
              {isOverflow ? (
                <div className="inline-flex float-right mt-5">
                  <span
                    className="!text-black dark:!text-white text-center cursor-pointer "
                    onClick={() => {
                      setTheme(!theme);
                      setThemeColor(themeColor === "light" ? "dark" : "light");
                    }}
                  >
                    {theme ? (
                      <LuMoonStar size={19} />
                    ) : (
                      <LuSunMoon size={19} />
                    )}
                  </span>
                  <Dropdown menu={{ items }} arrow>
                    <AiOutlineMenuUnfold
                      size={20}
                      className="ms-4 !text-black dark:!text-white cursor-pointer"
                    />
                  </Dropdown>
                </div>
              ) : (
                <ul
                  className={`inline-flex gap-2 mt-3 overflow-hidden whitespace-nowrap text-ellipsis
               ${isOverflow ? "overflow-hidden" : ""}`}
                >
                  <li
                    className="p-3 !text-black dark:!text-white text-center cursor-pointer "
                    onClick={() => {
                      setTheme(!theme);
                      setThemeColor(themeColor === "light" ? "dark" : "light");
                    }}
                  >
                    {theme ? <LuMoonStar size={19} /> : <LuSunMoon size={19} />}
                  </li>
                  {/* <li className="p-3 cursor-pointer !text-black dark:!text-white">
                    <a
                      // href="https://github.com/Gowrisankar24"
                      title="Git Hub"
                      target="_blank"
                      className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
                    >
                      <FaGithub size={19} />
                    </a>
                  </li> */}
                  <li className="p-3 cursor-pointer !text-black dark:!text-white text">
                    <a
                      href="https://www.linkedin.com/in/vikram-chandra-mouli-4a303b230"
                      title="LinkedIn"
                      target="_blank"
                      className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
                    >
                      <FaLinkedin size={19} />
                    </a>
                  </li>
                  <li className="p-3 cursor-pointer !text-black dark:!text-white text">
                    <a
                      href="mailto:vikramchandramouli15@gmail.com"
                      title="Gmail"
                      target="_blank"
                      className="block transform hover:scale-150 transition-transform duration-200 hover:text-inherit"
                    >
                      <MdOutlineMailOutline size={19} />
                    </a>
                  </li>
                </ul>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
