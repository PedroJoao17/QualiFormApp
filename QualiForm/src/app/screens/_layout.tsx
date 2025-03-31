import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#800020",
                },
                headerTintColor: "#FFF",
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "bold",
                },
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen name="menu" options={{ title: "Menu" }} />
            <Stack.Screen name="enviar" options={{ title: "Enviar" }} />
            <Stack.Screen name="aprove" options={{ title: "Aprovados" }} />
            <Stack.Screen name="dev" options={{ title: "Devolvidos" }} />
            <Stack.Screen name="validate" options={{ title: "Validar" }} />
            <Stack.Screen name="fill" options={{ title: "Preencher Formulário" }} />
        </Stack>
    );
}
