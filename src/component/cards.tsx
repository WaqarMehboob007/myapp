import Image from 'next/image'
import React from 'react'
import {VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import {useState} from 'react'
import { Data } from '@/app/page'
import Link from 'next/link'

const Cards = (props:{bgImage:string[], data:Data, greeting:string}) => {
    const RelatedImages = props.bgImage;

    const [curIndex, setcurIndex] = useState(0);

    const NextImage = ()=> {
            curIndex < RelatedImages.length-1? setcurIndex(curIndex+1):setcurIndex(0);
    }
    const PrevImage = ()=> {
            curIndex > 0? setcurIndex(curIndex-1):setcurIndex(RelatedImages.length-1);
    }
  return (
    <div className='md:max-w-2xl'>
    
          <div className='group relative md:h-96 h-60'>
                <div className='relative items-center group z-10'>
                    <div className='flex md:w-[40rem] md:h-96 h-60 border bg-orange-100 '>
                        <Image 
                                src={RelatedImages[curIndex]} 
                                alt={`featureProduct`} 
                                width={400} height={400} 
                                className='w-full object-fill'
                                >
                        </Image>
                      </div>                    
                </div>
                <div>
                    <p className='mt-3 text-slate-500'>Customer Preference</p>
                    <p className='mb-3 text-red-800'>10$ </p>
                </div>
                    <div className='w-full h-full absolute top-0 left-0 z-10'>
                        <div className='flex flex-col w-full h-5/6 items-start justify-between md:space-y-4'>
                            <div className='flex flex-col w-full items-center justify-center mt-10'>
                                <p className='md:text-xl font-bold text-red-800 bg-gradient-to-l from-white bg-opacity-70 p-2'>
                                    {props.greeting}
                                </p>
                                <p className='capitalize text-am md:text-lg text-center text-orange-600 font-bold bg-opacity-50'>
                                {props.data.to}
                                </p>
                            </div>

                            
                            <div className='flex flex-col w-full'>
                                <p className='capitalize text-xs md:text-sm text-center text-white bg-opacity-50 bg-black'>
                                From: {props.data.from}
                                </p>

                                <div className='opacity-[0.85] bg-gradient-to-r from-blue-200 to-green-300 p-2 w-full md:h-16 h-12 md:overflow-auto overflow-y-scroll'>
                                    <p className='capitalize text-xs md:text-sm text-center opacity-100'>
                                    {props.data.message}
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div className='invisible group-hover:visible'>
                            <div className='absolute top-1/2 p-2 left-0 z-30 bg-gray-50 bg-opacity-70 cursor-pointer' onClick={()=> PrevImage()}>
                                  <VscChevronLeft></VscChevronLeft>
                            </div>
                            <div className='absolute top-1/2 p-2  right-0 z-30 bg-gray-50 bg-opacity-70 cursor-pointer' onClick={()=> NextImage()}>
                                  <VscChevronRight></VscChevronRight>
                            </div>
                            <div className='absolute bg-gray-50 bottom-0  z-30 w-[95%] m-2 h-10 p-2 bg-opacity-70 text-center'>
                                  
                                  <Link href={'/contactUS'} className='flex w-full justify-center'>Quick Buy</Link>
                            </div>
                            
                      </div>   
                
                
          </div>
          
             
</div>
  )
}

export default Cards

