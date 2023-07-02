import React, { useState } from 'react';
import "../estilo.css";

const AutomovelFilho = ({ galeriaAutomoveis }) => {

  const [automoveis, setAutomoveis] = useState([]);
  const [currentAutomovel, setCurrentAutomovel] = useState(0);
  const [tipoDigitado, setTipoDigitado] = useState('');

  const handleAddAutomovel = () => {
    const novoAutomovel = galeriaAutomoveis.find((automovel) => automovel.nome === tipoDigitado);
    if (novoAutomovel) {
      setAutomoveis([...automoveis, novoAutomovel]);
      setTipoDigitado('');
    } else {
      alert('Tipo de automóvel não encontrado na galeria!');
    }
  };

  const handleRemoveAutomovel = () => {
    if (automoveis.length > 0) {
      setAutomoveis(automoveis.filter((_, index) => index !== currentAutomovel));
      setCurrentAutomovel(0);
    }
  };

  const handleAutomovelChange = (index) => {
    setCurrentAutomovel(index);
  };

  const renderizaGaleria = () => {
    if (automoveis.length > 0) {
      return (
        <div>
          <img
            src={automoveis[currentAutomovel].imagem}
            alt={automoveis[currentAutomovel].nome}
            onClick={() => alert(automoveis[currentAutomovel].descricao)}
          />
            <p className='frase-automovel'>{automoveis[currentAutomovel].nome}</p>
          <div>
            {automoveis.map((automovel, index) => (
              <button key={automovel.id} disabled={index === currentAutomovel} onClick={() => handleAutomovelChange(index)}>
                {automovel.nome}
              </button>
            ))}
          </div>
        </div>
      );
    }
    return <span><p>Nenhum automóvel adicionado!</p></span>;
  };

  return (
    <div>
      <div className='espaco-input'>
        {renderizaGaleria()}
        <input type="text" value={tipoDigitado} onChange={(event) => setTipoDigitado(event.target.value)} />
        <button className='btn-imagem' onClick={handleAddAutomovel}>Adicionar automóvel</button>
        <button className='btn-imagem' onClick={handleRemoveAutomovel}>Remover automóvel</button>
      </div>
    </div>
  );
};

export default AutomovelFilho;
