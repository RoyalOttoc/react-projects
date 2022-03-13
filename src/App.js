import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;

const rotationAnimation = keyframes`
 0%{
   transform: rotate(0)
 }
 50%{
   transform: rotate(180deg);
   border-radius: 50px;

 }
 100%{
   transform: rotate(0);
   border-radius: 0px;
 }
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  animation: ${rotationAnimation} 2s linear infinite;
  span {
    font-size: 30px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Box bgColor="tomato">
          <span>Hello World</span>
        </Box>
      </Wrapper>
    </div>
  );
}

export default App;
