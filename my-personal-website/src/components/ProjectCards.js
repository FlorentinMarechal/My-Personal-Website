import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCards.css';
import githubLogo from '../public/image/github-logo.png'

const projects = [
    {name: "Chibi Cafe", description: "Une partie vitrine et une boutique pour un concept store vendant des sablés personnalisés", link: "https://github.com/FlorentinMarechal/chibi-cafe"},
    {name: "Bot discord KL", description: "Un bot discord permetant de lancer un vote afin de parier sur les épreuves de Koh Lanta", link: "https://github.com/FlorentinMarechal/discord-bot-kl"},
    {name: "Mon site de présentation", description: "Vous êtes dessus, un site vitrine fait avec React", link: "https://github.com/FlorentinMarechal/My-Personal-Website"},
    {name: "Portfolio", description: "Une API REST pour gérer une collection de jeux de sociétés", link: "https://github.com/FlorentinMarechal/portfolio"},
]

export default function ProjectCards() {

  return (
    <div className='project-cards'>
        <div className='cards-container'>
            {projects.map(project => (
                <div className='card'>
                    <div className='card-name'>
                        {project.name}
                    </div>
                    <div className='card-description'>
                        {project.description}
                    </div>
                    <div className='card-link'>
                        <Link to={project.link}>
                            <img src={githubLogo} alt="lien du projet" className='github-logo' />
                        </Link> 
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
