import { Mail } from "lucide-react";

export default function CardBio() {
    return (
        <section className="w-full h-600 bg-left bg-top bg-repeat bg-cover rounded-3xl p-6 flex flex-col items-start justify-end" style={{ backgroundImage: 'linear-gradient(45deg, #FF9B52 17%, rgba(255,128,128,0.769) 62%), url("https://avatars.githubusercontent.com/u/75495504?v=4")', boxShadow: '0rem 0.625rem 3.5rem 0.75rem rgba(74,26,19,0.259)' }}>
            <h1 className="text-white text-6xl font-bold">
                Vinicius
                Cardoso
            </h1>

            <p className="text-slate-50 font-extralight pb-4">
                Desenvolvedor front-end
            </p>

            <button className="flex text-white font-light border border-white p-2 text-base items-center gap-2 p-4 rounded-3xl">
                Mande sua mensagem
                <Mail className="w-4 h-4" />
            </button>
        </section>
    )
}