import React from 'react'

type Props = {}

function About({}: Props) {
  return <>
    <div className="w-full my-6">
		<div className='mx-auto w-full xl:container px-4 flex items-center'>
            <div className="w-full rounded-[3px] text-mainBlack font-semibold p-3 text-justify  bg-lightWhite">
              {`Bairh Radiateur, située à Fès, Maroc. Est une entreprise renommée avec une expérience de 10 ans dans le domaine de vente et réparation des radiateurs pour automobiles et poids lourds. Spécialisée dans l'importation de la Chine, la société propose plus de 500 modèles de radiateurs, couvrant un large éventail de besoins. Elle opère à travers tout le Maroc, assurant une distribution efficace et rapide de ses produits. Dotée d'un atelier dédié à la réparation, au montage et au graissage. Bairh Radiateur offre un service complet à ses clients, tant en gros qu'en détail. De plus, elle se distingue par sa politique de livraison gratuite au niveau de Fès, contribuant ainsi à la satisfaction et à la fidélisation de sa clientèle.
              `}
            
            </div>
        </div>
    </div>
    
  </>
}

export default About