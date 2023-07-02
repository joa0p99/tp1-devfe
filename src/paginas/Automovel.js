import React from 'react';
import AutomovelFilho from './AutomovelFilho';
import carro from '../galeria/carro.jpg';
import moto from '../galeria/moto.jpg';
import caminhao from '../galeria/caminhao.jpg';
import onibus from '../galeria/onibus.jpg';
import bicicleta from '../galeria/bicicleta.jpg';

const Automovel = () => {

  const galeriaAutomoveis = [
    {
      id: 1,
      nome: 'carro',
      imagem: carro,
      descricao: 'Este automóvel é um carro.',
    },
    {
      id: 2,
      nome: 'moto',
      imagem: moto,
      descricao: 'Este automóvel é uma moto.',
    },
    {
        id: 3,
        nome: 'caminhao',
        imagem: caminhao,
        descricao: 'Este automóvel é um caminhão',
      },
      {
        id: 4,
        nome: 'onibus',
        imagem: onibus,
        descricao: 'Este automóvel é um ônibus.',
      },
      {
        id: 5,
        nome: 'bicicleta',
        imagem: bicicleta,
        descricao: 'Este automóvel é uma bicicleta.',
      }
  ];

  return (
    <div>
      <h1>Você está na tela Automóvel</h1>
      <AutomovelFilho galeriaAutomoveis={galeriaAutomoveis} />
    </div>
  );
};

export default Automovel;