import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: rgb(15, 15, 15);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
`;
const Button = styled.button``;

const box = {
  entry: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              custom={back}
              variants={box}
              initial="entry"
              animate="center"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Button onClick={prevPlease}>{"<"}</Button>
      <Button onClick={nextPlease}>{">"}</Button>
    </Wrapper>
  );
}
export default App;
