import { useState } from 'react';
import InputFormulario from './Input';
import Card from './Card';

const App = () => {
  const [data, setData] = useState(null);

  const handleSubmit = (formData) => {
    setData(formData);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <InputFormulario onSubmit={handleSubmit} />
      {data && <Card inputA={data.inputA} inputB={data.inputB} />}
    </div>
  );
};

export default App;