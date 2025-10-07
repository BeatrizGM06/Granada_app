import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import globalStyles from './styles/globalstyles'
import { Image, ImageBackground } from 'expo-image'
import { ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import Temas from './themes/Temas'

export default function App() {
  const tema = useColorScheme()=="light"?Temas.CLARO:Temas.OSCURO;

  useFonts({
    "bebasNeue":require("./assets/BebasNeue-Regular.ttf")
  });

  return (
    <View style={[globalStyles.contenedorPrincipal, {backgroundColor: tema.colorFondo}]}>
      <ScrollView>
        <Image source={tema.logo} contentFit='contain' style={[{width:"100%",height:250}]}></Image>
        
        <View style={[globalStyles.contenedorSecundario]}>
          <Text style={[globalStyles.titulo,{color:tema.colorTitulo}]}>¿Qué hacer en Granada?</Text>
          <ScrollView>
            <ScrollView horizontal={true}>
              <Image source={require("./assets/actividad1.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad2.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad3.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad4.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
              <Image source={require("./assets/actividad5.jpg")} contentFit='contain' style={[globalStyles.fotoCarrusel]}/>
            </ScrollView>
            
            <Text style={[globalStyles.titulo,{color:tema.colorTitulo}]}>Las mejores rutas</Text>
            <ImageBackground source={require("./assets/mejores1.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:tema.colorTextoFoto}]}>Albaicín</Text>
            </ImageBackground>
            <ImageBackground source={require("./assets/mejores2.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:tema.colorTextoFoto}]}>Sacromonte</Text>
            </ImageBackground>
            <ImageBackground source={require("./assets/mejores3.jpg")} contentFit='contain' style={[globalStyles.fotoRuta]}>
              <Text style={[globalStyles.textoFoto,{color:tema.colorTextoFoto}]}>El centro</Text>
            </ImageBackground>

            <Text style={[globalStyles.titulo,{color:tema.colorTitulo}]}>Los mejores alojamientos</Text>
            <View style={[globalStyles.contenedorFotosAlojamiento]}>
              <View style={[globalStyles.contenedorAlojamiento]}>
                <Image source={require("./assets/alojamiento1.jpg")} style={[globalStyles.fotoAlojamiento]} contentFit='cover'></Image>
              </View>
              <View style={[globalStyles.contenedorAlojamiento]}>
                <Image source={require("./assets/alojamiento2.jpg")} style={[globalStyles.fotoAlojamiento]} contentFit='cover'></Image>
              </View>
            </View>
            <View style={[globalStyles.contenedorFotosAlojamiento]}>
              <View style={[globalStyles.contenedorAlojamiento]}>
                <Image source={require("./assets/alojamiento3.jpg")} style={[globalStyles.fotoAlojamiento]} contentFit='cover'></Image>
              </View>
              <View style={[globalStyles.contenedorAlojamiento]}>
                <Image source={require("./assets/alojamiento4.jpg")} style={[globalStyles.fotoAlojamiento]} contentFit='cover'></Image>
              </View>
            </View>
            
          </ScrollView>

          
          
        </View>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})