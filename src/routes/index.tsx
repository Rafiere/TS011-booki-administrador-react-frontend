import { Navigate, Route, Routes } from "react-router-dom";
import { ListarLivrosPage, LoginPage, RegisterPage } from "../pages";
import { EsqueciASenha } from "../pages/EsqueciASenha/EsqueciASenha";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<LoginPage />} />
            <Route path="/registrar" element={<RegisterPage />}></Route>
            <Route path="/esqueci-a-senha" element={<EsqueciASenha />} />
            <Route path="/livros" element={<ListarLivrosPage />} />

            <Route path="*" element={<Navigate to="pagina-inicial" />} />
        </Routes>
    );
};
