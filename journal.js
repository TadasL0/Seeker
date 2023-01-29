import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Amplify from 'aws-amplify';
 
const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'SourceSansPro-Regular.ttf',
  },
});

const Journal = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('What\'s on your mind?');
  const [text, setText] = useState(''); // new state variable to store text input value

  // useEffect hook to retrieve text from AsyncStorage when component is rendered
  useEffect(() => {
    async function getText() {
      try {
        const textFromStorage = await AsyncStorage.getItem('@MyJournal:text');
        if (textFromStorage !== null) {
          setText(textFromStorage);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getText();
  }, []); // empty dependency array ensures that the effect only runs on initial render

  return (
    <View style={{ backgroundColor: 'black', opacity: isFocused ? 1 : 0.8 }}>
      <TextInput 
        spellCheck={false}
        autoCorrect={false} //change autoCorrect to false
        underlineColorAndroid={"white"}
        value={text} // set the value of the text input to the text state variable
        onChangeText={(newText) => setText(newText)} // update the text state variable when text input changes
        placeholder={placeholder}
        placeholderTextColor={"white"}
        selectionColor={"white"}    
        style={[
          styles.customFont, 
          {
            height: 700,
            padding: 20,
            backgroundColor: '#212123',
            fontSize: 18,
            color: 'white',
            fontFamily: 'SourceSansPro',
          }
        ]}
        multiline={true}
        textAlignVertical={'top'}
        onFocus={() => {
            setIsFocused(true);
            setPlaceholder('');
        }}
        onBlur={async () => {
          setIsFocused(false);
          setPlaceholder('What\'s on your mind?');
          try {
            await AsyncStorage.setItem('@MyJournal:text', text);
          } catch (error) {
            console.error(error);
          }
        }}
    />
  </View>
);
};

export default Journal;
