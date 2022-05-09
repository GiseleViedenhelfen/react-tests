import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import About from '../components/About';

describe('testa o componente "About"', () => {
  test('testa se a página "about" tem o h2 com o texto "About Pokédex"', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <About />
      </Router>,
    );
    historicoDeNavegacao.push('/about');
    const about = screen.getByRole('heading',
      { name: 'About Pokédex', level: 2 });
    expect(about).toBeInTheDocument();
  });
  test('testa se a imagem de url "https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png" é renderizada',
    () => {
      const historicoDeNavegacao = createMemoryHistory();
      render(
        <Router history={ historicoDeNavegacao }>
          <About />
        </Router>,
      );
      historicoDeNavegacao.push('/about');
      const imgRenderizada = screen.getByRole('img', { name: 'Pokédex' });
      expect(imgRenderizada).toBeInTheDocument();
      const src = screen.getByAltText('Pokédex');
      expect(src).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    });
  test('testa se as informações sobre os pokemons estão na página', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <About />
      </Router>,
    );
    historicoDeNavegacao.push('/about');
    const primeiraTagPParteUm = 'This application simulates a Pokédex,';
    const primeiraTagPParteDois = ' a digital encyclopedia containing all Pokémons';
    const segundaTagP = 'One can filter Pokémons by type,';
    const segundaTagPParte2 = ' and see more details for each one of them';
    const infosPrimeiroP = screen.getByText(primeiraTagPParteUm + primeiraTagPParteDois);
    const infosAboutSegundoP = screen.getByText(segundaTagP + segundaTagPParte2);
    expect(infosPrimeiroP).toBeInTheDocument();
    expect(infosAboutSegundoP).toBeInTheDocument();
  });
});
