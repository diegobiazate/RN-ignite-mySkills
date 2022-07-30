import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, FlatList } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill(){
    setMySkills([...mySkills, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12){
      setGreetings('Good mornig!');
    }else if(currentHour >= 12 && currentHour < 18){
      setGreetings('Good afternoon!');
    }else{
      setGreetings('Good night!');
    }
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Diego</Text>
      <Text style={styles.greetings}>{greetings}</Text>

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

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item}/>
        )}
      />
      
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
  greetings:{
    color: '#FFF',
    marginTop: 7,
    fontSize: 15
  }
});