import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/contexts/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <AuthProvider>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;
