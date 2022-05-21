import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Développeur - Les Entrecodeurs</h4>
                <h5>Novembre 2021 - Décembre 2021</h5>
                <p>
                    J'ai eu pour mission de créer un script bash de déployement de projet git a partir d'un commit bien précis. Ce fut ma première experience professionelle dans le développement.
                </p>
            </div>
            <div className="exp-2">
                <h4>Développeur</h4>
                <h5>Juin 2022</h5>
                <p>
                    J'ai eu pour mission de créer un site internet pour un restaurant. Le site en question est capable de recevoir les menus à la semaine dynamiquement.
                </p>
            </div>
           
        </div>
    );
};

export default Experience;