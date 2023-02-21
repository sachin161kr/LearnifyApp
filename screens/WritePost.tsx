import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { TextInput, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function WritePost({ navigation }) {
  return (
    <>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Publish Settings");
          }}
        >
          <Text
            style={{
              marginRight: 20,
              fontSize: 16,
              marginTop: 20,
              padding: 10,
              width: 100,
              textAlign: "center",
              borderRadius: 20,
              backgroundColor: "#433ddb",
            }}
          >
            Publish
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TextInput
          style={{
            // borderWidth: 1,
            // borderColor: "white",
            width: "100%",
            maxHeight: 250,
            fontSize: 30,
            padding: 20,
            color: "white",
            fontWeight: "bold",
          }}
          cursorColor="white"
          placeholder="Article Title"
          placeholderTextColor="#6d6d6e"
          multiline={true}
          textAlignVertical="top"
        />
        <TextInput
          style={{
            flexGrow: 1,
            // borderWidth: 1,
            // borderColor: "white",
            width: "100%",
            fontSize: 18,
            padding: 20,
            color: "white",
          }}
          cursorColor="white"
          placeholder="Type Your Markdown Here"
          textAlignVertical="top"
          placeholderTextColor="#6d6d6e"
          multiline={true}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
