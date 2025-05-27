import React from 'react'

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg"},
  { text: "Concepts", imgPath: "/images/concepts.svg"},
  { text: "Projects", imgPath: "/images/projects.svg"},
]

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='top-0 absolute left-0 z-10'>
            <img src='/images/bg.png' alt='Background'/>
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
              <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                  <h1>
                    Shaping
                    <span className='slide'>
                      <span className='wrapper'>
                        {words.map((word) => (
                          <span key={word.text} className='flex items-center gap-1 md:gap-3 pb-2'>
                            <img src={word.imgPath} alt={word.text} />
                            <span className='text'>{word.text}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  <h1>into Real Projects</h1>
                  <h1>that Deliver Results</h1>
                </div>
              </div>
            </header>
        </div>
    </section>
  )
}

export default Hero