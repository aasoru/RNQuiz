import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Title from "../components/title";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../libs/tailwind";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`justify-center flex-1`}>
      <View style={tw`p-5 w-full items-center`}>
        <Title titleText="QUIZ!" />
        {/*<View>
          <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/preview/education-quiz-3975777-3290981.png'}}
              style={styles.banner}
              resizeMode="contain"
          />
        </View>*/}

        <Icon.Button
          name="play"
          size={20}
          color="white"
          style={tw`btnBg`}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={tw`btnText`}>Start!</Text>
        </Icon.Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
});
