import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, buttonText }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}> {buttonText} </Text>
    </TouchableOpacity>
  );
};


const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#007aff',
    borderWidth: 1
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
