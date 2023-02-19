import React, { useState } from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";

const PublishScreen = () => {
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);

  return (
    <>
      <TextInput
        onFocus={() => {
          setFocus1(true);
          setFocus2(false);
          setFocus3(false);
          setFocus4(false);
        }}
        style={{
          height: 60,
          color: "white",
          padding: 20,
          borderColor: focus1 === true ? "#433ddb" : "black",
          margin: 15,
          fontSize: 15,
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Enter Name"
        placeholderTextColor="#6d6d6e"
        cursorColor="white"
      />
      <TextInput
        onFocus={() => {
          setFocus1(false);
          setFocus2(true);
          setFocus3(false);
          setFocus4(false);
        }}
        style={{
          height: 60,
          color: "white",
          padding: 20,
          borderColor: focus2 === true ? "#433ddb" : "black",
          margin: 15,
          fontSize: 15,
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Enter Email"
        placeholderTextColor="#6d6d6e"
        cursorColor="white"
      />
      <TextInput
        keyboardType="numeric"
        onFocus={() => {
          setFocus1(false);
          setFocus2(false);
          setFocus3(true);
          setFocus4(false);
        }}
        style={{
          height: 60,
          color: "white",
          padding: 20,
          borderColor: focus3 === true ? "#433ddb" : "black",
          margin: 15,
          fontSize: 15,
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Enter Phone"
        placeholderTextColor="#6d6d6e"
        cursorColor="white"
      />
      <TextInput
        onFocus={() => {
          setFocus1(false);
          setFocus2(false);
          setFocus3(false);
          setFocus4(true);
        }}
        style={{
          height: 60,
          color: "white",
          padding: 20,
          borderColor: focus4 === true ? "#433ddb" : "black",
          margin: 15,
          fontSize: 15,
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Enter Valid UPI ID"
        placeholderTextColor="#6d6d6e"
        cursorColor="white"
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    color: "white",
    padding: 20,
    margin: 15,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default PublishScreen;
