import { Box, Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Button, Card, InputText, Password } from "primereact";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTranslationsToPtBrOnPage } from "../../config/traducoes";
import { useAuth } from "../../shared/contexts/AuthProvider";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    const { signIn } = useAuth();

    addTranslationsToPtBrOnPage();

    async function logar() {
        try {
            await signIn(email, password);
            navigator("/livros");
        } catch (error: unknown) {
            console.log(error);
        }
    }

    return (
        <Center>
            <Box maxW="1280px">
                <Card>
                    <Flex gap="4px" direction="column">
                        <Center>
                            <h2>Booki Administrador</h2>
                        </Center>
                        <Box>
                            <h5>Email</h5>
                            <InputText placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="box" />
                        </Box>
                        <Spacer />
                        <Box>
                            <h5>Senha</h5>
                            <Password placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} toggleMask />
                        </Box>
                        <Text>
                            <Link to="/esqueci-a-senha"> Esqueci a senha </Link>
                        </Text>
                        <Button label="Logar" aria-label="Submit" className="p-button-md mt-2" onClick={logar} />
                    </Flex>
                </Card>
            </Box>
        </Center>
    );
};
