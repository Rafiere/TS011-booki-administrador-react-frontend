import {
    Box,
    Flex,
    useDisclosure,
    Text,
    SimpleGrid,
    Modal,
    Image,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Select,
    InputGroup,
} from "@chakra-ui/react";
import { Button, Card, Dropdown, FileUpload, InputText, InputTextarea, Menubar } from "primereact";
import { useRef } from "react";
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

type LivrosProps = {
    nome: string;
    capaUrl: string;
};

export const ListarLivrosPage = () => {
    // const storage = firebase.storage();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menu = useRef(null);
    const items = [{}];
    const generos = [
        { name: "Romance" },
        { name: "Aventura" },
        { name: "Fantasia" },
        { name: "Drama" },
        { name: "Suspense" },
        { name: "Terror" },

        { name: "Ficção Científica" },
    ];

    const dados: LivrosProps[] = [
        {
            nome: "O Senhor dos Anéis",
            capaUrl:
                "data:image/jpeg;base64,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",
        },
        {
            nome: "Fazenda de Animais",
            capaUrl: "https://m.media-amazon.com/images/I/91489cWHWzL.jpg",
        },
        {
            nome: "1984",
            capaUrl: "https://m.media-amazon.com/images/I/81EStZoMf7L.jpg",
        },
        {
            nome: "Fahrenheit 451",
            capaUrl: "https://m.media-amazon.com/images/I/51tAD6LyZ-L.jpg",
        },
    ];

    const navigator = useNavigate();

    async function logout() {
        try {
            navigator("/login");
        } catch (error: unknown) {
            console.log(error);
        }
    }

    function handleFirebaseUpload() {
        console.log("start of upload");
        // async magic goes here...
        // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
        //initiates the firebase side uploading
        // uploadTask.on(
        //     "state_changed",
        //     () => {
        //         // gets the functions from storage refences the image storage in firebase by the children
        //         // gets the download url then sets the image from firebase as the value for the imgUrl key:
        //         storage
        //             .ref("images")
        //             .child(imageAsFile.name)
        //             .getDownloadURL()
        //             .then(fireBaseUrl => {
        //                 setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }));
        //             });
        //     },
        // );
    }

    return (
        <Flex display="block">
            <Modal isOpen={isOpen} onClose={onClose}>
                <Flex>
                    <ModalOverlay />
                    <ModalContent height={1300} width={800}>
                        <ModalHeader fontSize={30}>Upload de Livros</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <InputGroup display={"flex"} flexDirection={"column"} gap={6}>
                                <Box>
                                    <InputText placeholder="Título" />
                                </Box>
                                <Box>
                                    <InputText placeholder="Autor" />
                                </Box>
                                <Box>
                                    <Select placeholder="Gênero">
                                        <option value="Romance">Romance</option>
                                        <option value="Aventura">Aventura</option>
                                        <option value="Fantasia">Fantasia</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Suspense">Suspense</option>
                                        <option value="Ficção Científica">Ficção Científica</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <InputText placeholder="Editora" />
                                </Box>
                                <Box>
                                    <InputTextarea placeholder="Sinopse" />
                                </Box>
                                <Select placeholder="Idioma">
                                    <option value="pt">Português</option>
                                    <option value="en">Inglês</option>
                                    <option value="es">Espanhol</option>
                                </Select>
                                <Text className="font-bold" fontSize={20}>
                                    Upload da Capa do Livro
                                </Text>

                                <FileUpload
                                    name="demo[]"
                                    url="https://primefaces.org/primereact/showcase/upload.php"
                                    onUpload={() => null}
                                    multiple
                                    accept="image/*"
                                    maxFileSize={1000000}
                                    emptyTemplate={<p className="m-0">Envie a capa do livro aqui!</p>}
                                />

                                <Text className="font-bold" fontSize={20}>
                                    Upload do Livro
                                </Text>

                                <FileUpload
                                    name="demo[]"
                                    url="https://primefaces.org/primereact/showcase/upload.php"
                                    onUpload={() => null}
                                    multiple
                                    accept="image/*"
                                    maxFileSize={1000000}
                                    emptyTemplate={<p className="m-0">Envie o livro aqui!</p>}
                                />
                            </InputGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button label="Upload" className="bg-green-600 border-green-600" icon="pi pi-cloud-upload" />
                        </ModalFooter>
                    </ModalContent>
                </Flex>
            </Modal>

            <Box width="full">
                <Menubar
                    model={items}
                    start={
                        <Box>
                            <Text fontSize={30}>Booki Administrador</Text>
                        </Box>
                    }
                    end={
                        <SimpleGrid columns={2}>
                            <Button
                                label="Upload"
                                icon="pi pi-cloud-upload"
                                className="bg-green-600 border-green-600 mr-4"
                                onClick={onOpen}
                            />
                            <Button label="Logout" icon="pi pi-power-off" className="bg-red-600 border-red-600" onClick={logout} />
                        </SimpleGrid>
                    }
                    className="p-menuitem-text font-bold p-menuitem gap-5"
                />
            </Box>

            <SimpleGrid minChildWidth="240px" spacing="40px" className="mt-8">
                {dados.map(livro => (
                    <Box width={"240px"} textAlign={"center"} alignItems={"baseline"}>
                        <Card>
                            <Image src={livro.capaUrl} />
                            <Text fontWeight="bold" paddingTop={6}>
                                {livro.nome}
                            </Text>
                            <Button label={"Excluir"} icon="pi pi-trash" className={"bg-red-600 border-red-600 mt-5"} />
                        </Card>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    );
};
