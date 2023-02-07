import { useContext } from "react";
import { ThemeContext } from "../App";

const SocialIcon =( {ikon, link})=>{
    const theme= useContext(ThemeContext);

    return (<a 
        href="" 
        className='social-icon'
        target="_blank"
        rel="moreferrer">
        <i className={`fab fa-${ikon}`}></i>
    </a>
    );
};

export default function Footer(){
    const social =[
        {icon: "facebook", link: "https://www.facebook.com"},
        {icon: "twitter", link: "https://www.twitter.com"},
        {icon: "instagram", link: "https://www.instagram.com"}
    ];

    const theme = useContext(ThemeContext);
    return (
        <div className={`footer ${theme}`}>
            <ul>
                {social.map((social, index) =>{
                    return (
                        <li key={index}>
                            <SocialIcon icon={social.icon} link={social.link} />
                        </li>
                    );
                })}  
            </ul>
        </div>    
    );
}