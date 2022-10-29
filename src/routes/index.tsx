import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="pagina-inicial" element={<LoginPage />} />
            <Route path="livros" />

            <Route path="*" element={<Navigate to="pagina-inicial>" />} />
        </Routes>
    );
};
