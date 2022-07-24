import styled from "styled-components";
import hamburguer from "../assets/hamburguer.png";
import title from "../assets/title.png";
import login from "../assets/login.png";

const ContainerMenu = styled.div`
  height: 50px;
  margin: -4px;
  display: flex;
  justify-content: space-between;
  padding: 11px 12px 6px 12px;
  border-bottom: 6px solid #008ab7;
  width: 100vw;
`;

const Menu = () => {
  return (
    <ContainerMenu>
      <img src={hamburguer} alt="menu" width="50" height="35" />
      <a href="https://www.abc.es/economia/">
        <img src={title} alt="abc" />
      </a>
      <img src={login} alt="login" width="50" height="50" />
    </ContainerMenu>
  );
};

export default Menu;
