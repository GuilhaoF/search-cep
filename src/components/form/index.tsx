import { useState } from "react";
import api from "../../services/api";
import ResultCep from "../resultCep";
import InputMask from "react-input-mask";

type Address = {
  logradouro: string;
  localidade: string;
  bairro: string;
};

export default function Form() {
  const [searchValue, setSearchValue] = useState("");
  const [addressData, setAddressData] = useState<Address>();

  async function handleSubmitSearchCep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchValue === "") {
      alert("Digite seu cep!");
      return;
    }
    try {
      const response = await api.get(`/${searchValue}/json`);
      setAddressData(response.data);
      setSearchValue("")
    } catch {
      console.error("erro ao buscar dados");
    }
  }
  //formatar cep

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-6 m-auto rounded border-2 border-[#000] max-w-sm">
        <form
          className=" flex flex-col p-6 rounded-sm"
          onSubmit={handleSubmitSearchCep}
        >
          <InputMask
            mask="99999-999"
            maskChar={null}
            className="mb-4 p-2 outline-none text-center"
            placeholder="Digite seu Cep(65600-010)"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="bg-yellow-400 rounded p-4 w-[280px] outline-none">
            Pesquisar
          </button>
        </form>
      </div>
      {addressData && (
        <ResultCep
          logradouro={addressData.logradouro}
          bairro={addressData.bairro}
          localidade={addressData.localidade}
        />
      )}
    </>
  );
}
