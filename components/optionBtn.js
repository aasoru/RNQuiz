import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useEffect } from "react";

const OptionBtn = ({ onButtonPressed, option, correct, disabled }) => {
  useEffect(() => {}, [option]);
  const onPressed = (correct) => onButtonPressed(correct);

  return (
    <TouchableOpacity
      style={
        !disabled
          ? styles.optionButton
          : correct
          ? styles.optionButtonSuccess
          : styles.optionButtonMistake
      }
      correct={correct}
      onPress={(e) => !disabled && onPressed(correct)}
    >
      <Text>{option}</Text>
    </TouchableOpacity>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  optionButtonSuccess: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#00CE67",
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  optionButtonMistake: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#C50101",
    paddingHorizontal: 12,
    borderRadius: 4,
  },
});
