import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
    const participants = ["Manoel Vieira", "Mel Souza", "Chica da Silva", "Perola Vieira", "Adrielly Maria", "Celso Ricardo", "Adriana de Paula", "Clea Souza", "Luis Felipe", "Michael Jackson"]

    function handleParticipantAdd() {
        console.log("Você clicou no botão adicionar")
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou em remover o participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2023
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove("Manoel")} />
                    ))
                }
            </ScrollView>
        </View>
    );
}