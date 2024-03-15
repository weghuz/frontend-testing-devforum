import { useFormContext } from "react-hook-form";
import { LoginFormSchemaType } from "../components/LoginForm/types/LoginFormSchemaType";

export function usePasswordAgain() {
    const { watch } = useFormContext<LoginFormSchemaType>();

    const passwordAgainFailed = () => {
        console.log("passwordAgainFailed");
        return watch("password") !== watch("passwordAgain");
    };

    return { passwordAgainFailed }
}