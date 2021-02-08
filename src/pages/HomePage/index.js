import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux'
import { Header, ListItem } from '../../components'
import { getNewsData } from '../../redux/action'

const HomePage = ({navigation}) => {
    useEffect(() => {
        // getNewsData({ page: 1 })
    }, [])

    return (
        <View style={styles.pages}>
            <Header title="Pembayaran" onHome={true} />
            <View style={styles.container}>
                <ListItem />
            </View>
            <FloatingAction
            animated={false}
            showBackground={false}
            onPressMain={() => navigation.navigate('AddPayment')}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    data: state.news.data,
    isLoading: state.news.isLoading
})

const mapDispatchToProps = dispatch => ({
    getNewsData: data => dispatch(getNewsData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 16
    },
    container: {
        marginTop: 20
    },
    contentLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
