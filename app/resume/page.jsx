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
            fieldValue:"in/shaikathazra",
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
            fieldValue:"English, German",
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
            company:"IEEE East West University SB",
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
    title: "My education",
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
    title: "My skills",
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
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:"easeIn" },}} className="min-h-[80vh] flex items-center  justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            {/* why hire test */}
            
            
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-5xl font-bold text-white">Why hire me?</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">I bring innovation, reliability, and a proven ability to turn ideas into impactful solutions.</p>
                    </div>

                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skill">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item,index)=>{
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                                </div>

                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item,index)=>{
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                                </div>

                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skill" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillLists.map((skill,index)=>{
                                    return(
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    {/* about me */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index)=>{
                                    return(
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Resume;