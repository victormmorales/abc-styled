import styled from "styled-components";
import autor from "../assets/autor.png";

const PaddingStyled = styled.div`
  padding: 1.5rem;
`;

const TextStyled = styled.p`
  font-size: 20px;
`;

const Autor = () => {
  return (
    <>
      <img src={autor} alt="autor" width="390" height="400" />
      <PaddingStyled>
        <TextStyled>
          Las consecuencias de la subida de tipos anunciada por el Banco Central
          Europeo (BCE) se dejan sentir en la economía, las empresas… y también
          en los consumidores, que tendrán que soportar un{" "}
          <strong>
            incremento de la cuota hipotecaria por el encarecimiento del precio
            del dinero
          </strong>
          . Sin embargo, los bancos llevan meses anticipándose a este nuevo
          escenario de política monetaria, con el euríbor al alza, ajustando su
          oferta hipotecaria al mercado y promocionado las de tipo variable por
          los potenciales márgenes de beneficios para las entidades.
        </TextStyled>
        <p>
          Las consecuencias de la subida de tipos anunciada por el Banco Central
          Europeo (BCE) se dejan sentir en la economía, las empresas… y también
          en los consumidores, que tendrán que soportar un{" "}
          <strong>
            incremento de la cuota hipotecaria por el encarecimiento del precio
            del dinero
          </strong>
          . Sin embargo, los bancos llevan meses anticipándose a este nuevo
          escenario de política monetaria, con el euríbor al alza, ajustando su
          oferta hipotecaria al mercado y promocionado las de tipo variable por
          los potenciales márgenes de beneficios para las entidades.
        </p>
      </PaddingStyled>
    </>
  );
};

export default Autor;
