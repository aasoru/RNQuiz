import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../libs/tailwind";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  const resultBanner =
    score > 10
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";
  return (
    <SafeAreaView
      style={(tw`bg-white h-full`, { justifyContent: "center", flex: 1 })}
    >
      <View style={tw`p-5 w-full items-center`}>
        <View>
          <Title titleText="SCORE" />
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
        {/*<View>
                <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/preview/education-quiz-3975777-3290981.png'}}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>*/}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Quiz")}
          >
            <Text style={styles.buttonText}>Play again?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Just Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    //width: '100%',
    backgroundColor: "#1A759F",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    margin: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "800",
    alignSelf: "center",
  },
});
