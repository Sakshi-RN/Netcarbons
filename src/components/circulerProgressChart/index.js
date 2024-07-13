import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularPicker from 'react-native-circular-picker';
import { Colors } from '../../theme/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default function App() {
  const [price, setPrice] = useState(0);
  const handleChange = (v) => {
    setPrice((v * 20).toFixed(0));

  };

  return (
    <View style={styles.container}>
      <CircularPicker
        size={300}
        gradients={{
          0: ['#67bf73', 'white'],
          15: ['#67bf73', '#67bf73'],
          40: ['#67bf73', '#67bf73'],
          70: ['#67bf73', '#67bf73'],
        }}
        strokeWidth={32}
        backgroundColor={"#d65a38"}
        onChange={handleChange}
      >
        <>
          <Text style={styles.priceText}>INR ₹{price}</Text>
          <Text style={styles.tonsText}>0 Tons</Text>
        </>
      </CircularPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 10
  },
  priceText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: responsiveFontSize(4),
    marginBottom: 7,
    color: Colors.DARKRED,
  },
  tonsText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#67bf73',
    fontWeight: '500',
  },
});
