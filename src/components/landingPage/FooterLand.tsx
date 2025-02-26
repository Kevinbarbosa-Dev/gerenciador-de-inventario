export default function FooterLand() {
    return (
        <footer className="border-t border-[#E5E7EB] bg-[#262626] text-white">
            <div className="max-w-7xl mx-auto px-4 grid gap-8 py-12 md:grid-cols-3">
                <div>
                    <h4 className="text-lg font-bold">Stock</h4>
                    <p className="mt-2 text-sm text-[#9AA0A6]">
                        Desenvolvido para lojas físicas e/ou digitais, a ferramenta impulsiona o crescimento de quem está vivendo o sonho do negócio próprio.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Contate-nos</h4>
                    <ul className="mt-2 space-y-2 text-sm text-[#9AA0A6]">
                        <li>Telefone: 55 11</li>
                        <li>email@email.com</li>
                        <li>São Paulo</li>
                        <li>Rua Stock</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Suporte</h4>
                    <ul className="mt-2 space-y-2 text-sm text-[#9AA0A6]">
                        <li>WhatsApp: 55@gmail.com</li>
                        <li>Email: suporte@email.com</li>
                        <li>Chat: stock.com/suporte</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}