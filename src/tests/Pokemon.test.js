import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Pokemon from '../components/Pokemon';

describe('', () => {
  test('', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router
        history={ historicoDeNavegacao }
      >
        <Pokemon
          isFavorite={ false }
          pokemon={ 25 }
        />
      </Router>,
    );
    historicoDeNavegacao.push('/pokemons/25');
    console.log(historicoDeNavegacao);
  });
});
