import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

const styles = StyleSheet.create({
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
  },
});

interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({ title, ...rest } : ButtonProps) {
  return(
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}