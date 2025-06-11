import { FormButton } from "@/components/form-button";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Here you would typically handle the registration logic,
    // such as sending the data to your backend or API.
    console.log("Registering user:", {
      name,
      surname,
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"#999"}
          placeholder="Name"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#999"}
          placeholder="Surname"
          onChangeText={(surname) => setSurname(surname)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#999"}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#999"}
          placeholder="Email"
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#999"}
          placeholder="Confirm email"
          onChangeText={(confirmedPassword) =>
            setConfirmPassword(confirmedPassword)
          }
        />
        <View style={styles.buttonContainer}>
          <FormButton text="Register" onPress={handleRegister} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inputsContainer: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    fontSize: 16,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 50,
  },
});
