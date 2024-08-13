import React from 'react'
import ConfirmImage from "../../../assets/general/ILL.png"
import Image from 'next/image'

type Props = {}

function ConfirmMessage({}: Props) {
  return (
    <div className='flex flex-col items-center my-4'>
        <h1 className="text-right text-2xl text-red">!نشكركم على ثقتكم في خدماتنا</h1>
        <h1 className="text-right text-lg text-red font-semibold mb-3">Nous vous remercions pour votre confiance!</h1>
        <h1 className="text-right text-xl text-blue">سنتواصل معكم في أقرب وقت ممكن</h1>
        <h1 className="text-right text-md text-blue font-semibold">Nous vous contacterons dans les plus brefs délais</h1>

        <div className='w-[600px] max-w-full aspect-video relative mt-4'>
            <Image src={ConfirmImage}  fill={true} alt={`pic`} />
        </div>
    </div>
  )
}

export default ConfirmMessage