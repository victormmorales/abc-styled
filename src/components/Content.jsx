import styled from "styled-components";

const MarginStyled = styled.div`
  margin-top: 1rem;
`;

const LinkYellow = styled.a`
  color: #b97011;
  text-decoration: underline;
  font-size: 20px;
`;

const TitlePrincipal = styled.h1`
  font-size: 32px;
`;

const Content = () => {
  return (
    <>
      <TitlePrincipal>
        El BCE anuncia más subidas de los tipos de interés para las hipotecas
      </TitlePrincipal>
      <p>
        Los bancos llevan semanas anticipándose al giro de la política monetaria
        con una oferta ajustada al nuevo escenario económico, pero quien más va
        a soportar todo esto serán los consumidores.
      </p>
      <MarginStyled>
        <LinkYellow href="https://www.abc.es/economia/subida-tipos-interes-obstaculo-recuperacion-pymes-20220721144241-nt.html">
          La subida de tipos de interés, un obstáculo más para la recuperación
          de las pymes
        </LinkYellow>
      </MarginStyled>
    </>
  );
};

export default Content;
