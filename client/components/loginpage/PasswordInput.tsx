import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
           <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.icon}
            >


        <Icon
         name={showPassword ? "eye-off" : "eye"}
          size={24}
         color="white"
              />
                </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
 marginVertical:30
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight:20,
    marginLeft:0,
    backgroundColor:'white'
  },
  icon: {
    padding: 10,

  },
});