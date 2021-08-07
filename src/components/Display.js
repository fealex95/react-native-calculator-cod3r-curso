import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Display({ value }) {
    return (
        <View style={styles.display}>
            <Text
                style={styles.displayValue}
                numberOfLines={1}>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
        width: '100%'
    },

    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})