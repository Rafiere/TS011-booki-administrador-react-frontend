import { Box, Center, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { addLocale, Button, Card, InputText, locale, Password } from "primereact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import traducoes from "../../config/traducoes.json";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        addLocale("pt", traducoes.pt);

        locale("pt");
        console.log("testando");
    }, []);

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
                        <Button label="Logar" aria-label="Submit" className="p-button-md mt-2" />
                    </Flex>
                </Card>
            </Box>
        </Center>
    );
};
