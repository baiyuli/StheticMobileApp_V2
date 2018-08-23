import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const MyButton = ({ onPress, children, pwChanged, idChanged }) => {
  const { buttonStyle, textStyle2, textStyle } = styles;

  if (pwChanged && idChanged){
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Animatable.Text animation='fadeIn'
        style={textStyle}
      >
        {children}
      </Animatable.Text>
    </TouchableOpacity>
  );
  }

  return (
    
    <TouchableOpacity disabled={true} onPress={onPress} style={buttonStyle}>
      <Text 
        style={textStyle2}
      >
        {children}
      </Text>
    </TouchableOpacity>

  );

};

const styles = {
  textStyle: {
    fontFamily: 'Helvetica Neue',
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffcd00',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffcd00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle2: {
    fontFamily: 'Helvetica Neue',
    alignSelf: 'center',
    color: '#b18e00',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default MyButton;
