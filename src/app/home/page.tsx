/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select'
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import Link from 'next/link'

import { Footer } from '@/components/footer'
import { CalendarIcon, HomeIcon, SearchIcon } from '@/components/icons/icons'

export default function Component() {
  return (
    <div className="bg-white">
      <header className="bg-[#f3f4f6] py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img
              alt="Mobg Logo"
              className="h-10"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: '100/40',
                objectFit: 'cover',
              }}
              width="100"
            />
            <nav className="flex space-x-4">
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Home
              </a>
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Imóveis
              </a>
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Sobre nós
              </a>
            </nav>
          </div>
          <Button variant="secondary">Anuncie seu imóvel</Button>
        </div>
      </header>
      <main>
        <section className="bg-[#e0e7ff] py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                A melhor experiência de aluguel em Chapecó
              </h1>
              <p className="text-gray-600 mb-6">
                Já está certo a respeito do contrato idealizado, a Mobg
                providencia a eficiência. Após concretizar o laço de segurança,
                detendo a base da burocracia das imobiliárias tradicionais. Com
                a Mobg, sua experiência é 100% digital.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger id="tipo-imovel">
                    <SelectValue placeholder="Tipo de imóvel" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="aluguel-venda">
                    <SelectValue placeholder="Aluguel ou Venda" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="aluguel">Aluguel</SelectItem>
                    <SelectItem value="venda">Venda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="mt-4">Ver imóveis</Button>
            </div>
            <img
              alt="Imóveis"
              className="col-span-1"
              height="300"
              src="/m.jpg"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width="400"
            />
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Entenda como é fácil alugar com a Mobg
            </h2>
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col items-center">
                <SearchIcon className="h-6 w-6 text-gray-600 mb-2" />
                <p className="font-semibold text-gray-600">Busque</p>
                <span className="text-sm text-gray-500">
                  Procure um imóvel utilizando nossa busca inteligente.
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CalendarIcon className="h-6 w-6 text-gray-600 mb-2" />
                <p className="font-semibold text-gray-600">Visite</p>
                <span className="text-sm text-gray-500">
                  Agende uma visita no dia e horário que preferir.
                </span>
              </div>
              <div className="flex flex-col items-center">
                <HomeIcon className="h-6 w-6 text-gray-600 mb-2" />
                <p className="font-semibold text-gray-600">Alugue</p>
                <span className="text-sm text-gray-500">
                  Faça uma proposta e pronto. Tudo digital e sem burocracia.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recomendados para você</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4" />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link
                    className="text-indigo-600 hover:text-indigo-800"
                    href="#"
                  >
                    Ver mais imóveis
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Selecionados por nós
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="flex flex-col bg-white p-4 rounded-lg">
                <img
                  alt="Bairro seguro"
                  className="mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '300/200',
                    objectFit: 'cover',
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Bairro seguro
                </h3>
                <p className="text-sm text-gray-600">
                  Segurança para você viver tranquilo e relaxado.
                </p>
              </div>
              <div className="flex flex-col bg-white p-4 rounded-lg">
                <img
                  alt="Condomínio completo"
                  className="mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '300/200',
                    objectFit: 'cover',
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Condomínio completo
                </h3>
                <p className="text-sm text-gray-600">
                  Piscina, churrasqueira, academia e muitos mais.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col bg-white p-4 rounded-lg">
                <img
                  alt="Com mobília"
                  className="mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '300/200',
                    objectFit: 'cover',
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Com mobília
                </h3>
                <p className="text-sm text-gray-600">
                  Conforto e praticidade para você morar tranquilo.
                </p>
              </div>
              <div className="flex flex-col bg-white p-4 rounded-lg">
                <img
                  alt="Aceita pet"
                  className="mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '300/200',
                    objectFit: 'cover',
                  }}
                  width="300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Aceita pet
                </h3>
                <p className="text-sm text-gray-600">
                  Imóveis que aceitam a parte da sua família pet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Imóveis mais acessados
            </h2>
            <div className="grid grid-cols-4 gap-4" />
          </div>
        </section>
        <section className="bg-[#312e81] py-16">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Receba atendimento personalizado
            </h2>
            <p className="mb-6">
              A Mobg te ajuda a encontrar um imóvel do jeito que você gostaria.
              Preencha o formulário e aguarde nosso retorno. Estaremos em
              contato com você.
            </p>
            <Button variant="secondary">Quero atendimento personalizado</Button>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Destaques do blog
            </h2>
            <div className="grid grid-cols-3 gap-4" />
            <div className="flex justify-end mt-4">
              <Link className="text-indigo-600 hover:text-indigo-800" href="#">
                Ver todos os posts
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Os bairros mais populares de Chapecó
            </h2>
            <div className="grid grid-cols-6 gap-4 mb-12" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Mais populares
                </h3>
                <ul className="text-sm text-gray-600">
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Apartamentos para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Casas para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Salas comerciais para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Apartamentos mobiliados para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Casas mobiliadas para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Barracões para alugar em Chapecó
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Mais recentes
                </h3>
                <ul className="text-sm text-gray-600">
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Apartamentos com mobília de R$1.510 reais para alugar em
                      Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Salas comerciais no Centro para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Apartamentos no Centro para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Casas no Centro para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Apartamentos mobiliados para alugar em Chapecó
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-800" href="#">
                      Casas com móveis sob medida para alugar em Chapecó
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
