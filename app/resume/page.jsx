"use client";

import{ FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import{ SiTailwindcss, SiNextdotjs } from "react-icons/si";


//about data
const about = {

    title:"About me",
    description: "Hi, I’m Shaikat Hazra, a Computer Science student with over 6+ years of experience in web design and development. I’m a skilled full-stack developer and an aspiring AI/ML engineer, passionate about creating innovative web solutions and building AI/ML models. I love working with modern technologies, including WordPress, and enjoy solving problems through research and development.",
    info:[
        {
            fieldName: "Name",
            fieldValue:"Shaikat Hazra",
        },
        {
            fieldName: "Phone",
            fieldValue:"(+880) 172 7036 791",
        },
        {
            fieldName: "Experience",
            fieldValue:"6+ Years",
        },
        {
            fieldName: "Email",
            fieldValue:"Shaikathazra@gmail.com",
        },
        {
            fieldName: "Linkdin",
            fieldValue:"shaikathazra",
        },
        {
            fieldName: "Freelance",
            fieldValue:"Available",
        },
        {
            fieldName: "Nationality",
            fieldValue:"Bangladeshi",
        },
        {
            fieldName: "Language",
            fieldValue:"Bangla, English, German",
        },
        
        

    ],

};

//experience data
const experience = {
    icon: '/icon/assets/badge.svg',
    title: "My experience",
    description:"I specialize in web development and AI/ML, crafting innovative solutions that meet unique business needs. My experience spans a variety of projects, where I focus on delivering high-quality, impactful results.",
    items:[
        {
            company:"OldBongo",
            position:"lead Web Developer",
            duration:"2024 - Present",
        },
        {
            company:"IEEE East West University Student Branch",
            position:"Webmaster",
            duration:"2023 - 2024",
        },
        {
            company:"Tenvelop",
            position:"Web Development Lead",
            duration:"2023 - 2024",
        },
        {
            company:"Online Marketplace",
            position:"Freelance Web Developer",
            duration:"2019 - 2023",
        },

        
    ],

};

//education
const education = {
    icon: '/icon/assets/cap.svg',
    title: "My experience",
    description:"I am currently pursuing a degree in Computer Science, where I have gained a solid foundation in programming, algorithms, and emerging technologies. My academic journey has equipped me with both theoretical knowledge and practical skills, which I continuously apply to real-world projects and research.",
    items:[
        {
            institution:"East West University",
            degree:"Computer Science and Engineering",
            duration:"2020 - Present",
        },
        
        {
            institution:"CodersTrust Bangladesh",
            degree:"MERN Stack",
            duration:"2024",
        },
        {
            institution:"Programming Hero",
            degree:"Complete Web Development",
            duration:"2024",
        },
        {
            institution:"Udemy",
            degree:"App development with Flutter",
            duration:"2024",
        },
        {
            institution:"Creative IT Institute",
            degree:"App Development",
            duration:"2023",
        },
        {
            institution:"Professional Web Development",
            degree:"App Development",
            duration:"2022",
        },
        {
            institution:"CodersTrust Bangladesh",
            degree:"Responsive Web Design ",
            duration:"2019",
        },
        
    ],

};

//skills data
const skills ={
    title: "My Skills",
    description:"I possess a diverse skill set in web development, full-stack programming, and AI/ML, with proficiency in modern frameworks, languages, and tools. My expertise spans front-end and back-end development, as well as creating intelligent systems that solve complex problems.",
    skillLists:[
        
        {
            icon:<FaHtml5 />,
            name:"html5"
        },
        {
            icon:<FaCss3 />,
            name:"Css3"
        },
        {
            icon:<FaJs />,
            name:"javascript"
        },
        {
            icon:<FaReact />,
            name:"react.js"
        },
        {
            icon:<FaNodeJs />,
            name:"node.js"
        },
        {
            icon:<SiNextdotjs />,
            name:"next.js"
        },
        {
            icon:<SiTailwindcss />,
            name:"tailwindcss"
        },
        {
            icon:<FaPython />,
            name:"Python"
        },

    ],
};

import{ Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import{ Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import{ ScrollArea  } from "@/components/ui/scroll-area";
import{ motion } from "framer-motion";

const Resume =() =>{
    return (
    <motion.div initial={{}}></motion.div>
    );
};

export default Resume;