import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface CountdownProps {
  language: string
}

const Countdown: React.FC<CountdownProps> = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0)

  useEffect(() => {
    const countDownDate =
      new Date('July 29, 2023 09:00:00 GMT+0100').getTime() + 60 * 60 * 1000

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      setTimeLeft(distance)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center pt-5">
      <div className="text-xl mb-4 lg:text-4xl">
        {language === 'pt-BR'
          ? 'Contagem Regressiva'
          : language === 'en-US'
          ? 'Countdown to our Wedding'
          : 'Nedtelling til bryllupet vårt'}
      </div>
      <div className="text-xl lg:text-4xl font-bold mb-8">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
      <Link
        href="https://www.twitch.tv/pandinhaow"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[var(--primary-color-dark)] hover:bg-[var(--primary-color)] text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        {language === 'pt-BR'
          ? 'Assista ao Vivo na Twitch as 06:00 AM'
          : language === 'en-US'
          ? 'Join the Live Stream on Twitch at 11:00 AM'
          : 'Se Live Stream på Twitch - 11:00'}
      </Link>
      <div className="text-sm text-[var(--error)] mt-4 max-w-[800px] text-center px-4">
        {language === 'pt-BR'
          ? 'O link estará disponível 5 minutos antes da cerimonia começar.Não se preocupe, a cerimônia dura em torno de 10 minutos.'
          : language === 'en-US'
          ? "The link will be available 5 minutes before the ceremony starts.Don't worry, the ceremony lasts around 10 minutes."
          : 'Lenken vil være tilgjengelig 5 minutter før seremonien starter.Ikke bekymre deg, seremonien varer rundt 10 minutter.'}
        *
      </div>
      <div className="text-sm text-[var(--error)] mt-4 max-w-[800px] text-center px-4">
        {language === 'pt-BR'
          ? 'Você será direcionado para o meu canal na twitch, a transmissão ficara disponível nesse canal assim que começar então no se preocupe é so aguardar na pagina que você será direcionado!'
          : language === 'en-US'
          ? "You will be directed to my Twitch channel, the broadcast will be available on this channel as soon as it starts so don't worry, just wait on the page you will be directed to!"
          : 'Du vil bli sendt til min Twitch-kanal, sendingen vil være tilgjengelig på denne kanalen så snart den begynner, så ikke bekymre deg, bare vent på siden du vil bli sendt til!'}
      </div>
    </div>
  )
}

export default Countdown
