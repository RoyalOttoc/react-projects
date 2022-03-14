import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${props => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function Circle({bgColor, borderColor, text = 'default'}: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
