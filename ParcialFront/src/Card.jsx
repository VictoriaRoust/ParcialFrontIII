import PropTypes from 'prop-types';

const Card = ({ inputA, inputB }) => {
  return (
    <div>
      <h2>Información:</h2>
      <p>Nombre: {inputA}</p>
      <p>Shampoo Preferido: {inputB}</p>
    </div>
  );
};

Card.propTypes = {
  inputA: PropTypes.string.isRequired,
  inputB: PropTypes.string.isRequired,
};

export default Card;