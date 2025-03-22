import { Stack } from "expo-router"

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#800020", // Cor de fundo do header
                },
                headerTintColor: "#FFF", // Cor do texto e dos botões no header
                headerTitleStyle: {
                    fontSize: 20, // Tamanho da fonte do título
                    fontWeight: "bold", // Deixa o título em negrito
                },
                headerShadowVisible: false, // Remove a sombra no iOS
            }}
        >
            <Stack.Screen name="menu" options={{ title: "Menu" }} />
            <Stack.Screen name="enviar" options={{ title: "Enviar" }} />
            <Stack.Screen name="aprove" options={{ title: "Aprovados" }} />
            <Stack.Screen name="dev" options={{ title: "Devolvidos" }} />
            <Stack.Screen name="validate" options={{ title: "Validar" }} />
        </Stack>
    )
}
