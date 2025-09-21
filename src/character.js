import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Characters() {
  const containerRef = useRef(null);
  const characterData = [
    {
      name: "Frieren",
      img: "public/frieren.webp",
      hair: "Silver",
      debut: "Chapter 1",
      tags: ["Elf", "Mage"],
    },
    {
      name: "Himmel",
      img: "public/Himmel.webp",
      hair: "Blue",
      debut: "Chapter 1",
      tags: ["Human", "Hero"],
    },
    {
      name: "Eisen",
      img: "public/Eisen.jpeg",
      hair: "Brown",
      debut: "Chapter 1",
      tags: ["Dwarf", "Vanguard"],
    },
    {
      name: "Heiter",
      img: "public/Heiter.webp",
      hair: "Green",
      debut: "Chapter 1",
      tags: ["Human", "Priest","Alcoholic"],
    },
    {
      name: "Fern",
      img: "public/Fern.webp",
      hair: "Purple",
      debut: "Chapter 2",
      tags: ["Human", "Mage"],
    },
    {
      name: "Stark",
      img: "public/Stark.webp",
      hair: "Red with Black Roots",
      debut: "Chapter 10",
      tags: ["Human", "Warrior"],
    },
    {
      name: "Goddess of Creation",
      img: "public/Goddess_of_Creation.webp",
      hair: "White",
      debut: "Chapter 24",
      tags: ["God", "Creator"],
    },
    {
      name: "Flamme",
      img: "public/Flamme.webp",
      hair: "Orange",
      debut: "Chapter 7",
      tags: ["Human", "Great Mage"],
    },

  ];
   useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".character-card");

    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -50, 
        scrollTrigger: {
          trigger: card,
          start: "top bottom", 
          end: "bottom top",   
          scrub: true,         
        },
      });
    });
  }, []);

  return (
     <div className="character-parallax-container" ref={containerRef}>
      <div className="character-container">
        {characterData.map((char, index) => (
          <div key={index} className="character-card">
            <img src={char.img} alt={char.name} />
            <div className="character-name">{char.name}</div>
            <div className="character-info">Hair: {char.hair}</div>
            <div className="character-info">Debut: {char.debut}</div>
            <div>
              {char.tags.map((tag, i) => (
                <span key={i} className="character-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
