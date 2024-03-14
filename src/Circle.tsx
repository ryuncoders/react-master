import styled from "styled-components";

interface Circleshape {
    bgColor: string;
    text?: string;
}

const CircleBox = styled.div<Circleshape>`
    background-color: ${props=> props.bgColor};
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

function Circle({bgColor, text}:Circleshape) {
    return (
    <div>
        <CircleBox bgColor={bgColor}>{text}</CircleBox>
    </div>);
}

export default Circle;