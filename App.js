import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, ScrollView, StyleSheet, Text, View, Switch, ImageBackground} from 'react-native';
import { useState } from 'react';
import Styles from './Styles/Styles.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';


export default function App() {

  const [hours,setHours] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false);
  

  const color = isOn ? Styles.darkColor : Styles.lightColor;

  function calculate() {

    const time = hours * 1
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
    if(weight === 0) {
      alert("Set weight!");
    }
    if(alcohol < 0 ) {
      setResult(0);
    } else {
      setResult(alcohol);
    }

  }
 
  return (
    <ScrollView style={color}>
    <View style={Styles.container}>
      <Switch
        value={isOn}
        onValueChange= {newValue => setIsOn(newValue)}
        />
     
      <Text style={Styles.header}>Alcometer</Text>
      <Text style={Styles.label}>Weight:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={weight}
        onChangeText={v => setWeight(parseInt(v))}
        style={Styles.textInput}
      />
      <Text style={Styles.label}>Bottles</Text>
        <NumericInput
        value={bottles} 
        minValue={0} 
        onChange={e => setBottles(e)}/>

      <Text style={Styles.label}>Hours</Text>
        <NumericInput
        style={Styles.nInput}
        value={hours}
        minValue={0} 
        onChange={(e) => {setHours(e)}}/>

      <RadioButton.Group value={gender} onValueChange={newValue => setGender(newValue)}>
      <View style={Styles.radiostyle}>
        <RadioButton value='female'/>
        <Text>Female</Text>
      </View>
      <View style={Styles.radiostyle}>
        <RadioButton value='male'/>
        <Text>Male</Text>
      </View>
      </RadioButton.Group>

      <Button style={Styles.button} title='Calculate' onPress={calculate}></Button>
      <Text style={Styles.result}>{result.toFixed(2)}</Text>
      </View>
     
    </ScrollView>
  );
 
}


