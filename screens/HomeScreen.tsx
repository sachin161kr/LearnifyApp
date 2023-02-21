import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { useState } from "react";

import { TextInput, Image, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  const [post, SetPosts] = useState([]);

  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>Sachin Kumar</Text>
        <Text style={{ fontSize: 12, opacity: 0.75 }}>Feb 17,2023</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
            How to Start With React Native and explore all the possibilities?
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.75 }}>4 mins read</Text>
          <Text style={{ fontSize: 15, marginTop: 5, opacity: 0.75 }}>
            The working principles of React Native are virtually identical to
            React except that React Native does not manipulate the DOM via the
            Virtual DOM. It runs in ...
          </Text>
          <View style={{ height: 200, width: "100%", marginTop: 30 }}>
            <Image
              style={{
                height: "100%",
                width: "100%",
              }}
              source={{
                uri: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 1,
            marginTop: 30,
            width: 300,
            opacity: 0.2,
            backgroundColor: "white",
            alignSelf: "center",
          }}
        ></View>
      </View>

      <View
        style={{
          margin: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>Sachin Kumar</Text>
        <Text style={{ fontSize: 12, opacity: 0.75 }}>Feb 17,2023</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
            How to Start With React Native and explore all the possibilities?
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.75 }}>4 mins read</Text>
          <Text style={{ fontSize: 15, marginTop: 5, opacity: 0.75 }}>
            The working principles of React Native are virtually identical to
            React except that React Native does not manipulate the DOM via the
            Virtual DOM. It runs in ...
          </Text>
          <View style={{ height: 200, width: "100%", marginTop: 30 }}>
            <Image
              style={{
                height: "100%",
                width: "100%",
              }}
              source={{
                uri: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154083/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 1,
            marginTop: 30,
            width: 300,
            opacity: 0.2,
            backgroundColor: "white",
            alignSelf: "center",
          }}
        ></View>
      </View>
    </ScrollView>
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
  textInput: {
    height: 50,
    textAlign: "center",
    margin: 10,
    width: 140,
    borderWidth: 1,
    backgroundColor: "white",
  },
});
