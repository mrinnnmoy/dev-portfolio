import React from 'react';

const Skills = () => {
    const skillsets = [
        {
            id: 0,
            name: "JavaScript",
            desc: "Programming Language",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
        },
        {
            id: 1,
            name: "TypeScript",
            desc: "Typed JavaScript",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        },
        {
            id: 2,
            name: "Solidity",
            desc: "Smart Contracts",
            image: "https://res.cloudinary.com/teepublic/image/private/s--3vBpnJtd--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1665248663/production/designs/35529713_.jpg",
        },
        {
            id: 3,
            name: "Rust",
            desc: "Systems Programming",
            image: "https://ih1.redbubble.net/image.3695673810.0317/st,small,507x507-pad,600x600,f8f8f8.jpg",
        },
        {
            id: 4,
            name: "React Js",
            desc: "Frontend Library",
            image: "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
        },
        {
            id: 5,
            name: "Next JS",
            desc: "React Framework",
            image: "https://img.icons8.com/color/512/nextjs.png",
        },
        {
            id: 6,
            name: "Node JS",
            desc: "Backend Runtime",
            image: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
        },
        {
            id: 7,
            name: "Express JS",
            desc: "Backend Framework",
            image: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
        },
        {
            id: 8,
            name: "Ether JS",
            desc: "Ethereum Library",
            image: "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
        },
        {
            id: 9,
            name: "Hardhat",
            desc: "Smart Contract Dev",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4i1wWF516fnkizp1WSDG5rnG8GfkQAVoVQ&s",
        },
        {
            id: 10,
            name: "Git",
            desc: "Version Control",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s",
        },
        {
            id: 11,
            name: "GitHub",
            desc: "Code Hosting",
            image: "https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg",
        },
        {
            id: 12,
            name: "Canva",
            desc: "Design Tool",
            image: "https://i.pinimg.com/736x/74/6d/77/746d77ef9b49afd5ec2306d39592d01e.jpg",
        },
        {
            id: 13,
            name: "ChatGPT",
            desc: "AI Assistant",
            image: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg",
        },
    ];

    return (
        <>
            <div className="skills">
                <div className="skills-header">
                    <h5>SKILLS</h5>
                    <h3>Languages, Frameworks & Tools.</h3>
                </div>

                <div className="skills-grid">
                    {skillsets.map((skillset) => (
                        <div className="skills-card" key={skillset.id}>
                            <img src={skillset.image} className='skills-icon' alt={`${skillset.name} banner`} />
                            <div className="skills-details">
                                <h4>{skillset.name}</h4>
                                <p>{skillset.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Skills;