import { StyleSheet, View } from "react-native";
import MyStack from "./navigation";
import tw from "./libs/tailwind";

export default function App() {
  /*const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('config');*/
  return (
    <View style={tw`w-full h-full`}>
      {/*<Appbar.Header theme={theme}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Quiz!" subtitle="What a Quiz!" />
        <Appbar.Action icon="cog" onPress={_handleMore} />
      </Appbar.Header>*/}
      <MyStack style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
