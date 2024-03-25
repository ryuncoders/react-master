import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 35px;
`;

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading ...</Loader> : null}
    </Container>
  );
}
export default Coin;
