import {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import data from '../data.json';

export default function DuaDetails({route, navigation}) {
  const {postId, data, title} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({title: title});
  }, [navigation, title]);

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    marginHorizontal: 'auto',
    padding: 10,
  },
  content: {
    fontSize: 16,
    color: 'black',
  },
});
