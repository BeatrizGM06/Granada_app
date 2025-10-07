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
})

export default globalStyles