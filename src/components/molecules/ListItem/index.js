import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ICRightArrow } from '../../../assets'

const ListItem = ({ title, actionEdit }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{title}</Text>
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
    },
    textItem: {
        fontSize: 16
    },
    nextButton: {
        marginLeft: 'auto',
    }
})
