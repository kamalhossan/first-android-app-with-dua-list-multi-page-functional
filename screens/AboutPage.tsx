import {View, Text, StyleSheet} from 'react-native';

export default function AboutScreen() {
  const currentYear = new Date().getFullYear();
  return (
    <View style={styles.homeScreen}>
      <View style={styles.developBy}>
        <Text style={styles.title}>দৈনদিন এর দোয়া</Text>
        <Text style={styles.subTitle}>Developed By:</Text>
        <Text style={styles.subTitle}>Kamal Hossan</Text>
      </View>
      <View style={styles.copyright}>
        <Text style={styles.subTitle}>Copyright: @{currentYear}</Text>
        <Text style={styles.subTitle}>Version 1</Text>
      </View>
      <View style={styles.whyAds}>
        <Text style={styles.description}>
          Expo Go provides a quick way to get started with your app development.
          It comes with a pre-configured set of libraries known as the Expo SDK.
          This makes experimentation much faster and brings the mobile
          development experience much closer to the web development experience.
        </Text>
      </View>
      <View style={styles.whyAds}>
        <Text style={styles.description}>
          Expo Go provides a quick way to get started with your app development.
          It comes with a pre-configured set of libraries known as the Expo SDK.
          This makes experimentation much faster and brings the mobile
          development experience much closer to the web development experience.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingVertical: 30,
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
  developBy: {},
  copyright: {},
  whyAds: {
    width: '95%',
    flexDirection: 'column',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    padding: 15,
    margin: 10,
  },
  description: {
    color: 'black',
    textAlign: 'left',
    fontSize: 16,
  },
});
