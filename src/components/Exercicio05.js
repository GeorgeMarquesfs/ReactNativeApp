import { View, StyleSheet } from "react-native";
import React from 'react'

const Exercicio05 = () => {
   return(
      <View style={styles.container}>
         <View style={[styles.box, {backgroundColor:'red'}]}></View>
         <View style={[styles.box, {backgroundColor:'black'}]}></View>
         <View style={[styles.box, {backgroundColor:'red'}]}></View>
         <View style={[styles.box, {backgroundColor:'black'}]}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   box:{
      height: 100,
      width: '100%'
   },
}

)

export default Exercicio05