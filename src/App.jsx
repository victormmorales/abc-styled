import styled from "styled-components";
import Publi from "./components/Publi";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Autor from "./components/Autor";

const PaddingStyled = styled.div`
  padding: 1.5rem;
`;

function App() {
  return (
    <>
      <Publi />
      <Menu />
      <PaddingStyled>
        <Content />
      </PaddingStyled>
      <Autor />
    </>
  );
}

export default App;
