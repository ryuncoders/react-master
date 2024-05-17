import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  place-self: center;
  background-color: whitesmoke;
`;

// 1)
const myAnimat = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: { taype: "spring", delay: 0.25, bounce: 100 },
  },
};

// 2)

const box: Variants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circle: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={box} initial="start" animate="end">
        <Circle variants={circle} initial="start" animate="end"></Circle>
        <Circle variants={circle} initial="start" animate="end"></Circle>
        <Circle variants={circle} initial="start" animate="end"></Circle>
        <Circle variants={circle} initial="start" animate="end"></Circle>
      </Box>
    </Wrapper>
  );
}

export default App;
