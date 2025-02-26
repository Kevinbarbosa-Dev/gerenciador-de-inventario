import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
export default function MainPlans() {
    return (
        <>
            <section className="py-12 md:py-24 bg-[#262626] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[{ price: "$7.99", title: "Básico" }, { price: "$9.99", title: "Padrão", featured: true }, { price: "$11.99", title: "Premium" }].map((plan, index) => (
                            <Card
                                key={index}
                                className={`flex flex-col ${plan.featured ? "border-2 border-[#D90718] bg-[#202020]" : "border-[#E5E7EB] bg-[#262626]"
                                    }`}
                            >
                                <CardHeader>
                                    <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-white">
                                        {plan.price}
                                        <span className="text-base font-normal text-[#9AA0A6]">/mês</span>
                                    </div>
                                    <p className="mt-2 text-sm text-[#9AA0A6]">
                                        5000 de armazenamento com recursos particulares
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className={`w-full ${plan.featured
                                            ? "bg-[#D90718] text-white hover:bg-[#B00614]"
                                            : "bg-[#E5E7EB] text-[#262626] hover:bg-[#BDC1C6]"
                                            }`}
                                    >
                                        Começar agora
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}