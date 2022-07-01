import { Text } from "../../styles/Text";
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  StackCard
} from "./style";
import { Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";
import { stackData } from "../../utils/stackData"

export const Home = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button>Projetos</Button>
              <Button as="a" href="#" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection>
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack) => (
              <StackCard>
                <Text>{stack.title}</Text>
                <img src={stack.img} alt="" />
              </StackCard>
            ))}
          </StackCards>
        </Container>
      </StackSection>
    </>
  );
};
