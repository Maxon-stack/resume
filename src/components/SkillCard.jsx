import React from 'react'
import ProgressiveImage from 'react-progressive-image';

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className='skill_Card'>
      <div className="thumb"
        style={{
          backgroundImage: `url(${skill.logo})`
        }}></div>
      <div className='custom_area'>
        <h1>{skill.title}</h1>
        <p>Years: {skill.years}</p>

      </div>

    </div>
  )
}

export default SkillCard