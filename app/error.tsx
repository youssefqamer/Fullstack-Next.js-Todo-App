'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image';
import Error from './images/error.jpg';
const error = () => {
  return (
    <html>
    <body>
    <div className="h-screen flex justify-center items-center">
      <div className=" p-4 rounded-md flex flex-col items-center space-y-2">
        <div className="w-14 h-14 relative ">
          <Image
            src={Error}
            layout="fill"
            objectFit="contain"
            className="text-red-400"
            alt='error'
          />
        </div>
        <p className="text-red-800 text-center">Something went wrong!</p>
        <p className="text-red-600 text-center">Please try again later.</p>
        <Button className="mt-4">Try again</Button>
      </div>
    </div>
    </body>
  </html>
  )
}

export default error