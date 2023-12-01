import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const CommentItem = ({ item, index, action }) => {
    return (
        <View index={index} style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <View style={styles.containerText}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textTitle}>Nombre: </Text>
                        <Text style={styles.subTitle}>{item.name_user}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textTitle}>Correo: </Text>
                        <Text style={styles.subTitle}>{item.email_user}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textTitle}>Telefono: </Text>
                        <Text style={styles.subTitle}>{item.phone_user}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textTitle}>Opinion: </Text>
                        <Text style={styles.subTitle}>{item.comment}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textTitle}>Cafe: </Text>
                        <Text style={styles.subTitle}>{item.coffee.name}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => action()} style={styles.button} onPress={() => action()}>
                    <Text style={styles.textButton}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CommentItem

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
    button: {
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 5,
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 10
    },
    containerText: {
        marginLeft: 20
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color:'black'
    },
    subTitle: {
        fontSize: 15,
        color:'black'
    },
})