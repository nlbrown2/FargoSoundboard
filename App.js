import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {

  async playSound(){
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assests/Jerry1.wav'));
      await soundObject.playAsync();
      console.log("done playing");
    } catch(error) {
      console.log(error);
      alert("Error in playing the sound!");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.playSound()}
        >
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./assests/Jerry1.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30
  },
});
