import React from 'react'
import ProgressiveImage from 'react-progressive-image';

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className="skill_Card">
      <header className="skill_card__header">
        <img className="skill_card__icon" src={skill.icon} alt="HTML5 Logo" />
      </header>
      <section className="skill_card__body">
        <h4 className="skill_card__title">{skill.title}</h4>
        <span className="skill_card__duration">{`${skill.years} years of Experience`}</span>
      </section>
    </div>
  )
}

export default SkillCard