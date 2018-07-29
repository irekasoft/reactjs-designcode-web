import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

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
    
  
  </div>
)

export default IndexPage
