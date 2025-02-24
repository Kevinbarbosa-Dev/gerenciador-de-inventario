

const Mock = [
    {
        id: 1, nome: "Cadeira Gamer", material: "Couro Sintético", descricao: "Cadeira ergonômica para jogos e escritório", quantidade: 15,
        valor: 899.9, fornecedor: "GamerWorld",
    },
    {
        id: 2, nome: "Mesa de Escritório", material: "Madeira MDF", descricao: "Mesa espaçosa para computador com gavetas", quantidade: 10,
        valor: 499.9, fornecedor: "MoveisFlex",
    },
    {
        id: 3, nome: "Monitor 24 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 20,
        valor: 1249.0, fornecedor: "TechVision",
    },
    {
        id: 4, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 30,
        valor: 299.9, fornecedor: "GameZone",
    },
    {
        id: 5, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 25,
        valor: 199.9, fornecedor: "WirelessTech",
    },
    { id: 6, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18, valor: 349.9, fornecedor: "AudioMax", },
    { id: 7, nome: "Cadeira de Escritório", material: "Couro Sintético", descricao: "Cadeira ergonômica para escritório", quantidade: 12, valor: 299.9, fornecedor: "OfficeComfort", },
    {
        id: 8, nome: "Monitor 27 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 15,
        valor: 1499.0, fornecedor: "TechVision",
    },
    { id: 9, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 25, valor: 299.9, fornecedor: "GameZone", },
    { id: 10, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 20, valor: 199.9, fornecedor: "WirelessTech", },
    { id: 11, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18, valor: 349.9, fornecedor: "AudioMax", },
    { id: 12, nome: "Cadeira de Escritório", material: "Couro Sintético", descricao: "Cadeira ergonômica para escritório", quantidade: 12, valor: 299.9, fornecedor: "OfficeComfort", },
    { id: 13, nome: "Monitor 27 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 15, valor: 1499.0, fornecedor: "TechVision", },
    { id: 14, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 25, valor: 299.9, fornecedor: "GameZone", },
    { id: 15, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 20, valor: 199.9, fornecedor: "WirelessTech", },
    { id: 16, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18, valor: 349.9, fornecedor: "AudioMax", },
    { id: 17, nome: "Cadeira de Escritório", material: "Couro Sintético", descricao: "Cadeira ergonômica para escritório", quantidade: 12, valor: 299.9, fornecedor: "OfficeComfort", },
    { id: 18, nome: "Monitor 27 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 15, valor: 1499.0, fornecedor: "TechVision", },
    { id: 19, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 25, valor: 299.9, fornecedor: "GameZone", },
    { id: 20, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 20, valor: 199.9, fornecedor: "WirelessTech", },
    { id: 21, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18, valor: 349.9, fornecedor: "AudioMax", },
    { id: 22, nome: "Cadeira de Escritório", material: "Couro Sintético", descricao: "Cadeira ergonômica para escritório", quantidade: 12, valor: 299.9, fornecedor: "OfficeComfort", },
    { id: 23, nome: "Monitor 27 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 15, valor: 1499.0, fornecedor: "TechVision", },
    { id: 24, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 25, valor: 299.9, fornecedor: "GameZone", },
    { id: 25, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 20, valor: 199.9, fornecedor: "WirelessTech", },
    { id: 26, nome: "Headset com Microfone", material: "Plástico e Couro", descricao: "Headset com som estéreo e microfone ajustável", quantidade: 18, valor: 349.9, fornecedor: "AudioMax", },
    { id: 27, nome: "Cadeira de Escritório", material: "Couro Sintético", descricao: "Cadeira ergonômica para escritório", quantidade: 12, valor: 299.9, fornecedor: "OfficeComfort", },
    { id: 28, nome: "Monitor 27 Polegadas", material: "Plástico e Metal", descricao: "Monitor Full HD com painel IPS", quantidade: 15, valor: 1499.0, fornecedor: "TechVision", },
    { id: 29, nome: "Teclado Mecânico RGB", material: "Alumínio e Plástico", descricao: "Teclado gamer com iluminação personalizável", quantidade: 25, valor: 299.9, fornecedor: "GameZone", },
    { id: 30, nome: "Mouse Sem Fio", material: "Plástico", descricao: "Mouse ergonômico com alta precisão e bateria recarregável", quantidade: 20, valor: 199.9, fornecedor: "WirelessTech", },

]
export default Mock;