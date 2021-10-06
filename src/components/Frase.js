import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 10rem;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 25px;
`;

const Frase = ({ datos }) => {
  return (
    <ContenedorFrase>
      <h1>{datos.frase}</h1>
      <Author>
        <h2>{datos.autor}</h2>
      </Author>
    </ContenedorFrase>
  );
};

export default Frase;
