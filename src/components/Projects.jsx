import React from 'react';

// Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projectLists = [
        {
            id: 0,
            title: "DonateX",
            subtitle: "A clear and efficient donation platform that matches contributions and automates payments for easy fundraising.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
        {
            id: 1,
            title: "Agora",
            subtitle: "De-Centralized platform for creators to mint & sell digital goods directly.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
        {
            id: 2,
            title: "RugSafe",
            subtitle: "A blockchain-native API designed to detect and mitigate rug pull risks in crypto projects.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
        {
            id: 3,
            title: "Kosmos",
            subtitle: "Decentralised application for NFT-based event management & ticketing with enhanced transparency and ownership.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
        {
            id: 4,
            title: "Trendr",
            subtitle: "An AI-powered bot that tracks crypto influencers, analyzes trends and auto-trades meme coins on Solana to catch viral opportunities.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
        {
            id: 5,
            title: "NFTFlex",
            subtitle: "A social media embed for Solana NFTs, showcasing ownership and enabling NFT liquidation into any token instantly.",
            visitLink: "#",
            image: "/assets/pre-project-img.jpg",
        },
    ];

    return (
        <>
            <div className="project">
                <div className="project-header">
                    <h5>RECENT</h5>
                    <h3>PROJECTS</h3>
                </div>

                <div className="project-list">
                    {projectLists.map((projectList) => (
                        <div className="project-card" key={projectList.id}>
                            <img src={projectList.image} alt={`${projectList.title} banner`} />
                            <div className="project-details">
                                <h4>{projectList.title}</h4>
                                <p>{projectList.subtitle}</p>
                            </div>
                            <a href={projectList.visitLink} target='_blank' rel='noreferrer'>
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Projects;