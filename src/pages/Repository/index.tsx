import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Dashboard from '../Dashboard';
import { Header, RepositoryInfo, Issues } from './styles';
import{ FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
return (
  <>
<Header>
  <img src={logoImg} alt="GitHub Explorer"/>
  <Link to="/dashboard">
    <FiChevronLeft/>
    Voltar
  </Link>
</Header>
<RepositoryInfo>
  <header>
  <img src="https://avatars1.githubusercontent.com/u/49881040?s=460&v=4" alt=""/>
  <div>
    <strong>Herbert De Sousa</strong>
    <p>Project Rocketseat</p>
  </div>
  </header>
  <ul>
    <li>
      <strong>100</strong>
      <span>Stars</span>
    </li>
    <li>
      <strong>100</strong>
      <span>Forks</span>
    </li>
    <li>
      <strong>100</strong>
      <span>Issues Abertas</span>
    </li>
  </ul>
</RepositoryInfo>
<Issues>
<Link to="#">
  <div>
    <strong>asdf</strong>
    <p> asdf </p>
  </div>
  <FiChevronRight size={20}/>
  </Link>
</Issues>
</>
  );


};

export default Repository;
