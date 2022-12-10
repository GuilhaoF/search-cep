import { FcHome, FcOrganization,FcFactory} from "react-icons/fc";

type Address = {
  logradouro: string;
  localidade: string;
  bairro: string;
};

export default function ResultCep({ logradouro, localidade, bairro }: Address) {
  return (
    <div className="flex justify-center p-6 flex-col mt-6 items-center border-2 border-[#000]  max-w-sm m-auto">
      <h3 className=" flex  text-[#000]">
        <FcHome className="mr-2" />
        Rua : {logradouro}
      </h3>
      <h3 className=" flex items-center text-[#000]">
        <FcOrganization className="mr-2" />
        Cidade : {localidade}
      </h3>
      <h3 className=" flex items-center text-[#000]">
        <FcFactory className="mr-2"/>
        Bairro : {bairro}
    </h3>
    </div>
  );
}
