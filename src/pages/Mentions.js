import { useState } from "react";
import {
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Section from '../components/section';

function Mentions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    // Accordéon : si la section est déjà ouverte, on ferme tout, sinon on ouvre la nouvelle
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Éditeur du site",
      content: (
        <div className="flex-1 text-left space-y-2">
          <h2 className="text-xl font-bold mb-4">John Doe</h2>

          <p className="flex items-center gap-2">
            <MapIcon className="h-5 w-5" />
            Ave du Prince Hinoi
          </p>

          <p className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            98714 Papeete, French Polynesia
          </p>

          <p className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            +689 87 00 00 00
          </p>
        </div>
      )
    },
    {
      title: "Hébergeur",
      content: (
        <div className="flex-1 text-left space-y-2">
          <h2 className="font-bold text-xl">alwaysdata</h2>
          <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>

          <p className="flex items-center gap-2">
            <GlobeAltIcon className="h-5 w-5" />
            <a
              href="https://www.alwaysdata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.alwaysdata.com
            </a>
          </p>
        </div>
      )
    },
    {
      title: "Crédits",
      content: (
        <div className="flex-1 text-left space-y-2">
          <h2 className="font-bold text-xl">Crédits</h2>
          <p>
            Ce site a été réalisé par John Doe, étudiant au{" "}
            <a
              href="https://www.centre-europeen-formation.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Centre Européen de Formation
            </a>
          </p>

          <p className="italic">
            Les images utilisées sur ce site sont libres de droits et ont été obtenues sur{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Pixabay
            </a>
          </p>

          <p className="italic">
            La favicon de ce site a été fournie par{" "}
            <a
              href="https://heroicons.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Heroicons
            </a>
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 ">Mentions Légales</h2>
        <div className="w-1/4 mx-auto h-1 bg-blue-500 mt-2 mb-12" />
      </div>

      <div className="w-3/4 mx-auto">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            isOpen={openIndex === index}
            onClick={() => toggleSection(index)}
            className={`
              ${index === 0 ? "mt-4" : ""}
              ${index === sections.length - 1 ? "mb-8" : ""}
            `}>
          
            {section.content}
          </Section>
        ))}
      </div>
    </>
  );
}

export default Mentions;