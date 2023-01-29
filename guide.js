import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Amplify from 'aws-amplify';
import { Chatbot } from 'aws-amplify-react-native';

/*

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:9a19180c-13d6-4546-bc68-67ea43ee1eed',
    region: 'us-east-1',
    userPoolId: 'us-east-1_8sIuGaFAR',
    userPoolWebClientId: '6mbevvmami97g2j7elkojcgv4s',
  },
  Interactions: {
    bots: {
      "whoami": {
        "name": "whoami",
        "alias": "TestBotAlias",
        "region": "us-east-1",
      },
    },
  },
});

*/

class MyChatbot extends React.Component {
  render() {
    return (
      <View style={styles.chatContainer}>
        <Chatbot
          botName="whoami"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1F1E1F',
    padding: 20
  },
});

export { MyChatbot };
