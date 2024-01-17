import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView  } from 'react-native';
import batimg from '../../../assets/batimg.png';

export function Home() {
  let [isBat, setIsBat] = useState('');

  function ativar() {
    setIsBat('none');
  }

  // Fake Enviar - Função para voltar a tela inicial
  function voltar() {
    setIsBat('');
  }

  return (
    <>
    <View style={[styles.container, {display: isBat ? "none" : "flex" }]}>
      <Image source={batimg} style={{resizeMode: 'contain',height: 300}}></Image>

      <TouchableOpacity onPress={ativar} style={styles.button}>
        <Text style={styles.textBt}>Ativar Bat Sinal</Text>
      </TouchableOpacity>

    </View>

    <ScrollView style={[styles.form, {display: isBat ? "flex" : "none" }]}>
      <View style={styles.batlogo}>
        <Image source={batimg} style={{resizeMode: 'contain', height: 80}}/>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput placeholder='Digite seu nome' style={[styles.input, {height: 40}]}/>
        <Text style={styles.label}>Telefone</Text>
        <TextInput placeholder='(XX) XXXXX-XXXX' style={[styles.input, {height: 40}]}/>
        <Text style={styles.label}>Localização</Text>
        <TextInput placeholder='Sua Localização Atual' style={[styles.input, {height: 100}]}/>
        <Text style={styles.label}>Observações</Text>
        <TextInput placeholder='Descreva mais sobre' style={[styles.input, {height: 100}]}/>
        <TouchableOpacity onPress={voltar} style={styles.button}>
        <Text style={styles.textBt}>Enviar</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
    </>
  );
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    display: 'none',
  },
  batlogo: {
    width: '100%',
    height: 100,
    padding: 30,
    marginTop: 20,
    alignItems: 'flex-end',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    borderWidth: 1,
  },
  label: {
    width: '80%',
    textAlign: 'left',
    marginBottom: 5,
    color: '#000',
  },
  button: {
    backgroundColor: '#424242',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});