import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';

const Animacion3 = () => {

    const [ animacion ]= useState(new Animated.Value(14))

    useEffect(() => {
     Animated.timing(
            animacion,{
                toValue: 40,// ; valor que llega
                duration: 500, // cabtidad de tiempo en llegar
                useNativeDriver: false
            }
            
     ).start(); // iniciar la animación
    }, [])

  return (
      <>
      <View>
             <Animated.Text style={[styles.texto, {fontSize: animacion}]}>Animación 3</Animated.Text>
      </View>

      </>
  )
};

const styles = StyleSheet.create({
    texto:{
      fontSize: 30,
      textAlign: 'center'
    }
  });
export default Animacion3;
