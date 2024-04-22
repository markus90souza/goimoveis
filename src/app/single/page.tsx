/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cQVYd3kYYb6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PropertySinglePage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-xl font-semibold">
            Apartmento para alugar com 2 quartos, 100m²
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Todas as fotos</Button>
            <Button variant="secondary">Compartilhar</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img
              alt="Imóvel"
              className="w-full h-auto rounded-lg"
              height="400"
              src="/m.jpg"
              style={{
                aspectRatio: '600/400',
                objectFit: 'cover',
              }}
              width="600"
            />
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Descrição do imóvel</h2>
              <p className="mt-2 text-gray-600">
                Descubra seu próximo lar no Ed. Santorini, exclusividade da
                imobiliária Mobg. Este apartamento em Chapecó, no bairro
                Presidente Médici, ocupa um andar alto, oferecendo tranquilidade
                e uma vista deslumbrante. Com 100m², dispõe de 2 quartos, 1
                banheiro social e 1 vaga de garagem. Valorize a acessibilidade,
                com adaptações no mobiliário e detalhes de nível A. A unidade
                prima pela funcionalidade, com armários na cozinha, banheiro e
                lavanderia. O diferencial? Uma churrasqueira para seus momentos
                de lazer, além do conforto de um elevador.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Destaques</h3>
              <ul className="mt-2 space-y-2">
                <li>Edifício Novo</li>
                <li>Sol da Manhã</li>
                <li>Aceita Pet</li>
                <li>Elevador</li>
                <li>Móveis Sob Medida</li>
                <li>Vista Livre</li>
                <li>Bairro Seguro</li>
                <li>Andar Alto</li>
                <li>Churrasqueira</li>
                <li>Salão de Festas</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="sticky top-6">
              <div className="p-6 bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Em oferta</h2>
                  <Badge variant="secondary">Imóvel tem uma alta procura</Badge>
                </div>
                <div className="text-lg font-bold mb-4">
                  Somente aluguel: R$ 2.300
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Condomínio</span>
                    <span>R$ 350</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IPTU</span>
                    <span>R$ 93</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Proteção Contra Incêndio</span>
                    <span>R$ 25</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R$ 2.768</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full">Agendar visita</Button>
                  <Button className="w-full mt-2" variant="outline">
                    Quero fazer uma proposta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Mobília</h3>
          <p className="mt-2 text-gray-600">
            Armários na Cozinha, Armários na Lavanderia, Armários no Banheiro.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Eletrodomésticos e Eletrônicos</h3>
          <p className="mt-2 text-gray-600">Fogão Cooktop, Depurador de Ar.</p>
        </div>
      </div>
    </div>
  )
}
