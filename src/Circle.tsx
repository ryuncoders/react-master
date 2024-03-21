import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    background-color: ${props=> props.bgColor};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid ${props=>props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text="default text"}:CircleProps) {
    return (
    <div>
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
    </div>);
}

export default Circle;