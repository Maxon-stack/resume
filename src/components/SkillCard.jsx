import React from 'react'
import ProgressiveImage from 'react-progressive-image';

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className="skill_Card">
      <header className="skill_card__header">
        <img className="skill_card__icon" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo" />
      </header>
      <section className="skill_card__body">
        <h4 className="skill_card__title">{skill.title}</h4>
        <span className="skill_card__duration">6 ans d'expérience</span>
        <ul className="skill_card__knowledge">
          <li>HTML5</li>
          <li>Sémantique</li>
          <li>SVG</li>
          <li>Canvas</li>
        </ul>
      </section>
    </div>
  )
}

export default SkillCard