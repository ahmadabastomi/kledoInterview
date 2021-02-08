import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { ICTumlbr } from '../../assets'

const SplashPage = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomePage')
        }, 3000);
    }, [])
    return (
        <View style={styles.pages}>
            <StatusBar hidden={true} />
            <ICTumlbr style={styles.iconStyle} />
        </View>
    )
}

export default SplashPage

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        width: 50,
        height: 50,
    }
})
