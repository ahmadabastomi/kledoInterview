import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux'
import { Header, ListItem } from '../../components'
import { getListTransactions, deleteTransaction,updateTransactionStatus } from '../../redux/action'
import { SwipeListView } from 'react-native-swipe-list-view'

const HomePage = ({
    navigation,
    isLoading,
    isError,
    dataTransactions,
    deleteTransaction,
    updateTransactionStatus,
    getListTransactions }) => {
    useEffect(() => {
        getListTransactions({
            name: ''
        })
    }, [])

    const actionDeleteTransaction = async (id) => {
        await deleteTransaction({ id })
        await getListTransactions({ name: '' })

    }

    const actionUpdateTransactionStatus = async (payload) => {
        await updateTransactionStatus(payload)
    }

    return (
        <View style={styles.pages}>
            {isLoading ?
                <View style={styles.contentLoading}>
                    <ActivityIndicator size={50} color="blue" />
                </View>
                :
                <View style={styles.flex}>
                    <Header title="Pembayaran" onHome={true}
                        actionFilter={() => navigation.navigate('FilterPayment')} />
                    <View style={styles.container}>
                        <SwipeListView
                            useFlatList={true}
                            keyExtractor={(item) => item.id.toString()}
                            data={dataTransactions}
                            renderItem={({ item }) => (
                                <ListItem
                                    title={item.name}
                                    isActive={item.is_active}
                                    actionEdit={() => navigation.navigate('ChangePayment', { id: item.id })}
                                />
                            )}
                            renderHiddenItem={({ item }) => (
                                <View style={styles.rowBack}>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft(item.is_active)]}
                                    onPress={() => actionUpdateTransactionStatus({
                                        id: item.id,
                                        status: item.is_active === 1 ? 'deactivate' : 'activate'
                                    })}>
                                        <Text style={styles.textButton}>{item.is_active === 1 ? 'Deactivate' : 'Activate'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}
                                        onPress={() => actionDeleteTransaction(item.id)}>
                                        <Text style={styles.textButton}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            leftOpenValue={150}
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
    getListTransactions: data => dispatch(getListTransactions(data)),
    deleteTransaction: data => dispatch(deleteTransaction(data)),
    updateTransactionStatus: data => dispatch(updateTransactionStatus(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white'
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
    },
    // rowBack: {
    //     alignItems: 'center',
    //     flex: 2,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // deleteButton: {
    //     backgroundColor: 'red',
    // },
    textButton: {
        color: 'white'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: (isActivate) => ({
        backgroundColor: isActivate === 1 ? 'green' : 'blue',
        left: 75,
    }),
    backRightBtnRight: {
        backgroundColor: 'red',
        left: 0,
    },
})
