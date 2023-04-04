import { createContext, useState } from "react";

interface UserType {
  nameUser: string;
  cepUser: string | null;
  imageUser: string | null;
  saveData: (name: string, cep: string | null, image: string | null) => void;
}

type MyComponentChildren = React.PropsWithChildren;

const UserContextData = createContext<UserType>({} as UserType);

const UserProvider = ({ children }: MyComponentChildren) => {
  const [nameUser, setNameUser] = useState<string>("");
  const [cepUser, setCepUser] = useState<string | null>("");
  const [imageUser, setImageUser] = useState<string | null>(null);

  function saveData(name: string, cep: string | null, image: string | null) {
    setNameUser(name), setCepUser(cep), setImageUser(image);
  }

  return (
    <UserContextData.Provider
      value={{ nameUser, cepUser, imageUser, saveData }}
    >
      {children}
    </UserContextData.Provider>
  );
};

export { UserContextData, UserProvider };
