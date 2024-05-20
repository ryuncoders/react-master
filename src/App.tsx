import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { start } from "repl";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 25px;
`;

const btn = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  end: { opacity: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={btn}
            initial="initial"
            animate="visible"
            exit="end"
          ></Box>
        ) : null}
      </AnimatePresence>
      <button onClick={onClick} style={{ marginTop: "20px" }}>
        Click
      </button>
    </Wrapper>
  );
}
export default App;
