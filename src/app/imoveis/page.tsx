import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/card/property'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutGridIcon,
  ListIcon,
} from '@/components/icons/icons'

export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">MobG</span>
              <img
                alt="MobG logo"
                className="h-8 w-auto sm:h-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '100/40',
                  objectFit: 'cover',
                }}
                width="100"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              href="#"
            >
              {' '}
              Home{' '}
            </a>
            <a
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              href="#"
            >
              {' '}
              Imóveis{' '}
            </a>
            <a
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              href="#"
            >
              {' '}
              Sobre nós{' '}
            </a>
          </nav>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              href="#"
            >
              Anuncie seu Imóvel
            </a>
          </div>
        </div> */}
      </div>
      <div>
        <div className="max-w-7xl px-6 mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            121 imóveis encontrados em Chapecó
          </h1>
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-2">
              <Button variant="outline">Ordenar por: Mais recentes</Button>
              <Button variant="outline">Filtros</Button>
            </div>
            <div className="flex space-x-2">
              <LayoutGridIcon className="h-6 w-6 text-gray-400" />
              <ListIcon className="h-6 w-6 text-gray-900" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
            <span className="text-gray-900">1 de 7</span>
            <ChevronRightIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
      {/* <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Newsletter
              </h3>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
                  id="email-address"
                  name="email-address"
                  placeholder="Digite seu e-mail"
                  required
                  type="email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button variant="default">Enviar</Button>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Explorar
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Anuncie seu Imóvel
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Sobre nós
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      className="text-base text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Sobre a Mobg
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Redes Sociais
              </h3>
              <div className="mt-4 flex space-x-6">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-400">
              © 2024 Mobg - CRECI-SC 7138J
            </p>
            <div className="mt-8 md:mt-0 md:order-1">
              <a
                className="text-base text-gray-400 hover:text-gray-500"
                href="#"
              >
                Queremos o seu Feedback
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
