import Link from "next/link";
import{FaGithub, FaLinkedin,  FaFacebook, FaInstagram} from "react-icons/fa";

const socials =[
    {icon: <FaGithub />, path: 'https://github.com/shaikathazra'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/shaikathazra/'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/shaikat.hazra.bd/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/shaikathazra/'},

]

const Social =({containerStyles, iconStyles}) =>{
    return (<div className={containerStyles}>
                {socials.map((item, index)=>{
                    return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                })}
            </div>);
};

export default Social;