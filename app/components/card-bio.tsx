import { Mail } from "lucide-react";
import clipboardCopy from "clipboard-copy";

type CardBioProps = {
    copied: boolean;
    setCopied: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CardBio({ copied, setCopied }: CardBioProps) {
    const copyEmail = () => {
        const email = "contato@viniciuscardoso.dev";

        clipboardCopy(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            })
            .catch((err) => {
                console.error("Falha ao copiar o email para a área de transferência:", err);
            });
    }
    return (
        <section className="w-full h-600 bg-left bg-top bg-repeat bg-cover rounded-3xl p-6 flex flex-col items-start justify-end" style={{ backgroundImage: 'linear-gradient(45deg, #FF9B52 17%, rgba(255,128,128,0.769) 62%), url("https://avatars.githubusercontent.com/u/75495504?v=4")', boxShadow: '0rem 0.625rem 3.5rem 0.75rem rgba(74,26,19,0.259)' }}>
            <h1 className="text-white text-6xl font-bold">
                Vinicius Cardoso
            </h1>

            <p className="text-slate-50 font-extralight pb-4">
                Desenvolvedor front-end
            </p>

            <button className="flex text-white font-light border border-white p-2 text-base items-center gap-2 p-4 rounded-3xl hover:scale-105 ease-in duration-300" onClick={copyEmail}>
                Mande sua mensagem
                <Mail className="w-4 h-4" />
            </button>

            {copied && <small className="absolute bg-slate-200 p-1" style={{marginLeft: '56px', marginBottom: '-14px'}}>E-mail copiado!</small>}
        </section>
    )
}
