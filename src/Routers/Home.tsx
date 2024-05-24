import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { IGetMoviesResult, getMovies } from "../api";
import { makeImagePath } from "../utils";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useAnimation,
  useScroll,
} from "framer-motion";
import { useHistory, useRouteMatch } from "react-router-dom";

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

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  height: 10vw;
  gap: 10px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  color: black;
  font-size: 40px;
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  background-color: black;
  position: absolute;
  bottom: 0;
  opacity: 0;
  padding: 10px;
  h4 {
    color: white;
    font-size: 22px;
  }
`;

const InfoMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 180vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  overflow: scroll;
`;

const pageVariants = {
  hidden: { x: window.innerWidth },
  visible: { x: 0 },
  exit: { x: -window.innerWidth },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

const InfoVariants = {
  hover: {
    opacity: 0.3,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

function Home() {
  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  console.log(bigMovieMatch);

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

  const onBoxClicked = (movieId: number) => {
    history.push(`movies/${movieId}`);
  };
  const onOverlayClick = () => history.push("/");

  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +bigMovieMatch.params.movieId);

  const { scrollY } = useScroll();

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
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      key={movie.id}
                      layoutId={String(movie.id)}
                      onClick={() => onBoxClicked(movie.id)}
                    >
                      <Info variants={InfoVariants}>
                        <h4>{movie.original_title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Page>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {clickedMovie && (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <InfoMovie
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={bigMovieMatch.params.movieId}
                />
              </>
            )}
            <></>
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
