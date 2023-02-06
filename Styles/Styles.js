import { StyleSheet } from "react-native";


export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
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
        color: 'black'
        
    },
    button: {
        color: 'white',
        backgroundColor: '#4aaac8',
        padding: 10,
        margin: 10,
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    green: {
        color: 'green'
    },
    yellow: {
        color: '#e6de0e'
    },
    red: {
        color: 'red'
    }
});

export const darkStyles = StyleSheet.create({

 container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
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
       
        color: 'white'
       
    },
    NumericInput: {
        textAlign: 'center',
        textColor: 'white',
        borderRadius: 10, 
        color: 'white'
      
    },
   
    result:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold",
        padding: 10
    },
    header: {
        fontSize: 35,
       padding: 40,
       margin: 20,
       alignSelf: 'center',
       color: 'white'

    },
      
    button: {
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        fontWeight: 'bold'
    },

    radiostyle: {
        padding: 5,
        color: 'black',
        
    },
    switch: {
        alignSelf: 'stretch'
    },
    green: {
        color: 'green'
    },
    yellow: {
        color: '#e6de0e'
    },
    red: {
        color: 'red'
    }
});


  
