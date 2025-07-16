

import Hero from '@/components/mvpblocks/notebook'
import PhoneMockup from '@/components/ui/phone-mockup'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-between items-center'>
      <Hero/>
      <PhoneMockup/>
    </div>
  )
}

export default page
