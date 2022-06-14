import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useFocusEffect } from "@react-navigation/native";
import {
  ActivityIndicator,
  Portal,
  Modal,
  useTheme,
  Button,
} from "react-native-paper";
import OptionBtn from "../components/optionBtn";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const { colors } = useTheme();
  const [questions, setQuestions] = useState([]);
  const [questNumber, setQuestNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986&difficulty=easy";
    const res = await fetch(url);
    const data = await res.json();
    setScore(0);
    setQuestNumber(0);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
    setDisabled(false);
  };
  /*useEffect(() => {
            getQuiz();
    }, []);*/

  useFocusEffect(
    React.useCallback(() => {
      getQuiz();
    }, [])
  );

  const handleNextButton = () => {
    nextQuestion();
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [];

    _question.incorrect_answers.map(function (element, index) {
      options.push({ question: element, correct: false });
    });

    options.push({ question: _question.correct_answer, correct: true });

    shuffleArray(options);

    return options;
  };

  const handleShowResult = () => {
    setQuestions([]);
    navigation.navigate("Result", { score: score });
  };

  const nextQuestion = () => {
    setQuestNumber(questNumber + 1);
    setOptions(generateOptionsAndShuffle(questions[questNumber + 1]));
    setShowNext(false);
    setDisabled(false);
  };

  const buttonPressed = (correct) => {
    setDisabled(true);
    setShowNext(true);
    correct && setScore(score + 1); //: console.log('incorrect!');
  };

  return (
    <SafeAreaView style={tw`bg-white h-full justify-center flex-1`}>
      <View style={tw`p-5 w-full items-center`}>
        {isLoading ? (
          <View style={tw`flex justify-center align-center h-full`}>
            <ActivityIndicator animating={isLoading} size="large" />
          </View>
        ) : (
          questions &&
          questions[questNumber] && (
            <View>
              <View style={tw`my-16`}>
                <Text style={tw`text-2xl`}>
                  {questNumber + 1}.{" "}
                  {decodeURIComponent(questions[questNumber].question)}
                </Text>
              </View>
              <View style={tw`y-16 flex-1`}>
                {options.map(function (element, index) {
                  return (
                    <OptionBtn
                      key={index}
                      correct={element.correct}
                      onButtonPressed={buttonPressed}
                      styleButton={styles.optionButton}
                      styleText={tw`text-lg font-medium text-white`}
                      disabled={disabled}
                      option={decodeURIComponent(element.question)}
                    />
                  );
                })}
              </View>
              <View style={styles.score}>
                <Text style={styles.scoreText}>Score: {score}</Text>
              </View>
              <View style={styles.bottom}>
                {questNumber !== 9 && (
                  <React.Fragment>
                    {!showNext && (
                      <Button
                        theme={colors}
                        //style={{ color: colors.primary }}
                        icon="debug-step-over"
                        mode="contained"
                        onPress={nextQuestion}
                      >
                        SKIP
                      </Button>
                    )}

                    {showNext && (
                      <Button
                        theme={colors}
                        //style={{ color: colors.primary }}
                        icon="skip-next"
                        mode="contained"
                        onPress={handleNextButton}
                      >
                        NEXT
                      </Button>
                    )}
                  </React.Fragment>
                )}
                <Button
                  theme={colors}
                  //style={{ color: colors.primary }}
                  icon="trophy"
                  mode="contained"
                  onPress={handleShowResult}
                >
                  END
                </Button>
              </View>
            </View>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
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
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 4,
    color: "white",
  },
  optionButtonSuccess: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#00CE67",
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  optionButtonMistake: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#C50101",
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  score: {
    alignItems: "center",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "800",
  },
});
