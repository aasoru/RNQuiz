import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Title from '../components/title';
import { useTheme, Button } from 'react-native-paper';

const Result = ({navigation, route}) => {
    const { colors } = useTheme();
    const {score} = route.params;
    const resultBanner = score > 10
        ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
        : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  return (
    <SafeAreaView style={tw`bg-white h-full`, { justifyContent: 'center', flex: 1 }}>
        <View style={ tw`p-5 w-full items-center` }>
            <View >
                <Title titleText='SCORE' />
                <Text style={styles.scoreValue}>{score}</Text>
            </View>
            {/*<View>
                <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/preview/education-quiz-3975777-3290981.png'}}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>*/}
            <View style={styles.bottom}>
                <Button
                    theme={colors}
                    style={styles.bottomBtn}
                    icon="repeat"
                    mode="contained"
                    onPress={() => navigation.navigate("Quiz")}
                    >Again?</Button>

                <Button
                    theme={colors}
                    style={styles.bottomBtn}
                    icon="home"
                    mode="contained"
                    onPress={() => navigation.navigate("Home")}
                    >Go Home</Button>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Result

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bottomBtn:{
        marginHorizontal: 10
    },
    scoreValue:{
        fontSize: 40,
        fontWeight:'800',
        alignSelf:'center'
    }
})