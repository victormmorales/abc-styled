import styled from "styled-components";
import autor from "../assets/autor.png";
import cesur from "../assets/publi-cesur.png";
import leroy from "../assets/leroy.png";
import audi from "../assets/audi.png";
import footer from "../assets/footer.png";

const PaddingStyled = styled.div`
  padding: 1.5rem;
`;

const MarginStyled = styled.div`
  margin: 20px;
`;

const TextStyled = styled.p`
  font-size: 20px;
  margin-top: 20px;
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

        <MarginStyled>
          <img src={cesur} alt="autor" width="300" height="400" />
        </MarginStyled>

        <TextStyled>
          <strong>
            Si suben los tipos de interés de referencia del BCE, también lo hace
            el euríbor, que es el índice al que están referenciadas el 80%
          </strong>{" "}
          de las hipotecas en España. Y si este aumenta, el coste de los
          préstamos a tipo variable para adquisición de vivienda también lo
          hace. En suma, un golpe para los hipotecados, que tendrán que pagar
          más por sus préstamos, aunque la realidad es que ya vienen haciéndolo
          desde hace varios meses. Las consecuencias de la subida de tipos
          anunciada por el Banco Central Europeo (BCE) se dejan sentir en la
          economía, las empresas… y también en los consumidores, que tendrán que
          soportar un{" "}
        </TextStyled>

        <TextStyled>
          En el caso de las <strong>hipotecas a tipo fijo,</strong> aquellos que
          ya la tengan pagarán lo establecido, pero para los interesados en
          adquirir un préstamos en esta modalidad, las condiciones también
          cambiarán. Según el comparador HelpMyCash, se espera que los tipos
          fijos superen el 3,5% o el 5% en un plazo de 15 días y el 2% que
          todavía mantienen algunas entidades desaparezca.
        </TextStyled>

        <TextStyled>
          El mercado lleva desde diciembre descontando una subida de tipos del
          BCE, y eso ha provocado que el incremento del euríbor se adelante. Ha
          pasado de estar en -0,5% a finales de 2021 hasta casi el 1,5% actual.
          Y la{" "}
          <strong>
            previsión de los analistas es que termine en torno al 3,8% este año
          </strong>
          al compás de las decisiones del supervisor bancario.
        </TextStyled>

        <TextStyled>
          ¿Cuánto se han encarecido las hipotecas estos meses? Tomando como
          referencia una hipoteca variable a 30 años con un diferencial del
          0,99%, la plataforma IAhorro ofrece una simulación para poder
          comprobar cómo afectará la evolución del euríbor a la cuota
          hipotecaria.
        </TextStyled>

        <MarginStyled>
          <img src={leroy} alt="autor" width="300" height="250" />
        </MarginStyled>

        <TextStyled>
          Para un préstamo medio en España, que ronda los 150.000 euros, la
          diferencia entre la cuota que se pagaba el mes de julio de 2021
          (448,72 euros) y la que tendría que pagar este mes (756,23 euros)
          sería de 3107,5 euros, una cifra que se traduciría en un total de
          <strong>3690,14 euros a pagar de más de forma anual.</strong>
        </TextStyled>

        <TextStyled>
          Además, dependiendo de la evolución del euríbor, las cuotas en estas
          condiciones podrían aumentar todavía más, teniendo en cuenta que los
          principales portales de referencia calculan que el índice se sitúe en
          torno al 1,5% a finales de 2022. En ese mismo supuesto, la diferencia
          entre la cuota que se pagará este mes de julio (756,23 euros) y la que
          quedaría a final de año (765,07 euros) sería de 37,96 euros por mes y
          un total de 455,52 euros más a pagar en el total anual. Por su parte,
          el alza de la cuota entre julio de 2021 y finales de 2022, si se
          cumplen las previsiones de que el índice acabe en el 1,5%, sería de
          3690,14 euros al año.
        </TextStyled>

        <TextStyled>
          Cuanto mayor sea el importe total de la hipoteca, mayor será el
          impacto de la subida del euríbor. Poniendo como ejemplo una hipoteca
          de 300.000 euros con las condiciones previas de tipo variable a 30
          años con un diferencial del 0,99%, la diferencia entre las cuotas de
          julio de 2021 (897,44 euros) y el actual mes de julio de 2022
          (1.094,22 euros) suponen un{" "}
          <strong>
            sobrecoste mensual de 396,78 euros y un total de 3361,36 euros extra
          </strong>{" "}
          a pagar a lo largo del año.
        </TextStyled>

        <TextStyled>
          <h3>Mejores condiciones para los ahorradores</h3>
          Los principales beneficiados tras la medida serán los ahorradores, ya
          que por lógica, los productos de ahorro como depósitos y cuentas
          incrementarán su rentabilidad. Un movimiento al que ya se han sumado
          algunas entidades bancarias ofreciendo mayores retornos por los
          ahorros. Según el comparador HelpMyCash, las entidades que necesiten
          liquidez o quieran captar clientes serán los primeros en subir los
          intereses de sus depósitos, adelantarse a los principales bancos.
        </TextStyled>

        <TextStyled>
          En el contexto actual, desde HelpMyCash señalan que{" "}
          <strong>
            «no es recomendable contratar depósitos a largo plazo»
          </strong>
          , ya que se espera que los tipos sigan subiendo conforme pasen los
          meses y la rentabilidad de estos productos de ahorro sigan en aumento.
        </TextStyled>

        <MarginStyled>
          <img src={audi} alt="autor" width="300" height="400" />
        </MarginStyled>

        <TextStyled>
          <h3>Si tu nombre es Pedro Largo, esto te interesa...</h3>
          ¿Quieres una hipoteca adapta y con un interés por debajo del 1%...
          entonces deberías seguir leyendo esto.
        </TextStyled>

        <TextStyled>
          Pedroooo te la has comida amigo 🍆 Tranquilo amigo que te va a salir
          la hipoteca muy bien! 😉
        </TextStyled>
      </PaddingStyled>
      <img src={footer} alt="autor" width="400" height="400" />
    </>
  );
};

export default Autor;
