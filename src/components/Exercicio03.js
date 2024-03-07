import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Exercicio03 = () => {
    const [text, setText]  = useState('')
    return (
        <View>
            <TextInput value={text} onChangeText={setText} placeholder='Escreva algo...'/>
            <Text>Texto: {text}</Text>
        </View>
    )
}


export default Exercicio03