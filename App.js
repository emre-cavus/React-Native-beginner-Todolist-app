import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    //console.log(task);
    //Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Todays Task {bugünkü görev} */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* görevin ilerleyeceği yer burasıdır */}
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index)}>
                  < Task text={item} />
                </TouchableOpacity>)
            })
          }
          {/* <Task text={"Task 1"} />
          <Task text={"Task 2"} /> */}
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} onChangeText={text => setTask(text)} />

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
    backgroundColor: '#000',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30,
  },
  /*  */
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: "#fff",
    backgroundColor: "#222",
    borderColor: "#ff0f37",
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#222",
    justifyContent: "center",// + dikey ortalama
    alignItems: "center",// + yatay ortalama
    borderColor: "#ff0f37",
    borderWidth: "1",
  },
  addText: {
    color: "#fff",
    fontSize: 30
  },
});
