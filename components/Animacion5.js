import React, {useState} from 'react';
import { StyleSheet, Text, Animated, View, TouchableNativeFeedback } from 'react-native';

const Animacion5 = () => {

    const [ animacion] = useState(new Animated.Value(1));

    const precionarBtn = () =>{
        Animated.spring(animacion,{
            toValue: .8
        }).start();
    }

    const soltarBtn =() =>{
        Animated.spring(animacion,{
            toValue: 1,
            friction: 4, // mayor rebote
            tension: 10
        }).start();
    }

    const estiloAnimacion ={
        transform: [{scale: animacion}]
    }
  return (
<View  style={styles.contenedor}> 
    <TouchableNativeFeedback
        onPressIn={()=> precionarBtn()}
        onPressOut={() => soltarBtn()}
    
    >
        <Animated.View
        style={[styles.btn, estiloAnimacion]}
        >
            <Text
            style={styles.texto}
            >iniciar Sesión</Text>
        </Animated.View>
    </TouchableNativeFeedback>
</View>
  )
};

const styles = StyleSheet.create({
    contenedor:{
     alignItems: 'center',
     marginTop: 10
    },
    texto:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    },
    btn:{
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
export default Animacion5;
