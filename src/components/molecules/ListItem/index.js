import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ICRightArrow } from '../../../assets'

const ListItem = ({ title, actionEdit, isActive }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textItem(isActive)}>{title}</Text>
            <View style={styles.nextButton}>
                <TouchableWithoutFeedback onPress={actionEdit}>
                    <ICRightArrow />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgrey',
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    textItem: (isActive) =>({
        fontSize: 16,
        color: isActive === 1? 'blue': 'black'
    }),
    nextButton: {
        marginLeft: 'auto',
    }
})
