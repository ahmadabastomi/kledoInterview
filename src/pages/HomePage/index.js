import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getNewsData } from '../../redux/action'

const HomePage = ({
    isLoading,
    data,
    getNewsData
}) => {
    useEffect(() => {
        getNewsData({ page: 1 })
    }, [])

    return (
        <View style={styles.pages}>
            {
                isLoading ?
                    <View style={styles.contentLoading}>
                        <ActivityIndicator size={50} color='red'/>
                    </View>
                    :
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>
            }
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
        padding: 30
    },
    contentLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
