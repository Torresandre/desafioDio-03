import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock,  MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, SubtitleCadastro } from './style';
import { useForm } from "react-hook-form";
import React from "react";

export const CreateUser = () =>{

  const navigate = useNavigate()
  const handleClickLogin = () => {
    navigate('/login')
}

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    const onSubmit = async (formData) => {
      try{
          const {data} = await api.post('/users', { id: api.length, name: formData.name, email: formData.email, senha: formData.senha });
          
          if(data.length && data[0].id){
            alert('Usuário já cadastrado')
               
              return
          }

          navigate('/feed')
      }catch(e){
          //TODO: HOUVE UM ERRO
      }
  };


  return(
    <>
    <Header checked={undefined}  />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
        e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome" leftIcon={<MdPerson />} name="name"  control={control} />
                    {errors.name && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <SubtitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleCadastro>
                <Row>
                    
                    <EsqueciText>Já tenho conta.</EsqueciText>
                    <CriarText onClick={handleClickLogin}> Fazer login</CriarText>
                </Row>
                </Wrapper>
            </Column>
    </Container>
    </>
  )
}