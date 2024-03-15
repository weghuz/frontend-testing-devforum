import { useFormContext } from "react-hook-form";
import { usePasswordAgain } from "../../../hooks/usePasswordAgain";
import { LoginFormSchemaType } from "../types/LoginFormSchemaType";

export function LoginFormContent() {
  const { passwordAgainFailed } = usePasswordAgain();

  const onSubmit = (data: LoginFormSchemaType) => {
    if (passwordAgainFailed()) {
      return;
    }

    console.log(data);
  };

  const { handleSubmit } = useFormContext<LoginFormSchemaType>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 max-w-[600px] grow pt-10"
    >
      <label htmlFor="username">Användarnamn</label>
      <input type="text" id="username" className="border border-gray-300 p-2" />
      <label htmlFor="password">Lösenord</label>
      <input
        type="password"
        id="password"
        className="border border-gray-300 p-2"
      />
      <label htmlFor="passwordAgain">Lösenord igen</label>
      <input
        type="password"
        id="passwordAgain"
        className="border border-gray-300 p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Logga in
      </button>
    </form>
  );
}
