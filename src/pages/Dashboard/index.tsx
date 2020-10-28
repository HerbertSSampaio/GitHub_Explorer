import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="GitHub Explorer" />
  <Title>Explore Repositórios no GitHub</Title>
  <Form>
    <input placeholder="Digite o nome do repositório" />
    <button type="submit">Pesquisar</button>
  </Form>
  <Repositories>
    <a href="#">
      <img
      src="https://avatars1.githubusercontent.com/u/49881040?s=460&v=4"
      alt="Herbert De Sousa"/>
    <div>
      <strong>unform</strong>
      <p> Easy From React and React Native </p>
    </div>
    <FiChevronRight size={20}/>
    </a>
    <a href="#">
      <img
      src="https://avatars1.githubusercontent.com/u/49881040?s=460&v=4"
      alt="Herbert De Sousa"/>
    <div>
      <strong>unform</strong>
      <p> Easy From React and React Native </p>
    </div>
    <FiChevronRight size={20}/>
    </a>
    <a href="#">
      <img
      src="https://avatars1.githubusercontent.com/u/49881040?s=460&v=4"
      alt="Herbert De Sousa"/>
    <div>
      <strong>unform</strong>
      <p> Easy From React and React Native </p>
    </div>
    <FiChevronRight size={20}/>
    </a>
  </Repositories>
  </>
  );
}

export default Dashboard;
