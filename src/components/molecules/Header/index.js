import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { ICArrowBack, ICFilter } from '../../../assets'

const Header = ({ title, actionBack, onHome }) => {
    return (
        <View style={styles.container}>
            {!onHome && <TouchableWithoutFeedback onPress={actionBack != null ? actionBack : null}>
                <ICArrowBack />
            </TouchableWithoutFeedback>}
            <Text style={styles.titleHeader}>{title}</Text>
            { onHome && <TouchableWithoutFeedback>
                <View style={styles.contentFilter}>
                    <ICFilter />
                </View>
            </TouchableWithoutFeedback>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        display: 'flex',
        marginHorizontal: 0,
    },
    titleHeader: {
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    contentFilter: {
        borderWidth: 0.5,
        borderRadius: 8
    }
})
