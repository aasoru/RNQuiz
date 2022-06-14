import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import { DefaultTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //primary: 'blue',
    //accent: 'yellow',
    //background: ''
    //text: ''
  },
};

export default function App() {
  /*const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('config');*/
  return (
    <PaperProvider theme={theme}>
      {/*<Appbar.Header theme={theme}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Quiz!" subtitle="What a Quiz!" />
        <Appbar.Action icon="cog" onPress={_handleMore} />
      </Appbar.Header>*/}
      <MyStack style={styles.container} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});
