import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCards.css';
import githubLogo from '../public/image/github-logo.png'

const projects = [
    {id: 1,name: "Chibi Cafe", description: "Une boutique pour un concept store vendant des sablés personnalisés", link: "https://github.com/FlorentinMarechal/chibi-cafe"},
    {id: 2,name: "Bot Denis", description: "Un bot discord pour parier sur les épreuves de Koh Lanta", link: "https://github.com/FlorentinMarechal/discord-bot-kl"},
    {id: 3,name: "Mon site", description: "Vous êtes dessus, un site vitrine fait avec React", link: "https://github.com/FlorentinMarechal/My-Personal-Website"},
    {id: 4,name: "Portfolio", description: "Une API REST pour gérer une collection de jeux de sociétés", link: "https://github.com/FlorentinMarechal/portfolio"},
]

export default function ProjectCards() {

    function overCard(e) {
        if(e.target.className === 'card') {
            e.target.className = 'card-over';
            for(const div of e.target.children) {
                if(div.className === 'card-name') div.className = 'card-name-over'
                if(div.className === 'card-description') div.className = 'card-description-over'
            }
        }

        if(e.target.className === 'card-name'){
            e.target.className = 'card-name-over';
            e.target.parentNode.className = 'card-over';
            if(e.target.nextElementSibling.className === 'card-description') e.target.nextElementSibling.className = 'card-description-over';
        }
        
        if(e.target.className === 'card-description'){
            e.target.className = 'card-description-over';
            e.target.parentNode.className = 'card-over';
            if(e.target.previousElementSibling.className === 'card-name') e.target.previousElementSibling.className = 'card-name-over';
        }

        if(e.target.className === 'card-link'){
            e.target.parentNode.className = 'card-over';
            console.log(e.target.previousElementSibling);
        }

    }

    function outCard(e) {
        if(e.target.className === 'card-over') {
            e.target.className = 'card';
            for(const div of e.target.children) {
                if(div.className === 'card-name-over') div.className = 'card-name'
                if(div.className === 'card-description-over') div.className = 'card-description'
            }
        }

        if(e.target.className === 'card-name-over'){
            e.target.className = 'card-name';
            e.target.parentNode.className = 'card';
            if(e.target.nextElementSibling.className === 'card-description-over') e.target.nextElementSibling.className = 'card-description';
        }

        if(e.target.className === 'card-description-over'){
            e.target.className = 'card-description';
            e.target.parentNode.className = 'card';
            if(e.target.previousElementSibling.className === 'card-name-over') e.target.previousElementSibling.className = 'card-name';
        }
    }

  return (
    <div className='project-cards'>
        <div className='cards-container'>
            {projects.map(project => (
                <div className='card'
                     onMouseEnter={overCard}
                     onMouseLeave={outCard}
                     key={project.id}
                >
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
