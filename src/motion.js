export const ease = [0.22, 1, 0.36, 1];
export const rise = { hidden:{opacity:0,y:36}, visible:{opacity:1,y:0,transition:{duration:.9,ease}} };
export const stagger = { hidden:{}, visible:{transition:{staggerChildren:.11,delayChildren:.08}} };
export const mask = { hidden:{y:"110%",rotate:2}, visible:{y:0,rotate:0,transition:{duration:1.05,ease}} };
