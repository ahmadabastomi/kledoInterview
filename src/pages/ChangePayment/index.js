import React, {
    useState,
    useEffect
} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../components'
import { getTransaction, updateTransaction } from '../../redux/action'

const ChangePayment = ({
    navigation,
    route,
    getTransaction,
    isLoading,
    isError,
    dataTransaction,
    updateTransaction
}) => {
    const [name, setName] = useState(``)

    useEffect(() => {
        getTransaction({
            id: route.params.id
        })
    }, [])

    useEffect(() => {
        setName(dataTransaction.name)
    }, [dataTransaction])

    const handleChangeName = (value) => {
        setName(value)
    }

    const actionUpdateTransaction = async () => {
        await updateTransaction({
            payload: {
                id: route.params.id,
                data: { name }
            },
            navigation: navigation
        })
    }
    return (
        <View style={styles.pages}>
            <Header title="Ubah Pembayan" onHome={false} actionBack={() => navigation.goBack()} />
            { isLoading ?
                <View style={styles.contentLoading}>
                    <ActivityIndicator size={50} color="blue" />
                </View>
                :
                <View style={styles.flex}>
                    <View style={styles.content}>
                        <Text style={styles.label}>Nama</Text>
                        <TextInput style={styles.textInput}
                            value={name}
                            onChangeText={handleChangeName}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={actionUpdateTransaction}>
                        <Text style={styles.labelButton}>Simpan</Text>
                    </TouchableOpacity>
                </View>}
        </View>
    )
}

const mapStateToProps = state => ({
    dataTransaction: state.transactions.dataTransaction,
    isLoading: state.transactions.isLoading,
    isError: state.transactions.isError
})

const mapDispatchToProps = dispatch => ({
    getTransaction: data => dispatch(getTransaction(data)),
    updateTransaction: data => dispatch(updateTransaction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePayment)

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 16
    },
    content: {
        marginTop: 20
    },
    label: {
        fontSize: 14,
        marginVertical: 10
    },
    textInput: {
        borderWidth: 0.5,
        borderRadius: 8,
        paddingLeft: 10
    },
    button: {
        marginTop: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'blue',
        borderRadius: 8,
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    flex: {
        flex: 1
    },
    contentLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
