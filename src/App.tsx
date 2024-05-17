import React, { useRef } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
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
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const box: Variants = {
  hover: { scale: 1, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "50%" },
  drag: { backgroundColor: "rgb(34, 47, 62)" },
};

function App() {
  const boxConstratints = useRef(null);
  return (
    <Wrapper>
      <BiggerBox ref={boxConstratints}>
        <Box
          variants={box}
          drag
          dragConstraints={boxConstratints}
          // dragSnapToOrigin
          dragElastic={1}
          whileHover="hover"
          whileTap="tap"
          whileDrag="drag"
        ></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
