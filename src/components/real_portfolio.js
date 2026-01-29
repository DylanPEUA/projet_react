
// Composant principal du portfolio : affiche une liste de réalisations sous forme de cards
import React from 'react';

// Liste des projets à afficher dans le portfolio
const portfolioItems = [
  {
    title: 'Fresh Food',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/fresh-food.jpg',
    footer: 'Site réalisé avec PHP et MySQL',
  },
  {
    title: 'Restaurant Akira',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/restaurant-japonais.jpg',
    footer: 'Site réalisé avec WordPress',
  },
  {
    title: 'Espace bien-être',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/espace-bien-etre.jpg',
    footer: 'Site réalisé avec LARAVEL',
  },
  {
    title: 'SEO',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/seo.jpg',
    footer: 'Utilisation des outils SEO',
  },
  {
    title: 'Création d\'une API',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/coder.jpg',
    footer: 'PHP - SYMPHONY',
  },
  {
    title: 'Maquette d\'un site web',
    description: 'Site de vente de produit frais en ligne',
    imgSrc: '/img/portfolio/screens.jpg',
    footer: 'Réalisé avec figma',
  },
];

function PortfolioCard({ title, description, imgSrc, footer }) {
  // Card individuelle pour un projet du portfolio
  return (
    <div className="border border-gray-300 rounded-md transition-all duration-200 hover:shadow-2xl hover:bg-gray-100">
      {/* Image du projet */}
      <div className="flex flex-col items-center justify-center text-white">
        <img
          src={imgSrc}
          alt={title}
          className="w-auto h-auto max-w-full"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      {/* Titre du projet */}
      <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">{title}</h3>
      {/* Description du projet */}
      <p className="text-black text-sm leading-relaxed mb-4">{description}</p>
      {/* Bouton d'action (exemple) */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded mb-4">
        Voir le site
      </button>
      {/* Footer de la card : techno ou info */}
      <div className="border-t border-gray-300 text-gray-700 text-sm bg-gray-100 text-center flex items-center justify-center h-8">
        {footer}
      </div>
    </div>
  );
}

// Composant qui affiche toutes les cards du portfolio
function Realportfolio() {
  return (
    <>
      {portfolioItems.map((item, index) => (
        <PortfolioCard
          key={index}
          title={item.title}
          description={item.description}
          imgSrc={item.imgSrc}
          footer={item.footer}
        />
      ))}
    </>
  );
}

export default Realportfolio;