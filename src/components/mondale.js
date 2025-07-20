import React from 'react';

function Modale({ isOpen, onClose, user }) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Profil GitHub</h2>
        <img src={user.avatar_url} alt="avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>Bio :</strong> {user.bio}</p>
        <p><strong>Lieu :</strong> {user.location}</p>
        <p><strong>Repos publics :</strong> {user.public_repos}</p>
        <p><strong>Followers :</strong> {user.followers}</p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
}

export default Modale;