import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('Olá, React Native');

  const exibirMensagem = () => {
    setMensagem(`Olá, ${nome}! Seja bem-vindo(a)!`);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>

      <TextInput
        style = {styles.input}
        placeholder = "Seu nome aqui"
        onChangeText = {setNome}
        value = {nome}
      />

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  }
});
