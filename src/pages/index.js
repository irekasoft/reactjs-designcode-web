import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
	grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    
    <div className="Hero">
      <div className="HeroGroup">
        <h1>DevCon</h1>
        <p>Welcome to the world of tech community.</p>
        <p>The magic people keeps you in the know about the things you care about. Find quick answers, explore your interests, and get personalized updates in your hand. </p>
        <Link to="/page-2/">Watch the Intro Video</Link>

        <div className="Logos">
        <img src = {require('../images/logo-react.png')} width="50"/>
          <img src = {require('../images/logo-xcode.png')} width="50"/>
          <img src = {require('../images/logo-sketch.png')} width="50"/> 
        </div>

        <Wave/>
        
      </div>
   
    </div>

      
    <br/>
    <br/>
    <div className="Cards">
    <h2>11 Courses, more coming</h2>
      
      <div className="CardGroup">
        <Card 
          title="React fro Designers"
          text="12 Sections"
          image={require('../images/wallpaper3.jpg')}
          /> 
        <Card 
          title="React fro Designers"
          text="12 Sections"
          image={require('../images/wallpaper3.jpg')}
          /> 
        <Card 
          title="React fro Designers"
          text="12 Sections"
          image={require('../images/wallpaper3.jpg')}
          />
        <Card 
          title="React fro Designers"
          text="12 Sections"
          image={require('../images/wallpaper3.jpg')}
          />   
      </div>

    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React."
    />

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
      
    <p>Hello, this is the footer</p>
  
  </div>
)

export default IndexPage
