import { useEffect } from "react";
import { addLocale, locale } from "primereact";
import traducoes from "./traducoes.json";

export function addTranslationsToPtBrOnPage() {
    useEffect(() => {
        addLocale("pt", traducoes.pt);
        locale("pt");
    }, []);
}
