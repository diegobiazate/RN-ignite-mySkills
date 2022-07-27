import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Platform } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills([...mySkills, newSkill]);
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Diego</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>
      
      <Text style={[styles.title, { marginVertical: 45 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard skill={skill}/>
        ))
      }
      
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
  
});