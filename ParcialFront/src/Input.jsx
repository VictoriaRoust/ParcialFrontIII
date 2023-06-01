import PropTypes from 'prop-types';
import { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [inputA, setinputA] = useState('');
  const [inputB, setinputB] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (inputA.trim().length < 3 || /^\s/.test(inputA)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (inputB.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    onSubmit({ inputA, inputB });
    setError('');
    setinputA('');
    setinputB('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={inputA}
            onChange={(e) => setinputA(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Shampoo Preferido:
          <input
            type="text"
            value={inputB}
            onChange={(e) => setinputB(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputForm;