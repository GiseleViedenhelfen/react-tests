import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('testando o componente "App"', () => {
  test('testa o link "Home", se é renderizado', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();
  });

  test('testa o link "About", se é renderizado', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();
  });

  test('testa o link "Favorite Pokémons", se é renderizado', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorites).toBeInTheDocument();
  });

  test('testa o link "Home", redireciona corretamente', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <App />
      </Router>,
    );
    historicoDeNavegacao.push('/');
    const home = screen.getByRole('heading',
      { name: 'Encountered pokémons', level: 2 });
    userEvent.click(home);
  });

  test('testa o link "About", redireciona corretamente', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <App />
      </Router>,
    );
    historicoDeNavegacao.push('/about');
    const about = screen.getByRole('heading',
      { name: 'About Pokédex', level: 2 });
    userEvent.click(about);
  });

  test('testa o link "favorites", redireciona corretamente', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <App />
      </Router>,
    );
    historicoDeNavegacao.push('/favorites');
    const favorites = screen.getByRole('heading',
      { name: 'Favorite pokémons', level: 2 });
    userEvent.click(favorites);
  });

  test('testa a página not found', () => {
    const historicoDeNavegacao = createMemoryHistory();
    render(
      <Router history={ historicoDeNavegacao }>
        <App />
      </Router>,
    );
    historicoDeNavegacao.push('/rota-qualquer');
    const notFound = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji', level: 2 });
    expect(notFound).toBeInTheDocument();
  });
});
