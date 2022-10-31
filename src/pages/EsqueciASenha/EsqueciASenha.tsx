import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { addLocale, Button, Card, InputText, locale } from "primereact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pt from "../../config/traducoes.json";
import { addTranslationsToPtBrOnPage } from "../../config/traducoes";
import { useAuth } from "../../shared/contexts/AuthProvider";

export const EsqueciASenha = () => {
    const [email, setEmail] = useState("");

    const { resetPassword } = useAuth();

    addTranslationsToPtBrOnPage();

    async function recoverPassword() {
        try {
            console.log("teste");
            await resetPassword(email);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Center>
            <Card>
                <Center>
                    <h2>Recuperar Senha</h2>
                </Center>
                <Flex direction="column">
                    <h5>Digite o seu email</h5>
                    <InputText placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="box" />
                    <Spacer />
                    <Button
                        label="Recuperar a Senha"
                        aria-label="Recuperar a Senha"
                        className="p-button-md mt-5"
                        onClick={recoverPassword}
                    />
                    <Link to="/pagina-inicial" className="mt-5">
                        Voltar
                    </Link>
                </Flex>
            </Card>
        </Center>
    );
};
