import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from './styles/globalstyles'
import { ScrollView } from 'react-native/types_generated/index'
import { Image } from 'expo-image'

export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"
  return (
    <View style={[globalStyles.contenedorPrincipal, {backgroundColor: COLOR_FONDO}]}>
      <ScrollView>
        <Image source={".assets.granada.jpg"}></Image>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})