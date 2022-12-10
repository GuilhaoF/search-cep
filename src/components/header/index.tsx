import AdressImg from "../../assets/endereco.png";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center md:w-full bg-orange-300 p-6 shadow-xl">
      <h2 className="font-bold text-2xl">
        <img src={AdressImg} alt="logo-endereco" className="w-[96px] ml-2" />
        React-Cep
      </h2>
    </header>
  );
}
