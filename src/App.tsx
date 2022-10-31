import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/contexts/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
        //A
    );
}

export default App;
