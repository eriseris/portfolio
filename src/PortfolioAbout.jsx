import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Reveal } from "./components";

const certificateAsset=name=>`${import.meta.env.BASE_URL}assets/certificates/${name}`;
const publicAsset=path=>`${import.meta.env.BASE_URL}${path}`;

const certificates=[
  ["Certificate 01","Adobe Digital Marketing","Adobe","2026",certificateAsset("adobe-digital-marketing.pdf")],
  ["Certificate 02","Adobe Graphic Design","Adobe","2026",certificateAsset("adobe-graphic-design.pdf")],
  ["Certificate 03","Adobe Marketing Specialist","Adobe","2026",certificateAsset("adobe-marketing-specialist.pdf")],
  ["Certificate 04","AI Automation","Make","2026",certificateAsset("make-ai-automation-01.pdf")],
  ["Certificate 05","AI Automation","Make","2026",certificateAsset("make-ai-automation-02.pdf")],
  ["Certificate 06","Social Media Marketing II","HubSpot Academy","2026",certificateAsset("hubspot-social-media-marketing-ii.png")],
  ["Certificate 07","Social Media","HubSpot Academy","2026",certificateAsset("hubspot-social-media.png")]
];

function AboutHero(){
  const ref=useRef(null);
  const videoRef=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
  const mediaY=useTransform(scrollYProgress,[0,1],["-6%","18%"]);
  const mediaScale=useTransform(scrollYProgress,[0,1],[1.12,1.28]);
  const titleY=useTransform(scrollYProgress,[0,1],["0%","42%"]);
  const seekVideo=progress=>{const video=videoRef.current;if(!video||!Number.isFinite(video.duration)||video.duration<=0)return;video.pause();video.currentTime=Math.min(video.duration-.01,Math.max(0,progress*video.duration));};
  useMotionValueEvent(scrollYProgress,"change",seekVideo);
  return <section ref={ref} className="about-editorial-hero"><motion.div className="about-editorial-title shell" style={{y:titleY}}><div className="about-title-mask"><motion.h1 initial={{y:"115%"}} animate={{y:0}} transition={{duration:1.15,ease:[.22,1,.36,1]}}>ABOUT <motion.i initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.65,duration:.8,ease:[.22,1,.36,1]}}>the designer</motion.i></motion.h1></div></motion.div><div className="about-editorial-image"><motion.video ref={videoRef} style={{y:mediaY,scale:mediaScale}} src={`${publicAsset("assets/portfolio/about-me.mp4")}?v=4`} muted playsInline preload="auto" aria-label="Scroll-controlled portrait video of Eris R. Mendoza" onLoadedMetadata={()=>seekVideo(scrollYProgress.get())}/></div></section>
}

export default function PortfolioAbout(){return <>
  <AboutHero/>
  <section className="about-practice shell section-pad"><Reveal className="about-practice-copy"><h2>A CONTEMPORARY CREATIVE PRACTICE FOCUSED ON CLARITY, STRUCTURE, AND VISUAL COMMUNICATION.</h2><p>I create visual solutions across brand identity, marketing design, social content, photography, and motion. My approach combines structured layouts, clear storytelling, and practical systems that help businesses communicate with confidence.</p></Reveal><div className="about-practice-stats">{[["09","Selected projects"],["3+","Years building"],["DUBAI","Based in UAE"],["05","Creative disciplines"]].map((item,index)=><motion.div className="about-practice-stat" key={item[1]} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.45}} transition={{duration:.75,delay:index*.1,ease:[.22,1,.36,1]}}><strong>{item[0]}</strong><span>{item[1]}</span></motion.div>)}</div></section>
  <section className="about-person shell section-pad"><Reveal className="about-person-intro"><h2>EXPLORE <i>what I create</i></h2><div className="about-person-bio"><h3>Eris R. Mendoza</h3><p>I am a Graphic Designer specializing in brand identity, marketing design, and digital content creation. I create visual solutions that help businesses communicate their message, strengthen their brand presence, and connect with their audience.</p><p>With experience across travel, logistics, and corporate industries, I combine creativity and strategy to develop designs that are meaningful, consistent, and effective.</p></div><div className="about-skills"><h3>Skills</h3><ul>{["Brand Identity Design","Logo Design","Visual Communication","Social Media Design","Marketing Campaign Design","Digital Content Creation","Layout & Typography","Corporate Design","Adobe Creative Suite"].map(skill=><li key={skill}>{skill}</li>)}</ul></div><div className="about-software"><h3>Primary software</h3><div>{[["Photoshop","photoshop.svg"],["Illustrator","illustrator.svg"],["Lightroom","lightroom.svg"],["Canva","canva.svg"],["Premiere Pro","premiere-pro.svg"],["After Effects","after-effects.svg"],["CapCut","capcut.svg"]].map(([tool,icon])=><motion.div className="software-icon-card" key={tool} whileHover={{y:-6}} transition={{duration:.3}}><img src={publicAsset(`assets/software/${icon}`)} alt=""/><span>{tool}</span></motion.div>)}</div></div></Reveal><motion.div className="about-person-card" initial={{opacity:0,y:70,rotate:1.5}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:true,amount:.2}} transition={{duration:1,ease:[.22,1,.36,1]}} whileHover={{y:-8}}><div className="about-person-meta"><h3>ERIS R. MENDOZA</h3><span>Creative Graphic Designer</span></div><div className="about-person-photo"><motion.img whileHover={{scale:1.045}} transition={{duration:.7,ease:[.22,1,.36,1]}} src={publicAsset("assets/portfolio/eris-portrait.jpg")} alt="Eris R. Mendoza, Creative Graphic Designer"/></div></motion.div></section>
  <section className="about-certificates shell section-pad"><div className="about-certificates-title"><h2>CERTIFICATES<br/>AND <i>achievements</i></h2></div><div className="certificate-list">{certificates.map(([number,title,issuer,year,url],index)=><motion.div className="certificate-row" key={number} initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.55}} transition={{duration:.65,delay:index*.06,ease:[.22,1,.36,1]}} whileHover={{paddingLeft:14,paddingRight:14}}><span>{number}</span><strong>{title}</strong><span>{issuer}</span><time>{year}</time><a href={url} target="_blank" rel="noreferrer" aria-label={`Verify ${title} certificate`}>Verify ↗</a></motion.div>)}</div></section>
</>}
