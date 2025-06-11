import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface FormButtonProps extends PressableProps {
  text: string;
}

export const FormButton = ({ text, ...props }: FormButtonProps) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log("Button pressed")}
      {...props}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: 150,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
