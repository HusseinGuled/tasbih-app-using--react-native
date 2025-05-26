import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "استغفر ألله",
    "سبحان ألله",
    "الحمدلله",
    "ألله اكبر",
    "لا حول ولا قوة إلا بالله",
    "أللهم صلي وسلم وبارك  علي محمد وعلي أل محمد"
  ];

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
    setCounter(0); // Reset counter when a new option is selected
  };

  useEffect(() => {
    if (counter === 33) {
      Toast.show({
        type: 'info',
        text2: 'أحسنتَ🎉',
        position: 'top'
      });
    }
  }, [counter]);

  return (
    <>
      <ImageBackground
        source={require('./assets/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Do tasbih</Text>
            <Picker
              selectedValue={selectedOption}
              style={styles.picker}
              onValueChange={(itemValue) => handleOptionChange(itemValue)}
            >
              {options.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
            <Text style={styles.counter}>{counter}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setCounter(counter + 1)}>
                <Icon name="plus" size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => setCounter(0)}>
                <Icon name="refresh" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Toast Component - Required to show toasts */}
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: "uppercase"
  },
  picker: {
    height: 30,
    width: "60%",
    marginBottom: 20,
    marginTop: 50
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  resetButton: {
    backgroundColor: '#ff0000',
  },
});
