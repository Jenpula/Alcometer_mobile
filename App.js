import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, ScrollView, StyleSheet, Text, View, Switch, ImageBackground} from 'react-native';
import { useState } from 'react';
import {Styles, SpecialStyles} from './Styles/Styles.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';


export default function App() {

  const [hours,setHours] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false);
  


 const color = isOn ? SpecialStyles.container : Styles.container

  function calculate() {

    const litres = bottles * 0.33;
    const burning = weight / 10;
    const grams = litres * 8 * 4.5
    const left = grams - (burning * time)
    let alcohol = 0;

    if(gender === 'male') {
      alcohol = left / (weight * 0.7);
    } else {
      alcohol = left / (weight * 0.6);
    }
    if(alcohol < 0 ) {
      setResult(0);
    } else {
      setResult(alcohol);
    }

  }
 
  return (
    <ScrollView>
    <View style={Styles.container}>
      <Switch
        value={isOn}
        onValueChange= {newValue => setIsOn(newValue)}
       
        />
      </View>
    <View style={Styles.container}>
      <Text style={Styles.header}>Alcometer</Text>
      <Text style={Styles.label}>Weight:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={weight}
        style={Styles.textInput}
        onChange={v => setWeight(v)}
      />
      <Text style={Styles.label}>Bottles</Text>
        <NumericInput 
        value={bottles} 
        minValue={0} 
        onChange={e => setBottles(e)}/>

      <Text style={Styles.label}>Hours</Text>
        <NumericInput 
        value={hours} 
        minValue={0} 
        onChange={e => setHours(e)}/>

      <RadioButton.Group value={gender} onValueChange={newValue => setGender(newValue)}>
      <View style={Styles.radiostyle}>
        <RadioButton value='Female'/>
        <Text>Female</Text>
      </View>
      <View style={Styles.radiostyle}>
        <RadioButton value='Male'/>
        <Text>Male</Text>
      </View>
      </RadioButton.Group>

      <Button style={Styles.button} title='Calculate' onClick={calculate}></Button>
      <Text>{result}</Text>
    </View>
    </ScrollView>
  );
 
}


