import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Title from "../components/title";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Button, useTheme } from "react-native-paper";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
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
        <Button
          theme={colors}
          //style={{ color: colors.primary }}
          mode="contained"
          icon="play"
          onPress={() => navigation.navigate("Quiz")}
        >
          Start!
        </Button>
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
  buttonText: { color: "white", fontWeight: "600", alignItems: "center" },
});
