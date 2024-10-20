import Education from '@/components/education/education'
import Experience from '@/components/experience/experience'
import Faisandu from '@/components/faisandu/faisandu'
import Footer from '@/components/footer/footer'
import Santander from '@/components/santander/santander'
import Skills from '@/components/skills/skills'
import SuraComp from '@/components/sura/sura'
import Today from '@/components/today/today'
import Welcome from '@/components/welcome/welcome'
import WorkExperience from '@/components/workExperience/workExperience'

import React from 'react'

const Home = () => {
  return (
    <div className=' flex flex-col max-w-7xl mx-auto items-center justify-center '>
      <div className=' h-full flex items-center w-full justify-center'>
      <Welcome/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Skills/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Experience/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Education/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <WorkExperience/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Faisandu/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Santander/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <SuraComp/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Today/>
      </div>
      <div className=' h-full flex items-center max-w-6xl w-full justify-center'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home