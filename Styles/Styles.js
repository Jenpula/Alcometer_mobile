import { StyleSheet } from "react-native";


export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'white',    
    },
    
    textInput: {
        padding: 5,
        borderWidth:1,
        borderColor: '#bbb',
        marginBottom: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        width: 250,
        fontSize: 15
    },

    numericInput: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 8,
        marginVertical: 5,
    },

    label: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
       
    },
   
    result: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        alignSelf: "center"
    },

    header: {
       fontSize: 35,
       padding: 40,
       margin: 20,
       alignSelf: 'center',
       color: 'coral',
       fontFamily: 'LatoRegular'
    },
  
    radiostyle: {
        padding: 5,
        alignItems: 'center'
    },

    button: {
        color: 'white',
        backgroundColor: 'coral',
        padding: 10,
        margin: 10,
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        fontWeight: 'bold'
    },

    switch: {
        alignSelf: 'stretch'
    },

    green: {
        color: 'green'
    },

    yellow: {
        color: '#d7d118'
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
        backgroundColor: '#242525',         
   },
  
    textInput: {
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        width: 250,
        fontSize: 15   
    },

    numericInput: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 8,
        marginVertical: 5,
        borderRadius: 10,
    },
   
    label: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        color: 'white'
       
    },
   
    result:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        alignSelf: 'center'
    },

    header: {
       fontSize: 35,
       padding: 40,
       margin: 20,
       alignSelf: 'center',
       color: 'white',
       fontFamily: 'LatoRegular'

    },

    gender: {
        color: 'white',
        
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
        fontWeight: 'bold',
    },

    radiostyle: {
        padding: 5,
        alignItems: 'center'
      
    },

    switch: {
        alignSelf: 'stretch'
    },

    green: {
        color: 'green'
    },

    yellow: {
        color: '#e9e22d'
    },
    
    red: {
        color: 'red'
    }
});

export const radioButtonStyles = StyleSheet.create({
    radioButton: {
      color: 'coral',
    },

    uncheckedRadioButton: {
      color: '#BDBDBD',
    }
  });
  
  
  




  
