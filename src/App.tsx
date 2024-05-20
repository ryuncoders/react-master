import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(181, 11, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    span {
      opacity: 1;
    }
  }
`;

const Span = styled(motion.span)`
  color: rgb(255, 255, 255);
  opacity: 0.6;
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  transition: opacity 0.3s ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 200px);
  gap: 15px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [boxId, setBoxId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setBoxId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {boxId ? (
          <Overlay
            onClick={() => setBoxId(null)}
            initial={{ backgroundColor: "rgba(181, 11, 255, 0)" }}
            animate={{ backgroundColor: "rgb(181, 11, 255, 0.8)" }}
            exit={{ backgroundColor: "rgb(181, 11, 255, 0)" }}
          >
            <Box
              layoutId={boxId}
              style={{ width: "500px", height: "300px" }}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Span>Tap to open a card.</Span>
    </Wrapper>
  );
}

export default App;
