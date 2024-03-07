import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import data from '../data.json';
// import {FlatList} from 'react-native-gesture-handler';
import {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DuaDetails from '../component/DuaDetails';
import DuaList from './DuaList';

export default function DuaTab({navigation}) {
  const Stack = createNativeStackNavigator();
  const [selectedId, setSelectedId] = useState();
  let counter = 0;

  // Function to navigate to individual post page
  const navigateToPost = (postId, data, title) => {
    navigation.navigate('SingleItem', {postId, data, title});
  };

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={() => navigateToPost(item.id, item, item.title)}>
      <View style={styles.item}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    {
      counter++;
    }

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DuaList"
        component={DuaList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SingleItem" component={DuaDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  duaScreen: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 'auto',
  },
  flatList: {
    flexDirection: 'column',
    marginHorizontal: 'auto',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    shadowOpacity: 0.25,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
  },
  counter: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 4,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginRight: 10,
  },
  counterText: {
    color: 'white',
    fontSize: 22,
  },
  title: {
    fontSize: 32,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});
