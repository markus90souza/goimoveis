import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

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
            {Array.from({ length: 12 }).map((c, i) => (
              <Card className="w-full" key={i}>
                <img
                  alt="Property"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/m.jpg"
                  style={{
                    aspectRatio: '400/400',
                    objectFit: 'cover',
                  }}
                  width="400"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">Novo</Badge>
                    <span className="text-sm text-gray-500">REF: 2198</span>
                  </div>
                  <h2 className="text-lg font-semibold">Apartamento</h2>
                  <p className="text-lg font-semibold text-blue-600">
                    R$ 2.300
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <LocateIcon className="h-4 w-4 text-gray-500 mr-2" />
                    Presidente Médici, Chapecó
                  </div>
                  <div className="flex items-center mt-2">
                    <ExpandIcon className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">100m²</span>
                    <BedIcon className="h-4 w-4 text-gray-500 mx-4" />
                    <span className="text-sm text-gray-500">2 quartos</span>
                    <CarIcon className="h-4 w-4 text-gray-500 mx-4" />
                    <span className="text-sm text-gray-500">1 vaga</span>
                  </div>
                </div>
              </Card>
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

function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function ExpandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}

function TwitchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}
