import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function LayerButton(props) {

  const onDonePress = (props) =>{
    // props.setLayer(props.title)
    // console.log(props.layer)

  }

  return (
    <TouchableOpacity style={styles.container} onPress={ ()=> props.setLayer( props.title ) }>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.joinText}>Join</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderRadius: 7,
        borderColor:'#A5DC7Aff',  
        borderWidth:2.4,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 15,   
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 10,
      },
      joinText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
      },
})
