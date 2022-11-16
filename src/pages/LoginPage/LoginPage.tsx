import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import { Card } from "primereact";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTranslationsToPtBrOnPage } from "../../config/traducoes";
import { useAuth } from "../../shared/contexts/AuthProvider";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const navigator = useNavigate();

    const { signIn } = useAuth();

    addTranslationsToPtBrOnPage();

    const handleClick = () => {
        setShow(!show);
    };

    async function logar() {
        try {
            if ((await (await signIn(email, password)).user.getIdTokenResult()).claims["admin"]) navigator("/livros");
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
                            <Text fontSize={30} marginBottom="3rem">
                                Booki Administrador
                            </Text>
                        </Center>
                        <InputGroup size="md">
                            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                            <Input pr="4.5rem" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </InputGroup>
                        <InputGroup size="md">
                            <InputLeftElement pointerEvents="none" children={<LockIcon color="gray.300" />} />
                            <Input
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.5rem" size="sm" onClick={handleClick} marginRight="1">
                                    {show ? "Esconder" : "Exibir"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text color="blue.700">
                            <Link to="/esqueci-a-senha"> Esqueci a senha </Link>
                        </Text>
                        <Button aria-label="Submit" onClick={logar}>
                            Logar
                        </Button>
                    </Flex>
                </Card>
            </Box>
        </Center>
    );
};
