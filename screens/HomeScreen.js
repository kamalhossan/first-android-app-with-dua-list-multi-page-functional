import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.homeScreen}>
      <View>
        {/* <Text style={{color: 'white'}}>Home screen page two</Text> */}
        {/* <Button
          title="Goto About"
          onPress={() => navigation.navigate('About')}
        /> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dua')}>
          <Text style={styles.btnText}>সকল দোয়া সমূহ দেখুন</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#7478F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 10,
  },
  btnText: {
    fontSize: 24,
    color: '#7478F5',
    fontWeight: '700',
  },
});
