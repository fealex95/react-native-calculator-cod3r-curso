import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export function Button({ onClick, label, double, triple, operation }) {

    const stylesButton = [styles.button]

    if (double) stylesButton.push(styles.buttonDouble);
    if (triple) stylesButton.push(styles.buttonTriple);
    if (operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={onClick}>
            <Text style={stylesButton}>
                {label}
            </Text>
        </TouchableHighlight >
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        color: '#000'
    },

    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff'
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})