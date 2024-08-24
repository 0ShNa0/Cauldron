
import React from 'react';
import { Image,View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { PasswordInput} from '@/components/loginpage/PasswordInput';


export default function LoginPage() {
  const handleRegister = () => {

    console.log("Register as User");
  };

   const handleLogin = () => {

      console.log("Login as User");
    };

  return (
    <View style={styles.container}>
      <Image
            source={require('@/assets/images/login-image.png')}
            style={styles.image}
              resizeMode="contain"
          />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
      />
     <PasswordInput/>


 <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>



  <TouchableOpacity onPress={handleRegister} style={styles.button}>
         <Text style={styles.buttonText}>Register New Account</Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#deb887',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor:'white'

  },
   image: {
        width: '100%',
        height: 300,
        marginBottom: 20,
            borderRadius: 5,
    },

  button: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#8b4513',
    borderRadius: 8,
    margin:20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
