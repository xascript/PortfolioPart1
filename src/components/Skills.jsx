import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import MongoDB from '../assets/mongo.png'
import Node from '../assets/node.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
    {/** Container */}

    <div  className='max-w-[1000px] mx-auto px-4 flax flex-col justify-center w-full h-full'>
    <div>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
    <p className='py-4'>These are the technologies I've worked with</p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
    <p>HTML</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
    <p>CSS</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
    <p>Javascript</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={ ReactImg } alt="HTML icon" />
    <p>REACT</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
    <p>FIREBASE</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
    <p>AWS</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
    <p>GITHUB</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
    <p>TAILWIND</p>
    </div>
    
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={MongoDB} alt="HTML icon" />
    <p>MONGODB</p>

    </div>
    <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
    <p>NODE</p>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Skills