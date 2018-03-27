// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
   return (
     <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
     </View>
   );
};


const styles = {
  viewStyle: {
    backgroundColor: '#28aaf4',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
     fontSize: 20,
     color: '#FFFFFF'
   }
};
// make component available to other part of the App
export default Header;
