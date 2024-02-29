import { View, Text } from 'react-native'
import React from 'react'

const Exercicio04 = () => {
    const list = ["George", "Beatriz"]

    return (
        <View>
            {
                list.map((name, index)=>(
                    <Text key={index}>{name}</Text>
                ))
            }
        </View>
    )
}

export default Exercicio04