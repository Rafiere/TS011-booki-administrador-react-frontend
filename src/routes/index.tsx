import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";
import { EsqueciASenha } from "../pages/EsqueciASenha/EsqueciASenha";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<LoginPage />} />
            <Route path="/esqueci-a-senha" element={<EsqueciASenha />} />
            <Route path="/livros" />

            <Route path="*" element={<Navigate to="pagina-inicial" />} />
        </Routes>
    );
};
