/* 
  Developed by: Mohammed SalmanKhan M A
  Developed date: 28/Nov/2020
  Button.js: Holds the buttons design and touch operation
*/


import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { styles } from '../styles/Styles';

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
