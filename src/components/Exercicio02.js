import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio02 = () => {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count+1)
    }
    const dim = () => {
        setCount(count-1)
    }

    return (
        <View>
            <Button title='+' onPress={add}/>
            <Text>Contador de numeros: {count}</Text>
            <Button title='-' onPress={dim}/>
        </View>
    )   
}

export default Exercicio02