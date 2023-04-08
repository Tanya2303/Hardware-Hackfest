import React from 'react'
import HeroHomeImg from "../assets/hero.svg"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center mt-4">

        <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
          <div className='text-white'>
            <h1 className='text-3xl md:text-6xl'>About Us</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Plants require proper care and maintenance, including adequate watering, to thrive and grow. If plants do not receive the proper amount of water, they can wither, wilt, or even die. Similarly, ensuring the safety and security of your home when you are away is crucial to protect your belongings and loved ones from potential intruders or accidents.</p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroHomeImg} alt="img" width="350" height="350" />
          </div>
        </div>

        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1 text-white">
          <h1 className="text-5xl font-semibold mt-20 mb-10">
            Keep your home safe and water your plants
          </h1>

          <span className="text-center font-bold text-xl my-20">
            <p className=''>Ensure safety of home</p>

            <hr className="h-[0.15rem] w-96 my-4 bg-white" />

            <p className=''>Know water requirements of your plants</p>


            <hr className="h-[0.15rem] w-96 my-4 bg-white" />

            <p className=''>Get the live information through the website</p>

          </span>
        </section>

        <section className="p-20 space-y-8">
          <div className='text-white'>
            <h1 className='text-5xl'>Tips to keep home safe:</h1>
            <ul className="text-xl ml-5 py-4">
              <li className="list-disc py-1">Safely store spare keys.</li>
              <li className="list-disc py-1">Keep an eye on your home.</li>
              <li className="list-disc py-1">Increase gate and fence security.</li>
              <li className="list-disc py-1">Light up the front drive and garden.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
