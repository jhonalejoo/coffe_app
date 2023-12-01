import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const CoffeeItem = ({ item, index, action }) => {
    return (
        <View index={index} style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <FastImage source={{ uri: item.image }} style={styles.image} />
                <View style={styles.containerText}>
                    <Text style={styles.textTitle}>{item.name}</Text>
                    <TouchableOpacity onPress={()=>action()} style={styles.button} onPress={() => action()}>
                        <Text style={styles.textButton}>Agregar comentario</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CoffeeItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        borderColor: '#F6F6F6',
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    button:{
       backgroundColor:'#674334',
       marginTop: 10,
       borderRadius:5,
       width:100,
       height:25,
       alignItems:'center',
       justifyContent:'center'
    },
    textButton:{
        color:'white',
        fontSize:10
    },
    containerText: {
        marginLeft: 20
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    }
})