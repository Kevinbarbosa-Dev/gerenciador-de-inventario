import { h4Style, pStyle } from "../../assets/styles/tailwind/landPageStyle";

export default function FooterLand() {
    return (
        <footer className="border-t border-[#E5E7EB] bg-[#262626] text-white">
            <div className="max-w-7xl mx-auto px-4 grid gap-8 py-12 md:grid-cols-3">
                <div>
                    <h4 className={h4Style}>Stock</h4>
                    <p className={pStyle}>
                        Desenvolvido para lojas físicas e/ou digitais, a ferramenta impulsiona o crescimento de quem está vivendo o sonho do negócio próprio.
                    </p>
                </div>
                <div>
                    <h4 className={h4Style}>Contate-nos</h4>
                    <ul className={`${pStyle} space-y-2`}>
                        <li>Telefone: 55 11</li>
                        <li>email@email.com</li>
                        <li>São Paulo</li>
                        <li>Rua Stock</li>
                    </ul>
                </div>
                <div>
                    <h4 className={h4Style}>Suporte</h4>
                    <ul className={`${pStyle} space-y-2`}>
                        <li>WhatsApp: 55@gmail.com</li>
                        <li>Email: suporte@email.com</li>
                        <li>Chat: stock.com/suporte</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}