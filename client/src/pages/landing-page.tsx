import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Star, Truck, ArrowRight, ChevronDown, Clock, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Assets import
import heroImg from "@assets/homem_sério_no_espelho.png_1771032451762.png";
import painImg from "@assets/homem_aplicando_o_spray.png_1771032474705.jpeg";
import productImg from "@assets/packshot_do_produto.png_1771032482055.png";
import deliveryImg from "@assets/caixa_chegando_em_casa.png_1771032501396.jpeg";
import beforeImg from "@assets/antes.png_1771032509259.jpeg";
import afterImg from "@assets/depois.png_1771032517292.png";
import confidentImg from "@assets/homem_confiante_depois_do_uso.png_1771032531880.png";

// New Assets
import face1 from "@assets/Imagem_1_1771174080222.jpeg";
import face2 from "@assets/Imagem_2_1771174080222.png";
import face3 from "@assets/Imagem_3_1771174080220.jpeg";
import face4 from "@assets/Imagem_4_1771174080221.png";
import noCap from "@assets/sem_bone.png_1771174101364.png";
import withCap from "@assets/com_bone.png_1771174104495.png";
import pack1 from "@assets/packshot_do_produto_1.png_1771174124701.png";
import pack2 from "@assets/packshot_do_produto_2.png_1771174124702.png";
import pack3 from "@assets/packshot_do_produto_3.png_1771174124703.png";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center mb-12">
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center gap-3 text-center mb-6 bg-[#EBE5D9] px-6 py-2 rounded-full shadow-sm"
            >
                <div className="text-[#1E8E3E]">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" fill="#1E8E3E" color="white" strokeWidth={2} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-[#111111]">
                    PAGUE SÓ DEPOIS DE RECEBER
                </h1>
                <div className="text-2xl md:text-3xl">🚚</div>
            </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-[#111111] tracking-tight">
                Recupere a confiança com resultados reais.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md mt-6">
                Sinta a transformação em até 30 dias com o Ativador de Crescimento Pro.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={scrollToOffer}
                className="bg-[#E67A00] hover:bg-[#d56b00] text-white text-lg px-8 py-6 h-auto rounded-full font-semibold shadow-lg shadow-[#E67A00]/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Quero testar sem pagar agora
              </Button>
            </motion.div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[face1, face2, face3, face4].map((face, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                     <img src={face} alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="font-medium">Mais de 12.000 homens confiam.</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F8F8F8] to-transparent z-10 md:hidden"></div>
            <img 
              src={heroImg} 
              alt="Homem sério olhando no espelho" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-[3/4]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100 max-w-[200px] hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#E67A00] fill-[#E67A00]" />
                <Star className="w-5 h-5 text-[#E67A00] fill-[#E67A00]" />
                <Star className="w-5 h-5 text-[#E67A00] fill-[#E67A00]" />
                <Star className="w-5 h-5 text-[#E67A00] fill-[#E67A00]" />
                <Star className="w-5 h-5 text-[#E67A00] fill-[#E67A00]" />
              </div>
              <p className="text-xs text-gray-600 font-medium">"Mudou minha autoestima completamente."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DOR EMOCIONAL */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="flex items-center justify-center gap-4 relative z-10">
                    <div className="relative w-1/2">
                        <img 
                            src={noCap} 
                            alt="Sem boné" 
                            className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]"
                        />
                    </div>
                    
                    <div className="text-[#4A2C1A]">
                        <MoveHorizontal className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                    </div>

                    <div className="relative w-1/2">
                        <img 
                            src={withCap} 
                            alt="Com boné" 
                            className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]"
                        />
                    </div>
                </div>
              <div className="absolute -inset-4 bg-[#4A2C1A]/5 rounded-2xl transform -rotate-1 z-0"></div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#111111]">
                O espelho não deveria ser seu inimigo.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Entradas e queda de cabelo afetam mais do que a aparência. Eles minam a confiança e aumentam a insegurança a cada dia que passa. Você começa a evitar fotos, usa bonés com mais frequência e sente que perdeu uma parte de quem você é.
              </p>
              <div className="pl-6 border-l-4 border-[#E67A00]">
                <p className="text-xl font-medium text-[#4A2C1A] italic">
                  "Mas existe um caminho simples, discreto e eficaz para retomar o controle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCAÇÃO SIMPLES */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#E67A00] font-bold tracking-wider text-sm uppercase mb-4 block">A Ciência</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Por que isso acontece?</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
            A queda capilar masculina é comum, muitas vezes causada por estresse ou genética. O couro cabeludo enfraquece com o tempo, mas <span className="font-bold text-[#111111]">não é culpa sua</span>. 
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#4A2C1A]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#4A2C1A]">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Enfraquecimento</h3>
                <p className="text-gray-600 text-sm">Fatores genéticos e hormonais reduzem a circulação no bulbo capilar.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#E67A00]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#E67A00]">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Estimulação</h3>
                <p className="text-gray-600 text-sm">O Ativador de Crescimento Pro reativa os folículos adormecidos.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#1E8E3E]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#1E8E3E]">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Crescimento</h3>
                <p className="text-gray-600 text-sm">Fios mais grossos, fortes e saudáveis voltam a preencher as falhas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. O PRODUTO */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-[#E67A00]/5 rounded-full blur-3xl transform scale-75"></div>
              <img 
                src={productImg} 
                alt="Ativador de Crescimento Pro Frasco" 
                className="relative z-10 w-3/4 md:w-full max-w-md drop-shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] leading-tight">
                Ativador de Crescimento Pro
              </h2>
              <p className="text-xl text-gray-600">
                Um spray dermocosmético masculino potente, desenvolvido para simplicidade e eficácia.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg">
                  <div className="bg-white p-2 rounded-full shadow-sm text-[#E67A00]">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#111111]">Spray 120ml</span>
                    <span className="text-sm text-gray-500">Dura o tratamento mensal completo</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg">
                  <div className="bg-white p-2 rounded-full shadow-sm text-[#E67A00]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#111111]">Aplicação Rápida</span>
                    <span className="text-sm text-gray-500">Apenas 2 minutos por dia</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-[#F8F8F8] rounded-lg">
                  <div className="bg-white p-2 rounded-full shadow-sm text-[#E67A00]">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#111111]">Resultados Visíveis</span>
                    <span className="text-sm text-gray-500">Primeiros sinais em até 30 dias</span>
                  </div>
                </li>
              </ul>

              <Button 
                onClick={scrollToOffer}
                className="bg-[#111111] hover:bg-black text-white text-lg px-8 py-6 rounded-full w-full md:w-auto mt-4"
              >
                Quero garantir o meu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMO USAR */}
      <section className="py-20 bg-[#4A2C1A] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Simples e Inevitável.
              </h2>
              <p className="text-white/80 text-lg">
                Projetado para a rotina do homem moderno. Sem cremes pegajosos, sem pílulas difíceis de engolir.
              </p>
              
              <div className="space-y-8 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Manhã</h4>
                    <p className="text-white/70">Borrife no couro cabeludo nas áreas afetadas logo após o banho ou ao acordar.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Noite</h4>
                    <p className="text-white/70">Repita o processo antes de dormir. O produto age enquanto você descansa.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E67A00] flex items-center justify-center font-serif text-xl border-none">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Consistência</h4>
                    <p className="text-white/70">Mantenha as aplicações por 30 dias para ver a mágica acontecer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={painImg} 
                alt="Homem aplicando spray" 
                className="rounded-2xl shadow-2xl opacity-90 border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. MINI CASH - TRUST */}
      <section className="py-16 bg-[#F0FDF4] border-y border-[#1E8E3E]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#1E8E3E]/10 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8 text-[#1E8E3E]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E8E3E] mb-6">
            Receba primeiro. Pague só depois.
          </h2>
          <p className="text-xl text-[#1E8E3E]/80 mb-10 max-w-2xl mx-auto">
            Confiamos tanto no nosso produto que assumimos todo o risco. Você não precisa pagar nada hoje.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-[#1E8E3E]/10">
               <span className="block font-bold text-lg mb-2">Zero Risco</span>
               <p className="text-sm text-gray-500">Se não chegar, você não paga.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-[#1E8E3E]/10">
               <span className="block font-bold text-lg mb-2">Sem Golpes</span>
               <p className="text-sm text-gray-500">Transparência total na entrega.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-[#1E8E3E]/10">
               <span className="block font-bold text-lg mb-2">Pagamento Seguro</span>
               <p className="text-sm text-gray-500">Link de pagamento enviado após entrega.</p>
             </div>
          </div>

          <div className="relative max-w-2xl mx-auto mt-12">
            <img 
              src={deliveryImg} 
              alt="Entrega segura" 
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
              <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg font-bold text-[#1E8E3E] shadow-lg flex items-center gap-2">
                <Truck className="w-5 h-5" /> Entrega Garantida
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OFERTA + PACOTES */}
      <section id="offer" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-[#111111]">Escolha o Plano Ideal</h2>
            <p className="text-gray-600">Invista na sua confiança com condições exclusivas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <Card className="border border-gray-100 hover:border-gray-200 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Iniciante</span>
                  <h3 className="text-2xl font-bold mt-2">1 Unidade</h3>
                  <p className="text-gray-500 text-sm mt-1">Para testar a adaptação</p>
                </div>
                <div className="mb-8">
                   <div className="text-4xl font-bold text-[#111111]">R$ 137</div>
                   <div className="text-sm text-gray-400 mt-2">À vista ou parcelado</div>
                </div>
                <img src={pack1} alt="1 Frasco" className="h-48 object-contain mx-auto mb-8" />
                <div className="mt-auto">
                  <a href="https://app.coinzz.com.br/checkout/1-unidade-57iea-0" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white border-2 border-[#111111] text-[#111111] hover:bg-gray-50 py-6 rounded-lg font-semibold mb-3">
                      Garanta o Seu Agora
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Featured */}
            <Card className="border-2 border-[#E67A00] shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E67A00] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                ⭐ Mais Escolhido
              </div>
              <CardContent className="p-8 flex flex-col h-full bg-[#FFFAF5]">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-[#E67A00] uppercase tracking-wide">Tratamento Recomendado</span>
                  <h3 className="text-2xl font-bold mt-2">2 Unidades</h3>
                  <p className="text-gray-500 text-sm mt-1">Foco em preenchimento</p>
                </div>
                <div className="mb-8">
                   <div className="text-4xl font-bold text-[#E67A00]">R$ 197</div>
                   <div className="text-sm text-[#E67A00]/70 mt-2 font-medium">Economize R$ 77</div>
                </div>
                <div className="flex justify-center mb-8 relative">
                   <img src={pack2} alt="2 Frascos" className="h-56 object-contain" />
                </div>
                <div className="mt-auto">
                  <a href="https://app.coinzz.com.br/checkout/2-unidades-lhjtl-0" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#E67A00] hover:bg-[#d56b00] text-white py-6 rounded-lg font-bold text-lg mb-3 shadow-lg shadow-[#E67A00]/20">
                      Garanta o Seu Agora
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border border-gray-100 hover:border-gray-200 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Completo</span>
                  <h3 className="text-2xl font-bold mt-2">3 Unidades</h3>
                  <p className="text-gray-500 text-sm mt-1">Tratamento intensivo 🔥</p>
                </div>
                <div className="mb-8">
                   <div className="text-4xl font-bold text-[#111111]">R$ 247</div>
                   <div className="text-sm text-gray-400 mt-2">Melhor custo-benefício</div>
                </div>
                <div className="flex justify-center mb-8">
                   <img src={pack3} alt="3 Frascos" className="h-48 object-contain" />
                </div>
                <div className="mt-auto">
                  <a href="https://app.coinzz.com.br/checkout/3-unidades-h1mib-0" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white border-2 border-[#111111] text-[#111111] hover:bg-gray-50 py-6 rounded-lg font-semibold mb-3">
                      Garanta o Seu Agora
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-center mt-12 text-[#1E8E3E] text-base font-bold flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            Garantia de 7 dias para testar — risco zero
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ + TRANSFORMACAO */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Transformation Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="bg-white p-4 rounded-xl shadow-sm">
                <span className="bg-gray-200 px-3 py-1 rounded text-xs font-bold mb-2 inline-block text-gray-600">ANTES</span>
                <img src={beforeImg} alt="Antes" className="w-full rounded-lg aspect-square object-cover" />
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-[#E67A00]/20">
                <span className="bg-[#E67A00] px-3 py-1 rounded text-xs font-bold mb-2 inline-block text-white">DEPOIS (30 DIAS)</span>
                <img src={afterImg} alt="Depois" className="w-full rounded-lg aspect-square object-cover" />
             </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-center mb-12">Dúvidas Frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm p-2">
            <AccordionItem value="item-1" className="border-b px-4">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline">Funciona para todo homem?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Sim, o Ativador de Crescimento Pro foi desenvolvido para atuar nos folículos masculinos, independente do tipo de cabelo. É eficaz para entradas, coroa e falhas na barba.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b px-4">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline">Em quanto tempo vejo sinais?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                A maioria dos homens nota redução na queda nos primeiros 10 dias e o surgimento de novos fios (penugem) entre 20 e 30 dias de uso contínuo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b px-4">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline">Como funciona o MiniCash?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                É simples: nós enviamos o produto primeiro. Você recebe, confere se está tudo certo, e só então enviamos o link para pagamento via Pix ou Cartão. Sem sustos, sem riscos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-none px-4">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline">Tem garantia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pb-6">
                Sim. Você tem 7 dias após o recebimento para testar. Se não gostar da fragrância, da textura ou se arrepender da compra, basta devolver o produto (mesmo usado) e não cobramos nada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FINAL CTA */}
          <div className="mt-20 text-center space-y-8">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
               <img src={confidentImg} alt="Homem confiante" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111]">
              Comece hoje sem risco.
            </h2>
            <Button 
              onClick={scrollToOffer}
              className="bg-[#E67A00] hover:bg-[#d56b00] text-white text-xl px-12 py-8 h-auto rounded-full font-bold shadow-2xl shadow-[#E67A00]/30 transition-all hover:scale-105"
            >
              Quero receber primeiro e pagar depois <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm text-gray-500">Oferta limitada enquanto durarem os estoques promocionais.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-2xl font-serif font-bold">AtivadorPro</div>
           <div className="flex gap-6 text-sm text-gray-400">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-white transition-colors">Rastrear Pedido</a>
           </div>
           <div className="text-sm text-gray-600">
             © 2026 Ativador de Crescimento Pro.
           </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
