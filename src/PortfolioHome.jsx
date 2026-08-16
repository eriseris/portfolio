import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Reveal } from "./components";
import { useContent } from "./content";
import { mask, rise, stagger } from "./motion";
import { ServicesBento, TestimonialField } from "./HomeEffects";

const toolIcons=["logo-adobe.png","logo-blender.png","logo-canva.png","logo-capcut.png","logo-gemini.png","logo-gpt.png","logo-make.png","logo-n8n.png","logo-office.png","logo-vs.png","logo-wordpres.png"];
const publicAsset = path => `${import.meta.env.BASE_URL}${path}`;
const selectedWorkTypes=["Brand Identity","Social Media","Photography & Photo Editing","Motion Graphics","Collateral Design"];

export default function PortfolioHome(){
  const {projects,services,testimonials}=useContent();
  const selectedProjects=selectedWorkTypes.map(type=>projects.find(project=>project.tags?.includes(type))).filter(Boolean);
  const designerPortrait=publicAsset("assets/portfolio/eris-portrait-ph5.webp");
  return <>
    <motion.section className="hero portfolio-hero shell" variants={stagger} initial="hidden" animate="visible">
      <h1><span className="hero-line clip"><motion.b variants={mask}>PORTFOLIO</motion.b></span><span className="hero-line clip"><motion.b variants={mask}><em>Creative Graphic Designer</em></motion.b></span></h1>
      <motion.div variants={rise} className="hero-aside"><p>I create visual solutions that help businesses communicate clearly, strengthen their presence, and connect with their audience.</p><div className="portfolio-stats"><div className="stat-projects"><strong>40+</strong><span>Projects</span><b>✦</b></div><div className="stat-years"><strong>3+</strong><span>Years</span></div><a className="stat-qr" href="#contact" aria-label="Open contact section"><img src={publicAsset("assets/portfolio/my-contacts.svg")} alt="My contacts QR code"/><span>My contacts</span></a><div className="capability-marquee"><motion.div animate={{x:["0%","-50%"]}} transition={{duration:18,repeat:Infinity,ease:"linear"}}><span>BRAND IDENTITY · SOCIAL MEDIA DESIGN · CAMPAIGNS · ART DIRECTION · PHOTOGRAPHY · </span><span>BRAND IDENTITY · SOCIAL MEDIA DESIGN · CAMPAIGNS · ART DIRECTION · PHOTOGRAPHY · </span></motion.div></div></div></motion.div>
    </motion.section>
    <section className="statement about-designer section-pad shell"><Reveal><p className="eyebrow">About the designer</p><div className="about-meta"><span>Based in Dubai</span><span>Brand · Digital · Print</span><span>Available worldwide</span></div><div className="statement-grid"><div className="statement-art"><span>VISUAL</span><motion.span initial={{x:-70}} whileInView={{x:0}} transition={{duration:1}}>THINKER</motion.span><small>Brand identity<br/>Marketing design<br/>Digital content</small></div><div className="statement-media"><motion.img initial={{scale:.94}} whileInView={{scale:1}} viewport={{once:true}} src={designerPortrait} alt="Portrait of Eris R. Mendoza"/><span>Eris R. Mendoza · Graphic designer</span></div><div className="statement-copy"><h2>CREATIVE<br/>WITH PURPOSE</h2><p>I am a graphic designer specializing in brand identity, marketing design, and digital content creation.</p><p>With experience across travel, logistics, and corporate industries, I combine creativity and strategy to make design meaningful, consistent, and effective.</p></div></div></Reveal></section>
    <section className="software-strip shell"><div className="software-track"><div className="software-label"><span>Primary software</span><b>I use</b></div><div className="software-marquee"><motion.div animate={{x:["0%","-50%"]}} transition={{duration:22,repeat:Infinity,ease:"linear"}}>{[0,1].map(group=><div className="tool-icon-set" key={group}>{toolIcons.map(icon=><img key={`${group}-${icon}`} src={publicAsset(`assets/tools/${icon}`)} alt=""/>)}</div>)}</motion.div></div></div></section>
    <section className="selected-work section-pad shell"><p className="eyebrow">Selected work</p><div className="selected-work-list">{selectedProjects.map((project,index)=><Reveal className="selected-work-row" key={project.slug}><Link to={`/project/${project.slug}`}><span className="work-index">{String(index+1).padStart(2,"0")}</span><h3>{project.title}</h3><p>{project.category}</p><time>{project.year}</time><div className="work-thumbs count-1"><img src={project.image} alt={`${project.title} cover`}/></div></Link></Reveal>)}</div><Link className="button button-red" to="/project">View all projects</Link></section>
    <ServicesBento services={services}/>
    <TestimonialField testimonials={testimonials} projects={projects}/>
  </>;
}
