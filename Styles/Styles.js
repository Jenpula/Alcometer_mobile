import { StyleSheet } from "react-native";


export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: 'white'
          
    },
    
    textInput: {
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        backgroundColor: 'white',
        textAlign: 'center'
       
    },

    label: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        alignSelf: 'center',
       
    },
    NumericInput: {
        textAlign: 'center',
        alignSelf: 'center',
        textColor: 'white',
        borderRadius: 10
      
    },
   
    result:{
        color: '#2d2d2d',
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'center',
        padding: 10
    },
    header: {
        fontSize: 35,
       padding: 40,
       margin: 20,
       alignSelf: 'center',
       color: '#4aaac8'

    },
  
    radiostyle: {
        padding: 5,
        alignSelf: 'center',
        color: 'black'
        
    },
    button: {
        color: 'white',
        backgroundColor: '#4aaac8',
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        fontWeight: 'bold'
    },

});

export const darkStyles = StyleSheet.create({

 container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#2099b4',
          
    },
    
    textInput: {
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'white'
       
    },

    label: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        alignSelf: 'center',
        color: 'white'
       
    },
    NumericInput: {
        textAlign: 'center',
        alignSelf: 'center',
        textColor: 'white',
        borderRadius: 10, 
        itemSelf: 'center',
        color: 'white'
      
    },
   
    result:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'center',
        padding: 10
    },
    header: {
        fontSize: 35,
       padding: 40,
       margin: 20,
       alignSelf: 'center',
       color: 'white'

    },
  
    radiostyle: {
        padding: 5,
        alignSelf: 'center',
        color: 'white'
        
    },
    button: {
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        fontWeight: 'bold'
    },

});


  
