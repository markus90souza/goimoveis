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

import { Footer } from '@/components/footer'
import { CalendarIcon, KeyIcon, SearchIcon } from '@/components/icons/icons'
import { PropertyCard } from '@/components/card/property'

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-[#f8f9fa] py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img alt="Mobg logo" className="h-8" src="/placeholder.svg" />
            <nav className="flex space-x-4">
              <a
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                href="#"
              >
                Home
              </a>
              <a
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                href="#"
              >
                Imóveis
              </a>
              <a
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                href="#"
              >
                Sobre nós
              </a>
            </nav>
          </div>
          <Button className="bg-[#6f42c1] text-white">
            Anuncie seu imóvel
          </Button>
        </div>
      </header>
      <main>
        <section className="relative">
          <img alt="Hero" className="w-full" src="/placeholder.svg" />
          <div className="absolute top-0 left-0 right-0 mx-auto mt-4 w-11/12">
            <Select>
              <SelectTrigger id="tipo-imovel">
                <SelectValue placeholder="Tipo de imóvel" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
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
            <Button className="bg-[#6f42c1] text-white">Ver imóveis</Button>
          </div>
        </section>
        <section className="container mx-auto mt-8 px-4">
          <h2 className="text-2xl font-bold">
            Entenda como é fácil alugar com a Mobg
          </h2>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <SearchIcon className="h-6 w-6 text-gray-700" />
              <span className="mt-2 text-sm">Busque</span>
              <span className="text-xs">
                Procure um imóvel utilizando nossa busca inteligente.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <CalendarIcon className="h-6 w-6 text-gray-700" />
              <span className="mt-2 text-sm">Visite</span>
              <span className="text-xs">
                Agende uma visita no dia e horário que preferir.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <KeyIcon className="h-6 w-6 text-gray-700" />
              <span className="mt-2 text-sm">Alugue</span>
              <span className="text-xs">
                Faça uma proposta e pronto. Tudo digital e sem burocracia.
              </span>
            </div>
          </div>
        </section>
        <section className="container bg-blue-300 mx-auto mt-8 px-4 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Recomendados para você</h3>
            <a className="text-sm text-[#6f42c1] hover:underline" href="#">
              Ver mais imóveis
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
