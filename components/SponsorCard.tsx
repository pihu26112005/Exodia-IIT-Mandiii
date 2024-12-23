import React from 'react';

// Define the types for the props
interface SponsorCardProps {
    name: string;
    logo: string;
    link: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, logo, link }) => {
    return (
        <div className="p-4 shadow-lg border-4 border-black rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={`/images/${logo}`}
                    alt={name}
                    className="mx-auto mb-4 rounded-full border-2 border-black"
                />
                <h3 className="text-lg font-semibold text-gold font-serif">{name}</h3>
            </a>
        </div>
    );
};

export default SponsorCard;