/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BathIcon, BedIcon, CarIcon } from '../icons/icons'
import Image from 'next/image'

export function PropertyCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Apartamento</CardTitle>
        <CardDescription>R$ 2.950,00</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          objectFit="cover"
          alt="Imagem do Apartamento"
          className="w-full h-auto"
          height="200"
          src="/m.jpg"
          style={{
            aspectRatio: '350/200',
          }}
          width="350"
        />
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center space-x-1">
            <BedIcon className="h-5 w-5" />
            <span>3</span>
          </div>
          <div className="flex items-center space-x-1">
            <BathIcon className="h-5 w-5" />
            <span>2</span>
          </div>
          <div className="flex items-center space-x-1">
            <CarIcon className="h-5 w-5" />
            <span>1</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Detalhes</Button>
        <Button>Agendar Visita</Button>
      </CardFooter>
    </Card>
  )
}
