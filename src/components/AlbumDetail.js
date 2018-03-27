// Import libraries
import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerContainerStyle,
    textTitleStyle,
    thumbnailContainerStyle,
    imageStyle
   } = styles;

   return (
     <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContainerStyle}>
            <Text style={textTitleStyle}>{ title }</Text>
            <Text>{ artist }</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)} buttonText={'Buy Now'} />
        </CardSection>
     </Card>
   );
};

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textTitleStyle: {
    fontSize: 18
  },
  textContainer: {

  },
  imageStyle: {
    height: 300,
    flex: 2
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 60,
    height: 60
  }
};
// const styles = {
//   viewStyle: {
//     height: 170,
//     paddingTop: 15,
//   },
//   textStyle: {
//      fontSize: 20,
//      color: '#000'
//    }
// };

export default AlbumDetail;
