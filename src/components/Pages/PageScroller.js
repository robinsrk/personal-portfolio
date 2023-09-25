// import React from "react";
// import PageScroll, { NestedPageScroll } from "react-page-scroll";
// import Home from "../Home/Home";
// import Project from "../Project/Project";
// import Projects from "../Projects/Projects";
// import ContactMe from "../ContactMe/ContactMe";

// const SimpleNestedExample = () => {
//   return (
//     <PageScroll width="100vw" height="100vh">
//       <div id="page1-1" className="page">
//         <Home />
//       </div>
//       <NestedPageScroll direction="vertical" width="100vw" height="100vh">
//         <div id="page1-2" className="page">
//           <Projects />
//         </div>
//       </NestedPageScroll>
//       <div id="page2" className="page">
//         <ContactMe />
//       </div>
//     </PageScroll>
//   );
// };

// export default SimpleNestedExample;

// import React, { useState } from "react";
// // import { motion } from "framer-motion/dist/framer-motion";
// import { motion } from "framer-motion";

// import ScrollingContainer, { NestedPageScroll } from "react-page-scroll";
// import PageIndicatorContainer from "./PageIndicator";
// import Home from "../Home/Home";
// import Projects from "../Projects/Projects";
// import Profile from "../Profile/Profile";
// import ContactMe from "../ContactMe/ContactMe";

// const bgColors = [
//   "rgb(29 78 216)",
//   "rgb(219 39 119)",
//   "rgb(220 38 38)",
//   "rgb(8 145 178)",
//   "rgb(147 51 234)",
//   "rgb(5 150 105)",
// ];

// const NestedDemoWithPageIndicators = () => {
//   const [nestedState, setNestedState] = useState(null);

//   const [currentPage, setCurrentPage] = useState(0);

//   const setNestedtStateOnScrollInit = ({ currentChildIndex }) => {
//     setNestedState({ currentIndex: currentChildIndex, numberOfChilds: 2 });
//   };

//   const setNestedtStateOnScrollStart = ({ targetIndex }) => {
//     setNestedState({ currentIndex: targetIndex, numberOfChilds: 2 });
//   };
//   return (
//     <motion.div className="title">
//       <PageIndicatorContainer
//         nestedScroll={nestedState}
//         pagesNumber={4}
//         selectedPage={currentPage}
//       />
//       <ScrollingContainer
//         onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}
//       >
//         <div className="page">
//           <Home />
//         </div>
//         <NestedPageScroll
//           direction="horizontal"
//           onScrollInit={setNestedtStateOnScrollInit}
//           onScrollStart={setNestedtStateOnScrollStart}
//           onScrollCommandCede={() => setNestedState(null)}
//         >
//           <div className="page bg2">
//             <Projects />
//           </div>
//           <div className="page bg3">
//             <span>Page 2 2/2</span>
//           </div>
//         </NestedPageScroll>
//         <div className="page">
//           <Profile />
//         </div>
//         <div className="page" style={{ height: "50vh" }}>
//           <ContactMe />
//         </div>
//       </ScrollingContainer>
//     </motion.div>
//   );
// };

// export default NestedDemoWithPageIndicators;

import React from "react";
import { Pager } from "react-bootstrap";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Profile from "../Profile/Profile";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
// import FirstComponent from "./FirstComponent";
// import SecondComponent from "./SecondComponent";
// import ThirdComponent from "./ThirdComponent";
// import FourthComponent from "./FourthComponent";
// import FifthComponent from "./FifthComponent";

import "./Pages.css";
// import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
    this.pages = ["Home", "Projects", "About me"];
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {this.pages[i - 1]}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home />
          <Projects />
          <Profile />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </React.Fragment>
    );
  }
}
