import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, ScrollView, StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {lightStyles, darkStyles, Styles, radioButtonStyles} from './Styles/Styles.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {
  // State variables
  const [hours,setHours] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false);

   // Determine the current color theme based on the switch value
  const color = isOn ? darkStyles : lightStyles;

  // Calculate the estimated alcohol intake based on the input values
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

    if (!weight) {
      // If weight is not set, display alert
      return alert("Set weight!");
    }

    if(alcohol < 0 ) {
      // If alcohol intake is negative, set it to 0
      setResult(0);
    } else {
      setResult(alcohol);
    }
  }
 
  return (
    <ScrollView>
      <View style={color.container}>
        {/* Switch */}
        <Switch
          style={color.switch}
          value={isOn}
          onValueChange={newValue => setIsOn(newValue)}
          thumbColor='white'
          trackColor={{false:'#2099b4', true: 'white'}}
        />
        {/* Header */}
        <Text style={color.header}>Alcometer</Text>

        {/* Weight */}
        <Text style={color.label}>Weight:</Text>
        <TextInput 
          keyboardType='number-pad' 
          value={weight}
          onChangeText={v => setWeight(parseInt(v))}
          style={color.textInput}
        />
        
        {/* Bottles */}
        <Text style={color.label}>Bottles</Text>
        <View style={color.numericInput}>
          <NumericInput
            value={bottles} 
            minValue={0} 
            onChange={e => setBottles(e)}
          />
        </View>
  
        {/* Hours */}
        <Text style={color.label}>Hours</Text>
        <View style={color.numericInput}>
          <NumericInput
            value={hours}
            minValue={0} 
            onChange={(e) => {setHours(e)}}
          />
        </View>
        
        {/* Gender radiobuttons */}
        <RadioButton.Group value={gender} onValueChange={newValue => setGender(newValue)}>
          <View style={color.radiostyle}>
            <RadioButton value='female' uncheckedColor={radioButtonStyles.uncheckedRadioButton.color} color={radioButtonStyles.radioButton.color} />
            <Text style={color.gender}>Female</Text>
          </View>
          <View style={color.radiostyle}>
            <RadioButton value='male' uncheckedColor={radioButtonStyles.uncheckedRadioButton.color} color={radioButtonStyles.radioButton.color}/>
            <Text style={color.gender}>Male</Text>
          </View>
        </RadioButton.Group>
        
        {/* Calculations and result */}
        <TouchableOpacity onPress={calculate}>
          <Text style={color.button} title='Calculate'>Calculate</Text>
          <Text style={[color.result, (result <= 0.8) ? color.green : (result <= 1.5) ? color.yellow : color.red]}>{result.toFixed(2)}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

