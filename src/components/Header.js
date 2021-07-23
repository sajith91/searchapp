import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <TextInput editable={false} value={props.title} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'lightgray',
    textAlign: 'center',
    height: 30,
    width: 200,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default Header;
