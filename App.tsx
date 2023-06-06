import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#131016",
      padding: 24
    }}>
      <Text style={{
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold"
      }}>
        Nome do evento
      </Text>
      <Text style={{
        color: "#6b6b6b",
        fontSize: 16
      }}>
        Sexta, 4 de novembro de 2023
      </Text>
    </View>
  );
}