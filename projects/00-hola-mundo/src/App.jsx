import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
  return(
    <section className='App'>
      <TwitterFollowCard isFollowing={false} userName= "Vizard16" name="Arturo Torres" />
      <TwitterFollowCard  isFollowing={true} userName= "presno2112" name="Sebastian Presno" />
    </section>
    

    
  )


}