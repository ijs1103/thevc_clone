import styled, {keyframes} from "styled-components";
const spin = keyframes`
	to { transform: rotate(360deg); }
`;
const Container = styled.p`
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0;
  color: transparent;

	&::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid red;
    border-top-color: transparent;
    animation: ${spin} 1s linear infinite;
	}
`;
export default function Loader(){
	return (
		<Container>Loading...</Container>
	);
}