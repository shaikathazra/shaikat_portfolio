"use client";
import{BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import{motion} from "framer-motion";




const service =[
    {
        num:"01",
        title:'Web Development',
        description:"Create responsive, user-friendly websites using cutting-edge technologies like HTML, CSS, JavaScript, React, and frameworks like Node.js or Django. Whether it's a simple site or a complex web application, I deliver tailored solutions for all your needs.",
        href:"/contact",
    },
    {
        num:"02",
        title:'App development',
        description:"Develop high-performance mobile and desktop apps for iOS, Android, and cross-platform environments using Swift, Kotlin, Flutter, and React Native. From ideation to deployment, I ensure seamless integration and superior functionality for a great user experience",
        href:"/contact",
    },
    {
        num:"03",
        title:'API Development and Integration',
        description:"Build secure and scalable RESTful and GraphQL APIs for seamless communication between systems. I specialize in API integration with third-party services like payment gateways, social media platforms, and cloud services to extend your app’s functionality.",
        href:"/contact",
    },
    {
        num:"04",
        title:'AI/ML Model Development',
        description:"Design, train, and deploy AI/ML models for industries like healthcare, e-commerce, and finance. I specialize in solutions like recommendation systems, NLP, and computer vision, and integrate these models into your systems for enhanced decision-making.",
        href:"/contact",
    },

];



const Services =() =>{
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'},
                }}className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {service.map((service, index)=>{
                        return (
                            <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
};

export default Services;