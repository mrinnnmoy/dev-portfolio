import React from 'react';

// Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const TechnicalWriting = () => {
    const writings = [
        {
            id: 0,
            title: "Unleashing the Power of Ethereum: The Blockchain and EVM.",
            subtitle: "Ethereum and its Virtual Machine (EVM) have reshaped blockchain and crypto. This article breaks down its core concepts and explores its impact across industries.",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1698984695327/ee1d2dd5-29a7-4baf-8652-2c5d1f8a6c27.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            visitlink: "https://mrinnnmoy.hashnode.dev/unleashing-the-power-of-ethereum-the-blockchain-and-evm",
        },
        {
            id: 1,
            title: "Advanced concepts on Git & GitHub.",
            subtitle: "This article provides an in-depth knowledge about Git & GitHub, starting from Branches to Merge Conflicts and much more.",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1665633371676/1hQEfWHzf.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            visitlink: "https://mrinnnmoy.hashnode.dev/advanced-concepts-on-git-github",
        },
        {
            id: 2,
            title: "The Ultimate Memecoin Sniper.",
            subtitle: "Automate trades, snipe tokens and catch every moonshot with Zotto. The Ultimate guide to Ai-powered trading.",
            image: "https://pbs.twimg.com/media/GknUnP3boAAkXb0?format=jpg&name=large",
            visitlink: "https://x.com/mrinnnmoy/status/1894279527251030290",
        },
        {
            id: 3,
            title: "Your all-in-one headlth companion.",
            subtitle: "Track, Monitor & Own your wellness journey.",
            image: "https://pbs.twimg.com/media/GdVmNHYaoAEV5Wa?format=jpg&name=large",
            visitlink: "https://x.com/mrinnnmoy/status/1861506798961992180",
        },
    ];

    return (
        <>
            <div className="technical">
                <div className="technical-header">
                    <h5>WRITINGS</h5>
                    <h3>Technical Blogs & Threads</h3>
                </div>

                <div className="writing-list">
                    {writings.map((writing) => (
                        <div className="writing-card" key={writing.id}>
                            <a href={writing.visitlink} target='_blank' rel='noreferrer'>
                                <img src={writing.image} alt={`${writing.title} banner`} />
                                <div className="writing-details">
                                    <h4>{writing.title}</h4>
                                    <p>{writing.subtitle}</p>
                                </div>
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default TechnicalWriting;