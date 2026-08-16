import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Reveal } from "./components";

export function FeatureMedia({image}){
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const y=useTransform(scrollYProgress,[0,1],["-12%","12%"]);
  const scale=useTransform(scrollYProgress,[0,.5,1],[1.08,1,1.08]);
  return <section ref={ref} className="feature-media"><motion.img style={{y,scale}} src={image} alt="Airlink International visual identity"/><motion.div className="feature-media-caption" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.5}} transition={{duration:.8,ease:[.22,1,.36,1]}}><div className="feature-symbols"><motion.span animate={{rotate:360}} transition={{duration:9,repeat:Infinity,ease:"linear"}}>✦</motion.span><motion.span animate={{rotate:-360}} transition={{duration:12,repeat:Infinity,ease:"linear"}}>✺</motion.span><span>◎</span></div><p>Don’t follow trends.<br/>Make them.</p></motion.div></section>
}

export function ServicesBento({services}){
  return <section className="services-bento section-pad shell"><Reveal className="services-bento-intro"><p className="eyebrow">Creative capabilities</p><h2>CREATIVE<br/><i>services</i></h2><p>Visual systems built to remain consistent across brand, social, print, events, photography, and motion.</p><Link className="button button-dark" to="/contact">Work with me</Link></Reveal><div className="services-bento-grid">{services.slice(0,5).map(([number,title,copy],index)=><motion.article className={`service-tile tile-${index+1}`} key={number} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7,delay:index*.07,ease:[.22,1,.36,1]}} whileHover={{y:-8}}><span>S{number}</span><p>{copy}</p><div><b>{["✦","◉","◌","◇","↯"][index]}</b><h3>{title}</h3></div></motion.article>)}</div></section>
}

function FloatingQuoteCard({entry,index,progress}){
  // Keep every card moving upward while the title remains pinned in the center.
  // The final client clears the frame just before the section releases to the footer.
  const y=useTransform(progress,[0,1],["0vh","-330vh"]);
  const [quote,name,role,image]=entry;
  return <motion.figure className={`floating-quote floating-${index+1}`} style={{y}}><img src={image} alt={`${name} testimonial`}/><figcaption><blockquote>{quote}</blockquote><span>{name} — {role}</span></figcaption></motion.figure>
}

export function TestimonialField({testimonials}){
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  return <section ref={ref} className="testimonial-field"><div className="testimonial-sticky shell"><div className="testimonial-field-title"><h2>WORDS FROM</h2><i>clients</i></div>{testimonials.map((entry,index)=><FloatingQuoteCard key={`${entry[1]}-${index}`} entry={entry} index={index} progress={scrollYProgress}/>)}</div></section>
}
