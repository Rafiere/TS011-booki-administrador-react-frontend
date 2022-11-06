import { Center, InputGroup, Spacer, Text, Button, Input, InputLeftElement, Flex, Box } from "@chakra-ui/react";
import { addLocale, Card, InputText, locale } from "primereact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pt from "../../config/traducoes.json";
import { addTranslationsToPtBrOnPage } from "../../config/traducoes";
import { useAuth } from "../../shared/contexts/AuthProvider";
import { EmailIcon } from "@chakra-ui/icons";

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
                    <Text fontSize={30} marginBottom="2rem">
                        Recuperar Senha
                    </Text>
                </Center>
                <InputGroup marginBottom="2rem">
                    <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                    <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="box" />
                    <Button aria-label="Recuperar a Senha" onClick={recoverPassword} marginLeft="0.5rem">
                        Enviar
                    </Button>
                </InputGroup>
                <Link to="/pagina-inicial" className="font-bold">
                    Voltar
                </Link>
            </Card>
        </Center>
    );
};
