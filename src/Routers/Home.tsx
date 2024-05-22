import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { IGetMoviesResult, getMovies } from "../api";
import { makeImagePath } from "../utils";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 300vh;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const Loader = styled.div`
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 68px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  top: -200px;
`;
const Page = styled(motion.div)`
  position: absolute;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  overflow: hidden;
  height: 10vw;
  gap: 10px;
`;
const Box = styled.div<{ bgPhoto: string }>`
  background-color: white;
  color: black;
  font-size: 40px;
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
`;

const pageVariants = {
  hidden: { x: window.innerWidth },
  visible: { x: 0 },
  exit: { x: -window.innerWidth },
};

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const offset = 6;

  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Page
                key={index}
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(1)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      key={movie.id}
                    >
                      {}
                    </Box>
                  ))}
              </Page>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
