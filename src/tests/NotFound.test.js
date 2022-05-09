import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from '../components/NotFound';

describe('testa o componente "not found"', () => {
  test('', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <NotFound />
      </Router>,
    );
    historicoDeNavegacao.push('/qualquer-rota');
    const notFound = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji', level: 2 });
    expect(notFound).toBeInTheDocument();
  });
  test('testa se a imagem de url "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    () => {
      const historicoDeNavegacao = createMemoryHistory();
      render(
        <Router history={ historicoDeNavegacao }>
          <NotFound />
        </Router>,
      );
      historicoDeNavegacao.push('/qualquer-rota');
      const imgRenderizada = screen.getByRole('img',
        { name: 'Pikachu crying because the page requested was not found' });
      expect(imgRenderizada).toBeInTheDocument();
      const src = screen.getByAltText(/Pikachu crying /);
      expect(src).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
});
