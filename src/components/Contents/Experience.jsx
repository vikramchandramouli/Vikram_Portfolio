import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Chrono } from "@cxmgr/react-chrono";
import Geakmindspng from "../../assets/Geakminds.png";
import Leorapng from "../../assets/Leora.png";

export default function Experience(props) {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("theme") || "light"
  );
  const items = [
    {
      title: "June 2023 - June 2024",
      cardTitle: "Associate Software Engineer",
      cardSubtitle: "Geakminds Technologies Pvt Ltd",
      cardDetailedText: `Collaborate closely with back-end developers and product managers to develop new features and enhance existing ones.
        Engage in sprint planning, daily stand-ups, and retrospectives to ensure features are delivered on time.
        Take part in code reviews to uphold code quality and share knowledge across the team.`,
    },
    {
      title: "April 2022 - May 2023",
      cardTitle: "Associate Software Engineer Trainee",
      cardSubtitle: "Geakminds Technologies Pvt Ltd",
      cardDetailedText:
        "Designed and developed a webpage for the Intelligent Inventory Management project to ensure seamless integration.Created engaging data visualizations and interactive components to enhance user experience, enabling data-driven decision-making.Troubleshot interface software and debugged application code.",
    },
    {
      title: "March 2021 - March 2022",
      cardTitle: "React JS Developer",
      cardSubtitle: "Leora Infotech Pvt Ltd",
      cardDetailedText:
        "Acquired extensive knowledge of React concepts and frameworks, primarily concentrating on UI bug fixes",
    },
  ];

//   // Function to check if dark mode is active and update the state
//   const checkDarkMode = () => {
//     const darkModeActive = document.documentElement.classList.contains("dark");
//     if (darkModeActive) {
//       setThemeColor("dark");
//     } else {
//       setThemeColor("light");
//     }
//   };

//   useEffect(() => {
//     // Initial check
//     checkDarkMode();

//     // Create a MutationObserver to observe changes on the <html> element
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (
//           mutation.type === "attributes" &&
//           mutation.attributeName === "class"
//         ) {
//           checkDarkMode(); // Check and update state when class changes
//         }
//       });
//     });

//     // Start observing the <html> element for attribute changes
//     observer.observe(document.documentElement, { attributes: true });

//     // Cleanup the observer when the component unmounts
//     return () => observer.disconnect();
//   }, []); // Empty dependency array to run only once on component mount


  console.log("themecolor",themeColor)
  return (
    <>
      <div className="!text-black dark:!text-white relative pt-10 !bg-white dark:!bg-black min-h-screen ">
        <Row gutter={[16, 16]}>
          <Col
            span={24}
            className="flex justify-center"
          >
            {/* {themeColor === "dark" ? ( */}
              <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                useReadMore={false}
                hideControls
                // theme={{ textColor: "white", cardBgColor: "black" }}
              >
                <div className="chrono-icons">
                  <img src={Geakmindspng} alt="image1" />
                  <img src={Geakmindspng} alt="image2" />
                  <img src={Leorapng} alt="image3" />
                </div>
              </Chrono>
            {/* ) : ( */}
              {/* <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                useReadMore={false}
                hideControls
                theme={{ textColor: "black", cardBgColor: "white" }}
              >
                <div className="chrono-icons">
                  <img src={Geakmindspng} alt="image1" />
                  <img src={Geakmindspng} alt="image2" />
                  <img src={Leorapng} alt="image3" />
                </div>
              </Chrono>
            )} */}
          </Col>
        </Row>
      </div>
    </>
  );
}
