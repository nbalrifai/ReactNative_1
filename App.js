import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Thumbnail,
  Button,
  Icon,
  Left,
  Right
} from "native-base";

export default function App() {
  return (
    <Container>
      <Header />
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Hello</Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>Savage</Text>
          </CardItem>
        </Card>
      </Content>
      <Text>Open up App.js to start working on your app!</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
