
import React from 'react'
import { Card } from '../../components/Cards';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

export const Feed = () => {
  return (
    <>
        <Header checked={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="André Torres" image="https://avatars.githubusercontent.com/u/73555173?v=4" percentual={25}/>
                <UserInfo nome="André Torres" image="https://avatars.githubusercontent.com/u/73555173?v=4" percentual={65}/>
                <UserInfo nome="André Torres" image="https://avatars.githubusercontent.com/u/73555173?v=4" percentual={45}/>
                <UserInfo nome="André Torres" image="https://avatars.githubusercontent.com/u/73555173?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}


