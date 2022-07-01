import { Text } from '../../styles/Text'
import { Header, HeaderContent, HeaderButtonsArea } from './style'
import { Container } from '../../styles/Global'
import { Button } from '../../styles/Buttons'

export const Home = () =>{
    return (
        <Header>
            <Container>
                <HeaderContent>
                    <Text as="h1" type="heading1" color="grey5">Criando experiências por meio da tecnologia </Text>
                    <Text type="body1" color="grey6">Sou estudante de programação na Kenzie Academy Brasil, 
                    participei de diversos projetos resolvendo problemas de alto nível e desenvolvendo habilidades</Text>
                    <HeaderButtonsArea>
                        <Button>Projetos</Button>
                        <Button as="a" href="#" type="btLink" color="grey5">Tecnologias</Button>
                    </HeaderButtonsArea>
                </HeaderContent>
            </Container>
        </Header>
    )
}