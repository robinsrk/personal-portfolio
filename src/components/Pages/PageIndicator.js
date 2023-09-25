import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

function PageIndicatorPoint({
  pageNumber,
  selectedPage,
  isSelected,
  nestedScroll,
}) {
  const [selectedNumber, setselectedNumber] = useState(null);
  useEffect(() => {
    if (nestedScroll) setselectedNumber(nestedScroll.currentIndex);
  }, [nestedScroll]);
  const pageTitles = ["Home", "Projects", "Profile", "Contact", "Blog"];

  if (nestedScroll && isSelected) {
    const { numberOfChilds, currentIndex } = nestedScroll;

    return (
      <motion.div
        animate={{
          left: "35%",
          height: "120px",
          width: "20px",
        }}
        style={{ position: "relative" }}
      >
        <PageIndicator
          nestedScroll={null}
          pagesNumber={numberOfChilds}
          selectedPage={currentIndex}
          isNested={true}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      //initial={{ width: '14px', height: '14px' }}
      animate={{ opacity: isSelected ? 1 : 0.2 }}
      style={{
        display: "flex",
        width: "20px",
        height: "20px",
        border: "3px solid white",
        borderRadius: "99999px",
        margin: "20px",
      }}
    >
      {/* {console.log(selectedNumber)} */}
      {isSelected && (
        <div className="d-flex">
          <motion.div
            style={{
              width: "10px",
              height: "10px",
              margin: "auto",
              borderRadius: 999,
            }}
            className="bg-transparent w-0.5 h-0.5 lg:w-2.5 lg:h-2.5 m-auto rounded-full"
            layoutId="indicator"
            initial={false}
            animate={{ backgroundColor: "white" }}
          />
          {/* <p style={{ marginLeft: "1vw" }}>
            {nestedScroll != null
              ? nestedScroll.currentIndex
              : pageTitles[selectedPage]}
            {console.log(nestedScroll)}
          </p> */}
        </div>
      )}
    </motion.div>
  );
}

function PageIndicator({
  pagesNumber = 0,
  selectedPage = 0,
  nestedScroll,
  isNested = false,
}) {
  const childs = Array.from(Array(pagesNumber).keys()).map((el) => {
    const isSelected = selectedPage === el;
    return (
      <PageIndicatorPoint
        key={el}
        pageNumber={pagesNumber}
        selectedPage={selectedPage}
        isSelected={isSelected}
        nestedScroll={nestedScroll}
        isNested={isNested}
      />
    );
  });

  return (
    <motion.div
      initial={{ transform: "translateX: -100%" }}
      animate={{ transform: "translateX: 0%" }}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        margin: "auto",
        height: isNested ? "100%" : "fit-content",
        justifyContent: "space-between",
      }}
    >
      {childs}
    </motion.div>
  );
}

export default function PageIndicatorContainer({
  pagesNumber = 0,
  selectedPage = 0,
  nestedScroll,
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: "5%",
        height: "100vh",
        display: "flex",
        top: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      <PageIndicator {...{ pagesNumber, selectedPage, nestedScroll }} />{" "}
    </div>
  );
}
