import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/icons'

export const Footer = () => {
  return (
    <footer className="bg-green-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Receba novidades no seu e-mail
            </h3>
            <div className="flex space-x-2">
              <Input placeholder="Digite seu e-mail" type="email" />
              <Button>Enviar</Button>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Explorar
              </h3>
              <ul className="text-sm text-gray-600">
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Seu aluguel definitivo
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Imóveis Residenciais
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Apartamentos em Chapecó
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Casas em Chapecó
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Bairros de Chapecó
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Descontos para Estudantes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Sobre nós
              </h3>
              <ul className="text-sm text-gray-600">
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Fale com a Mobg
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Termos
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800" href="#">
                    Política de privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-2">
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <span className="text-sm text-gray-500">
            © 2024 Mobg - CNPJ: 00.000.000/0001-00
          </span>
          <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
            Queremos o seu Feedback
          </a>
        </div>
      </div>
    </footer>
  )
}
