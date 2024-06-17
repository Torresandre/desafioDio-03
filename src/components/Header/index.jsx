
import React from 'react'
import logo from '../../assets/logo-dio.png';
import { useNavigate  } from "react-router-dom";

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './style';

export const Header = ({checked}) => {


  const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickSignCreate = () => {
      navigate('/create')
  }
  return (
    <Wrapper>
      <Container>
          <Row>
          <MenuRight href="/">
            <img src={logo} alt="Logo da dio"/>
            </MenuRight>
            {checked ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {checked ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/73555173?v=4"/>
              ) : (
              <>
               
                <Button title="Entrar" onClick={handleClickSignIn}/>
                <Button title="Cadastrar" onClick={handleClickSignCreate} />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

