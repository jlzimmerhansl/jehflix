import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

import {} from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        
        <form>
          <label>
            Nome da Categoria:
            <input type="text" />

            <button>
              Cadastrar
            </button>
          </label>
        </form>

        <Link to="/">
            Voltar para a Home
        </Link>
      </PageDefault>
    );
  }
  
  export default CadastroCategoria;
  