import React from 'react'
import ProjectsCard from '././ProjectCard/ProjectsCard';
import renterHelper from '../../assets/renterhelper.png';
import portfolio from '../../assets/portfolio.png';
import nutriMate from '../../assets/nutrimate.png';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Renter Helper Application"
                    des="Developed an innovative iOS app to connect homeowners and renters, tackling the housing crisis at UC Santa Cruz. Engineered a real-time messaging system with React Native and Firebase, enhancing user engagement and communication."
                    src={renterHelper}
                    link={'https://github.com/The-Solulu/Renter-Helper'}
                />
                <ProjectsCard
                    title="Nutrimate"
                    des="Created a web-based nutrition tracker aiding 20+ individuals in managing daily caloric and protein intake. Implemented personalized goal-setting and food logging features using HTML, CSS, and JavaScript, with real-time updates and persistent storage, providing instant nutritional feedback."
                    src={nutriMate}
                    link={'https://github.com/adithyagundlapalli/nutrimate'}
                />
                <ProjectsCard
                    title="Personal Portfolio"
                    des="Developed a functional portfolio using React to showcase my skills, projects, and experience. Designed a responsive interface with unique features like dynamic theming, a smooth navigation menu, and interactive components that highlight my expertise."
                    src={portfolio}
                    link={'https://github.com/adithyagundlapalli/Adithya-Gundlapalli-Portfolio'}
                />

            </div>
        </section>
    );
}

export default Projects