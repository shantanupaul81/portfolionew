import Achievements from '@/components/Achievements'
import ContactUs from '@/components/ContactUs'
import ContactUsForm from '@/components/ContactUsForm'
import ExperienceSection from '@/components/ExperienceSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import SkillSections from '@/components/SkillSections'
import Timeline from '@/components/Timeline'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <SkillSections/>
      <ExperienceSection/>
      <Projects/>
      <Timeline/>
      <Achievements/>
      <ContactUs/>
      <ContactUsForm/>
    </div>
  )
}

export default page