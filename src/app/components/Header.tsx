import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-around  mb-7'  >
        <Image src={'/images/smallLogo.png'} width={200} height={90} alt ={"Ministry Log"} />
        <h2 className="font-bold text-3xl mt-14" >
            State Department of culture and heritage ushanga program 
        </h2>
        <Image src={'/images/ushangaLogo.png'} width={100} height={90} alt ={"Ministry Log"} />
    </div>
  )
}

export default Header