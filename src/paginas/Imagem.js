import React, { useState } from 'react';
import "../estilo.css";
import imagem1 from '../images/imagem1.jpg';
import imagem2 from '../images/imagem2.jpg';
import imagem3 from '../images/imagem3.jpg';
import imagem4 from '../images/imagem4.jpg';
import imagem5 from '../images/imagem5.jpg';
import imagem6 from '../images/imagem6.jpg';

const Imagem = () => {
  const [inputValue, setInputValue] = useState('');
  const [imageList, setImageList] = useState([]);

  const gallery = [
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem5,
  imagem6
  ];

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleImageInsert = () => {
    const index = inputValue - 1;
    if (index >= 0 && index < gallery.length) {
      const imageUrl = gallery[index];
      setImageList([...imageList, imageUrl]);
    } else {
      alert('Número de imagem inválido! Escolha um número de 1 a 6');
    }
  };
  

  const handleImageRemove = () => {
    const imageUrl = gallery[inputValue - 1];
    const imageIndex = imageList.indexOf(imageUrl);
    if (imageIndex !== -1) {
      setImageList(imageList.filter((_, index) => index !== imageIndex));
    }
  };

  const renderImageList = () => {
    if (imageList.length > 0) {
      return imageList.map((imageUrl, index) => (
        <img src={imageUrl} alt={`Image ${index + 1}`} />
      ));
    }
    return <p>Nenhuma imagem carregada!</p>;
  };

  return (
    <div className='espaco-input'>
    <h1>Você está na tela Imagem!</h1>
      <label>
        Insira o número da imagem:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <button className='btn-imagem' onClick={handleImageInsert}>Inserir imagem</button>
      <button className='btn-imagem' onClick={handleImageRemove}>Remover imagem</button>
      <br></br>
      {renderImageList()}
    </div>
  );
};

export default Imagem;
