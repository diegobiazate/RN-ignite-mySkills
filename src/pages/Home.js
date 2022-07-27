import React from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from "react-native";

export function Home() {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Diego</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555'
      />

      <TouchableOpacity activeOpacity={.7} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>
        My Skills
      </Text>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title:{
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor:'#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button:{
    backgroundColor:'#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});