import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Expo from 'expo';

const JerryWav = './assests/Jerry1.wav';
const WadeWav = './assests/Wade1.wav';

const JerryPNG = './assests/Jerry1.png';
const WadePNG = './assests/Wade1.png';

export default class App extends React.Component {

  async playSound(name){
    const soundObject = new Expo.Audio.Sound();
    try {
      if(name === 'Jerry'){
        await soundObject.loadAsync(require('./assests/Jerry1.wav'));
      } else if(name === 'Wade'){
        await soundObject.loadAsync(require('./assests/Wade1.wav'));
      } else if(name === 'Scotty'){
        await soundObject.loadAsync(require('./assests/Scotty.wav'));
      }
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
          onPress={() => this.playSound('Jerry')}
        >
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./assests/Jerry1.png')}
          />
        </TouchableOpacity>
        <View style={{width: 10}}/>
        <TouchableOpacity
          onPress={() => this.playSound('Wade')}
        >
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./assests/Wade1.png')}
          />
        </TouchableOpacity>
        <View style={{width: 10}}/>
        <TouchableOpacity
          onPress={() => this.playSound('Scotty')}
        >
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={require('./assests/Scotty.png')}
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
    padding: 30,
    flexDirection: 'row'
  },
});
