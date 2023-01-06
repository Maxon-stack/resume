import React from 'react'
import ProgressiveImage from 'react-progressive-image';

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className='skill_Card'>
      <div className='images'>
      <img src={skill.logo} />
      
      </div>
    </div>
  )
}

export default SkillCard