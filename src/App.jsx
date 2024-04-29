import carImg from "./images/mashina.png"

export default function App() {
  return <div className="h-screen w-screen flex items-center justify-center gap-5 flex-col">
    <h1 className="text-red-00 font-bold text-ul">Mashinka Nevidimka</h1>
    <img className="h-[300px] rounded-lg" src={carImg} alt="" />
  </div>
}