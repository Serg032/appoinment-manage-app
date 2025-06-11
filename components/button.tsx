import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = {
  text: string;
} & PressableProps;

export const CustomButton = ({ text, ...props }: ButtonProps) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 20,
      }}
      {...props}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </Pressable>
  );
};
