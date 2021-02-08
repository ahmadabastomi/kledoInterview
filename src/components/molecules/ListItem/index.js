import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>List Item Component</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgrey',
        paddingVertical: 20,
        flexDirection: 'row'
    },
    textItem: {
        fontSize: 16
    }
})
