import React, {
    useState
} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../components'
import { addTransaction } from '../../redux/action'

const AddPayment = ({ navigation, addTransaction }) => {
    const [name, setName] = useState('')
    const handleChangeName = (value) => {
        setName(value)
    }
    const actionSaveTransaction = () => {
        addTransaction({
            payload: { data: { name } },
            navigation
        })
    }
    return (
        <View style={styles.pages}>
            <Header title="Tambah Pembayan" onHome={false} actionBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.label}>Nama</Text>
                <TextInput style={styles.textInput}
                    value={name}
                    onChangeText={handleChangeName}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={actionSaveTransaction}>
                <Text style={styles.labelButton}>Simpan</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    addTransaction: data => dispatch(addTransaction(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddPayment)

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
    }
})
