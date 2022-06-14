import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';

const Title = ({titleText}) => {
  return (
    <View style={ tw`mb-5` }>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '600'
  }
})