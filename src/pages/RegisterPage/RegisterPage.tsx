import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { Button, Card, InputText, Password } from "primereact";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../shared/contexts/AuthProvider";
import { addTranslationsToPtBrOnPage } from "../../config/traducoes";

export const RegisterPage = () => {
    const { signUp } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

    addTranslationsToPtBrOnPage();

    async function register() {
        setFormSubmitting(true);

        try {
            await signUp(email, password).then(() => {
                setFormSubmitting(false);
            });
        } catch (error) {
            console.log(error);
        }
        setFormSubmitting(false);
    }

    return (
        <Center>
            <Box maxW="1280px">
                <Card>
                    <Flex gap="4px" direction="column">
                        <Center>
                            <h2>Cadastro de Administrador</h2>
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
                            <Link to="/pagina-inicial"> Já é cadastrado? </Link>
                        </Text>
                        <Button
                            label="Cadastrar"
                            aria-label="Submit"
                            className="p-button-md mt-2"
                            onClick={register}
                            disabled={formSubmitting}
                        />
                    </Flex>
                </Card>
            </Box>
        </Center>
    );
};
