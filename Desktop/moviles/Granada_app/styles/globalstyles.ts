import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  contenedorPrincipal:{
    flex:1,
    flexDirection:'column',
  },
  contenedorSecundario:{
    flex:1,
    marginHorizontal:10,
    padding:5,
  },
  titulo:{
    fontSize:24,
    fontWeight:"bold",
    marginVertical:20,
  },
  fotoCarrusel:{
    width:250,
    height:300,
    marginRight:10,
    borderRadius:10,
  },
  fotoRuta:{
    width:'100%',
    height:200,
    marginVertical:5,
  },
  textoFoto:{
    margin:"auto",
    fontSize:48,
    fontFamily:"bebasNeue",
    backgroundColor:"rgba(0, 0, 0, 0.01)",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})

export default globalStyles