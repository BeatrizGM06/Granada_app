import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from './styles/globalstyles'
import { Image, ImageBackground } from 'expo-image'
import { ScrollView } from 'react-native'
import { useFonts } from 'expo-font';

export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"

  useFonts({
    "bebasNeue":require("./assets/BebasNeue-Regular.ttf")
  });

  return (
    <View style={[globalStyles.contenedorPrincipal, {backgroundColor: COLOR_FONDO}]}>
      <ScrollView>
        <Image source={require("./assets/granada_light.jpg")} contentFit='contain' style={[{width:"100%",height:250}]}></Image>
        
        <View style={[globalStyles.contenedorSecundario]}>
          <Text style={[globalStyles.titulo,{color:COLOR_TITULO}]}>¿Qué hacer en Granada?</Text>
          <ScrollView>
            <ScrollView horizontal={true}>
              <Image source={require("./assets/actividad1.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad2.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad3.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad4.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad5.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
            </ScrollView>
            
            <Text style={[globalStyles.titulo,{color:COLOR_TITULO}]}>Las mejores rutas</Text>
            <ImageBackground source={require("./assets/mejores1.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:COLOR_TEXTO_FOTO}]}>Albaicín</Text>
            </ImageBackground>
            <ImageBackground source={require("./assets/mejores2.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:COLOR_TEXTO_FOTO}]}>Sacromonte</Text>
            </ImageBackground>
            <ImageBackground source={require("./assets/mejores3.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:COLOR_TEXTO_FOTO}]}>El centro</Text>
            </ImageBackground>

          </ScrollView>

          
          
        </View>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})