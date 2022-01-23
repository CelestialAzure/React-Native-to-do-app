import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/Task";
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let taskCopy = [...taskItems];
    taskCopy.splice(index, 1);
    setTaskItems(taskCopy);
  };
  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems?.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#1A1A1A",
  },
  items: { marginTop: 10 },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
