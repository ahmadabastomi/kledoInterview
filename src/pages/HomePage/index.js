import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux'
import { Header, ListItem } from '../../components'
import { getListTransactions } from '../../redux/action'

const HomePage = ({
    navigation,
    isLoading,
    isError,
    dataTransactions,
    getListTransactions }) => {
    useEffect(() => {
        getListTransactions()
    }, [])

    return (
        <View style={styles.pages}>
            {isLoading ?
                <View style={styles.contentLoading}>
                    <ActivityIndicator size={50} color="blue" />
                </View>
                :
                <View style={styles.flex}>
                    <Header title="Pembayaran" onHome={true} />
                    <View style={styles.container}>
                        <FlatList
                            data={dataTransactions}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <ListItem 
                                title={item.name}
                                actionEdit={() => navigation.navigate('ChangePayment',{id: item.id})}
                                />
                            )}
                        />
                    </View>
                    <FloatingAction
                        animated={false}
                        showBackground={false}
                        onPressMain={() => navigation.navigate('AddPayment')}
                    />
                </View>}
        </View>
    )
}

const mapStateToProps = state => ({
    dataTransactions: state.transactions.dataTransactions,
    isLoading: state.transactions.isLoading,
    isError: state.transactions.isError
})

const mapDispatchToProps = dispatch => ({
    getListTransactions: () => dispatch(getListTransactions())
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
    },
    flex: {
        flex: 1
    }
})
