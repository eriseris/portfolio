const asset = name => `${import.meta.env.BASE_URL}assets/portfolio/${name}.webp`;
const testimonialAsset = name => `${import.meta.env.BASE_URL}assets/testimonials/${name}.webp`;

export const clients = ["Airlink International UAE", "Airlink Travel", "Kabayan Cargo", "Leisure Solutions", "ACEM Insulation"];

// These tags drive the Projects page filters and can later be managed by a CMS.
export const projectTypes = [
  "Brand Identity",
  "Social Media",
  "Photography & Photo Editing",
  "Collateral Design",
  "Videography & Video Editing",
  "Motion Graphics",
  "Web Development"
];

const previousProjects = [
  {
    slug: "leisure-solutions",
    title: "Leisure Solutions",
    category: "Visual Identity",
    tags: ["Brand Identity", "Collateral Design"],
    year: "2026",
    image: asset("leisure-business-card"),
    gallery: [asset("leisure-card-02"), asset("logo-collection")],
    client: "Leisure Solutions",
    location: "Dubai, UAE",
    overview: "Leisure Solutions is a premium flooring and sports-facility contractor specializing in high-performance, sustainable surfacing for luxury fitness centres, professional padel courts, and wellness spaces.",
    challenge: "The identity needed to bridge structural durability with a modern, high-end luxury aesthetic while remaining practical across digital and physical applications."
  },
  {
    slug: "airlink-international-identity",
    title: "Airlink International UAE",
    category: "Visual Identity",
    tags: ["Brand Identity", "Collateral Design"],
    year: "2026",
    image: asset("airlink-truck"),
    gallery: [asset("airlink-id"), asset("airlink-tote")],
    client: "Airlink International UAE",
    location: "Dubai, UAE",
    overview: "Airlink International UAE is a multinational supply-chain integrator and IATA-accredited corporate travel management company with more than four decades of operational experience.",
    challenge: "The visual system connects industrial-scale logistics and kinetic movement with the confidence and restraint of a premium corporate brand."
  },
  {
    slug: "acem-insulation",
    title: "ACEM Insulation",
    category: "Visual Identity",
    tags: ["Brand Identity", "Collateral Design"],
    year: "2026",
    image: asset("acem-card"),
    gallery: [asset("acem-van"), asset("acem-tote")],
    client: "ACEM Insulation Ltd.",
    location: "Canada",
    overview: "ACEM Insulation is a specialist construction contractor providing thermal insulation, blown-in attic installation, and commercial fireproofing systems.",
    challenge: "The identity balances engineering precision and environmental security with a premium corporate aesthetic while respecting the owner's established long-term vision."
  },
  {
    slug: "airlink-travel-social",
    title: "Airlink Travel",
    category: "Social Media Design",
    tags: ["Social Media", "Motion Graphics"],
    year: "2025–2026",
    image: asset("travel-armenia"),
    gallery: [asset("travel-prague"), asset("travel-srilanka")],
    client: "Airlink Travel",
    location: "Dubai, UAE",
    overview: "An ongoing social-media system for an IATA-accredited corporate and leisure travel company offering global holiday packages, experiential tours, and end-to-end travel solutions.",
    challenge: "I designed branded posts, stories, testimonials, carousel announcements, campaign visuals, highlight covers, and supporting reel graphics while maintaining a consistent visual language."
  },
  {
    slug: "kabayan-cargo-social",
    title: "Kabayan Cargo",
    category: "Social Media Design",
    tags: ["Social Media", "Motion Graphics"],
    year: "2025–2026",
    image: asset("cargo-promo"),
    gallery: [asset("cargo-review"), asset("cargo-delivered")],
    client: "Airlink Kabayan Cargo",
    location: "UAE / Philippines",
    overview: "Digital campaign work for a balikbayan cargo and door-to-door shipping service connecting the UAE and the Philippines.",
    challenge: "The content system covers promotional offers, service announcements, customer testimonials, schedules, seasonal campaigns, tracking information, and service updates."
  },
  {
    slug: "philippines-travel-social",
    title: "Airlink Philippines Travel",
    category: "Social Media Design",
    tags: ["Social Media", "Videography & Video Editing"],
    year: "2025–2026",
    image: asset("philippines-roundtrip"),
    gallery: [asset("philippines-quote"), asset("philippines-promo")],
    client: "Airlink Philippines Travel",
    location: "Philippines",
    overview: "Creative visual content promoting affordable flights, holiday packages, visa assistance, and travel services for the Philippine market.",
    challenge: "The work strengthens the brand's digital presence through travel advertising, seasonal campaigns, carousel posts, testimonials, infographics, and reel edits."
  },
  {
    slug: "airlink-corporate-social",
    title: "Airlink Corporate Content",
    category: "LinkedIn & Digital Content",
    tags: ["Social Media", "Collateral Design"],
    year: "2025–2026",
    image: asset("linkedin-airlink"),
    gallery: [asset("linkedin-post"), asset("linkedin-recruitment")],
    client: "Airlink International UAE",
    location: "Dubai, UAE",
    overview: "Corporate communication for Airlink International UAE across LinkedIn and digital channels, supporting its logistics, travel, freight, and warehousing services.",
    challenge: "The work includes content planning, corporate updates, recruitment, industry campaigns, milestones, events, service highlights, and consistent branded publishing."
  },
  {
    slug: "airlink-collateral",
    title: "Airlink Collateral Design",
    category: "Print & Event Design",
    tags: ["Collateral Design"],
    year: "2025–2026",
    image: asset("collateral-chalet"),
    gallery: [asset("collateral-rollup"), asset("collateral-mugs")],
    client: "Airlink International UAE",
    location: "Dubai, UAE",
    overview: "A cohesive family of corporate and event materials supporting travel promotions, logistics services, exhibitions, presentations, and business events.",
    challenge: "The system spans Dubai Airshow chalet graphics, flags, roll-up banners, corporate gifts, notebooks, apparel, brochures, folders, and business cards."
  },
  {
    slug: "event-photography",
    title: "Event & Corporate Photography",
    category: "Photography",
    tags: ["Photography & Photo Editing", "Videography & Video Editing"],
    year: "2024–2026",
    image: asset("photo-boat"),
    gallery: [asset("photo-race"), asset("photo-airshow"), asset("photo-corporate")],
    client: "Airlink International UAE",
    location: "Dubai, UAE",
    overview: "Photography documenting the Dubai International Boat Show, Dubai Autodrome, Dubai Airshow, and Airlink's people and operational environments.",
    challenge: "I captured behind-the-scenes preparation, live event action, candid moments, corporate services, workplace environments, and operational processes for brand and marketing communication."
  }
];

// One temporary project per discipline. These isolated demos make each
// discipline-specific detail layout easy to review before real CMS content returns.
const acemGuidelinePages=[3,4,6,7,8,9,10,11,13,14,15,16,17,19,20,21,22,24,25,27,28];
const acemGuidelineLabels=["Brand introduction","Brand overview","Primary logo","Logo variations","Clear space","Logo construction","Background usage","Incorrect usage","Primary palette","Supporting palette","Color specifications","Tints and shades","Dark and light applications","Heading typeface","Body typeface","Type hierarchy","Typography usage","Graphic elements","Iconography","Business card","Social media"];
export const projects = [
  {slug:"leisure-solutions",title:"Leisure Solutions",category:"Brand Identity",tags:["Brand Identity"],year:"2026",image:`${import.meta.env.BASE_URL}assets/brand/leisure-solutions/project-cover-v2.jpg`,gallery:[4,5,6,7,8,9,10,11,12,13].map(number=>`${import.meta.env.BASE_URL}assets/brand/leisure-solutions/slide-${number}.jpg`),client:"Leisure Solutions",location:"Dubai, UAE",overview:"A complete visual identity and brand-guideline system for Leisure Solutions, built around a modern symbol, strong recognition, and consistent applications across digital and physical touchpoints.",challenge:"The identity needed to communicate innovation, reliability, and customer-focused solutions while remaining clear and adaptable across signage, vehicles, uniforms, stationery, and social media."},
  {slug:"acem-insulation",title:"ACEM Insulation",category:"Brand Identity",tags:["Brand Identity"],year:"2026",image:`${import.meta.env.BASE_URL}assets/brand/acem-insulation/project-cover.jpg`,gallery:acemGuidelinePages.map(number=>`${import.meta.env.BASE_URL}assets/brand/acem-insulation/slide-${String(number).padStart(2,"0")}.jpg`),galleryLabels:acemGuidelineLabels,client:"ACEM Insulation Ltd.",location:"Canada",overview:"ACEM Insulation Ltd. Canada is a specialized construction contractor providing advanced thermal insulation, blown-in attic installations, and commercial fireproofing protection. The company engineers high-performance structural barrier systems that improve building energy efficiency while meeting strict safety and compliance standards.",challenge:"The brand required a modern visual identity that seamlessly bridges engineering precision and environmental responsibility with a premium corporate aesthetic, while carefully honoring and maintaining the company owner's original long-term vision."},
  {slug:"airlink-travel",title:"Airlink Travel",category:"Social Media",tags:["Social Media"],year:"2026",image:`${import.meta.env.BASE_URL}assets/social/airlink-travel/cover.jpg`,posts:[
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/catalog-maldives.jpg`,label:"Summer Maldives package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/catalog-seychelles.jpg`,label:"Summer Seychelles package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/catalog-singapore.jpg`,label:"Summer Singapore package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/new-year-sri-lanka.jpg`,label:"New Year Sri Lanka package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/new-year-tashkent.jpg`,label:"New Year Tashkent package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/new-year-salalah.jpg`,label:"New Year Salalah package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/christmas-armenia.jpg`,label:"Christmas Armenia package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/christmas-almaty.jpg`,label:"Christmas Almaty package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/christmas-georgia.jpg`,label:"Christmas Georgia package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/jumeirah-kenya.jpg`,label:"Jumeirah Kenya package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/jumeirah-jordan.jpg`,label:"Jumeirah Jordan package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/jumeirah-phuket.jpg`,label:"Jumeirah Phuket package"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/national-day-central-asia.jpg`,label:"National Day Central Asia packages"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/national-day-exciting-europe.jpg`,label:"National Day Exciting Europe packages"},
    {src:`${import.meta.env.BASE_URL}assets/social/airlink-travel/feed/national-day-simply-island.jpg`,label:"National Day Island packages"}
  ],reels:["dfs","kenya-great-migration","travel-the-world"].map(name=>`${import.meta.env.BASE_URL}assets/social/airlink-travel/reels/${name}.mp4`),stories:["travel-made-easy.png","custom-travel.jpg","new-routes.jpg"].map(name=>`${import.meta.env.BASE_URL}assets/social/airlink-travel/stories/${name}`),gallery:[asset("travel-prague"),asset("travel-srilanka"),asset("cargo-promo"),asset("cargo-review")],client:"Airlink Travel",location:"Dubai, UAE",overview:"Airlink Travel is an IATA-accredited corporate and leisure travel management enterprise based in Dubai. The social media campaign promotes customized global holiday packages, luxury experiential tours, and comprehensive corporate transit solutions through a cohesive, travel-focused visual system.",challenge:"I designed and produced branded content for Instagram and Facebook, including feed posts, stories, customer reviews and testimonials, promotional campaign visuals, carousel announcements, story highlight covers, and reel edits. The role required maintaining brand consistency across varied formats, adapting detailed travel offers into clear and engaging visuals, meeting fast campaign deadlines, and balancing promotional messaging with strong hierarchy and platform-specific audience needs."},
  {slug:"kabayan-cargo-social-media",title:"Kabayan Cargo",category:"Social Media",tags:["Social Media"],year:"2026",image:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/project-cover-v2.jpg`,posts:[{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/proof-of-delivery.jpg`,label:"Proof of delivery"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/rates.jpg`,label:"Cargo rates"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/feedback.jpg`,label:"Customer feedback"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/discount-20.jpg`,label:"20% discount campaign"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/box-discount.jpg`,label:"Cargo box offer"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/crating-services.jpg`,label:"Crating services"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/christmas-cutoff.jpg`,label:"Christmas cutoff advisory"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/tabby-payment.jpg`,label:"Tabby payment campaign"},{src:`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/loading-advisory.jpg`,label:"Loading schedule advisory"}],reels:["loading-09.mp4","loading-2025-04-24.mp4","akc-2025-02-11.mp4"].map(name=>`${import.meta.env.BASE_URL}assets/social/kabayan-cargo/reels/${name}`),gallery:[asset("cargo-delivered"),asset("cargo-review")],client:"Airlink Kabayan Cargo",location:"Dubai, UAE",overview:"Airlink Kabayan Cargo provides reliable balikbayan cargo and door-to-door shipping services from the UAE to the Philippines. It also offers secure packing, shipment tracking, and affordable delivery solutions for Overseas Filipino Workers (OFWs).",challenge:"I designed and produced branded social media content for Airlink Kabayan Cargo, including Facebook and Instagram promotional posts, cargo service announcements, customer review and testimonial graphics, shipping schedules and service updates, promotional offers and seasonal campaigns, and informational graphics. The role required turning detailed rates, schedules, tracking information, and service conditions into clear visual content while maintaining brand consistency, building customer trust, meeting fast campaign deadlines, and communicating effectively with the Filipino community across multiple social formats."},
  {slug:"philippine-travel-services",title:"Philippine Travel Services",category:"Social Media",tags:["Social Media"],year:"2026",image:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/project-cover-v2.jpg`,posts:[{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/travel-tips.jpg`,label:"Travel tips"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/filipino-food.jpg`,label:"Filipino food engagement"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/philippine-destinations.jpg`,label:"Philippine destinations"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/hidden-beaches.jpg`,label:"Hidden beaches"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/vacation-budget.jpg`,label:"Vacation budget guide"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/philippines-roundtrip.jpg`,label:"Roundtrip promotion"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/travel-quote-01.jpg`,label:"Daily travel quote"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/travel-quote-02.jpg`,label:"Travel inspiration"},{src:`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/travel-quote-03.jpg`,label:"Journey inspiration"}],reels:["travel-ads.mp4","final-campaign.mp4","ph-travel-04.mp4"].map(name=>`${import.meta.env.BASE_URL}assets/social/philippine-travel-services/reels/${name}`),gallery:[],client:"Airlink Philippine Travel Services",location:"Dubai, UAE",overview:"Airlink Philippine Travel is dedicated to making travel simple, affordable, and hassle-free for every traveler. From flight bookings and holiday packages to visa assistance and travel services, the team helps turn every journey into a smooth and memorable experience.",challenge:"I developed creative visual content that strengthened Airlink Philippine Travel's digital presence while maintaining brand consistency across marketing campaigns. The work included Facebook posts and stories, promotional and travel advertising, seasonal marketing creatives, carousel posts and announcements, customer testimonial graphics, and video edits for reels. The role required translating detailed travel offers into clear, engaging content, maintaining a recognizable visual system across varied formats, meeting fast campaign schedules, and balancing promotional goals with useful and inspiring audience-focused communication."},
  {slug:"airlink-international-uae",title:"Airlink International UAE",category:"Social Media",tags:["Social Media"],year:"2026",image:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/project-cover-v2.jpg`,posts:[{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/team-effort.jpeg`,label:"Team effort"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/movement-with-trust.jpg`,label:"Corporate services"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/cargo-commitment.jpg`,label:"Cargo commitment"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/port-location-01.jpg`,label:"Port location insight"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/port-location-02.jpg`,label:"Port options"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/port-location-03.jpg`,label:"Rerouting requirements"}],reels:[{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/bts.mp4`,label:"Behind the scenes"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/das-2025.mp4`,label:"Dubai Airshow 2025"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/gulfood.mp4`,label:"Gulfood event"},{src:`${import.meta.env.BASE_URL}assets/social/airlink-international-uae/race-event.mp4`,label:"Race event"}],gallery:[],client:"Airlink International UAE",location:"Dubai, UAE",overview:"Airlink International UAE is a trusted provider of logistics and travel solutions with decades of industry experience. The company specializes in freight forwarding, warehousing, customs clearance, and corporate travel, delivering reliable services to businesses and individual customers worldwide.",challenge:"I designed and produced visual communication materials that supported Airlink International UAE's logistics and travel services, including LinkedIn content planning and publishing, corporate updates and company announcements, industry-related posts and campaigns, and employee, event, and company milestone highlights. The role required simplifying complex logistics topics into clear and engaging content, maintaining a consistent corporate identity, balancing technical accuracy with approachable storytelling, and delivering timely event and business updates across LinkedIn campaigns."},
  {slug:"gulfood-2025",title:"Gulfood 2025",category:"Photography & Photo Editing",tags:["Photography & Photo Editing"],year:"2025",image:`${import.meta.env.BASE_URL}assets/photography/gulfood-2025/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:["event-day-01.jpg","event-day-02.jpg","event-day-03.jpg","event-day-04.jpg"].map(name=>`${import.meta.env.BASE_URL}assets/photography/gulfood-2025/${name}`),client:"Gulfood",location:"Dubai World Trade Centre, Dubai, UAE",overview:"Event-day photography from Gulfood 2025, documenting the scale, energy, exhibitor presence, and professional connections across the exhibition floor.",challenge:"Captured event-day photography throughout Gulfood 2025, focusing on exhibitor stands, attendee interactions, business networking, and the vibrant atmosphere of the global food and beverage exhibition."},{slug:"dubai-airshow-2025",title:"Dubai Airshow 2025",category:"Photography & Photo Editing",tags:["Photography & Photo Editing"],year:"2025",image:`${import.meta.env.BASE_URL}assets/photography/dubai-airshow-2025/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:["royal-visit","exhibition-model","cargo-operations","event-operations","aerial-display","chalet-visit"].map(name=>`${import.meta.env.BASE_URL}assets/photography/dubai-airshow-2025/${name}.jpg`),client:"Airlink International UAE",location:"Dubai, UAE",overview:"A behind-the-scenes and event-day photography series documenting Airlink International UAE's presence at Dubai Airshow 2025, from operational preparations to exhibition activities and key moments.",challenge:"Captured behind-the-scenes preparations and event-day photography during Dubai Airshow 2025, documenting team activities, brand presence, and key event highlights for marketing and corporate communications."},
{slug:"dubai-boat-show-2025",title:"Dubai Boat Show 2025",category:"Photography & Photo Editing",tags:["Photography & Photo Editing"],year:"2025",image:`${import.meta.env.BASE_URL}assets/photography/dubai-boat-show/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:["boat-preparation","marina-showcase","boat-installation","automotive-showcase"].map(name=>`${import.meta.env.BASE_URL}assets/photography/dubai-boat-show/${name}.jpg`),client:"Airlink International UAE",location:"Dubai, UAE",overview:"A behind-the-scenes and event-day photography series documenting Airlink International UAE's involvement at the Dubai International Boat Show 2025, from operational preparations and yacht handling to the atmosphere across the waterfront exhibition.",challenge:"Captured behind-the-scenes preparations and event-day photography during the Dubai International Boat Show, documenting team activities, brand presence, and key event highlights for marketing and corporate communications."},
{slug:"dubai-autodrome-24h-series-2025",title:"Dubai Autodrome 24H Series 2025",category:"Photography & Photo Editing",tags:["Photography & Photo Editing"],year:"2025",image:`${import.meta.env.BASE_URL}assets/photography/dubai-autodrome-24h/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:["race-preparations","container-operations","pit-lane","race-day-action","event-showcase","podium"].map(name=>`${import.meta.env.BASE_URL}assets/photography/dubai-autodrome-24h/${name}.jpg`),client:"Airlink International UAE",location:"Dubai, UAE",overview:"A behind-the-scenes and race-day photography series documenting the Dubai Autodrome 24H Series 2025, capturing the preparations, operational activity, competitors, and defining moments across the event from start to finish.",challenge:"Photographed behind-the-scenes preparations, race-day action, and candid moments, creating authentic visual storytelling that showcased the event experience from start to finish."},
{slug:"airlink-photoshoots-2025",title:"Airlink Photoshoots 2025",category:"Photography & Photo Editing",tags:["Photography & Photo Editing"],year:"2025",image:`${import.meta.env.BASE_URL}assets/photography/airlink-photoshoots/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:["logistics-loading.jpg","logistics-centre.jpg","warehouse-documentation.jpg","corporate-building.jpg","warehouse-team.jpg","operations-planning.jpg","travel-consultation.jpg","forklift-operations.jpg","cargo-inspection.jpg","warehouse-handling.jpg","warehouse-equipment.jpg","travel-booking.png","customer-service.png"].map(name=>`${import.meta.env.BASE_URL}assets/photography/airlink-photoshoots/${name}`),client:"Airlink International UAE",location:"Dubai, UAE",overview:"A curated corporate photography series showcasing Airlink International UAE's logistics, warehousing, travel, and customer-service operations through authentic workplace imagery created for brand and communication use.",challenge:"Directed and curated photography sessions to showcase the company's services, workplace environment, and operational processes through authentic corporate imagery for branding and communication needs."},
  {slug:"airlink-collateral-design",title:"Airlink Collateral Design",category:"Collateral Design",tags:["Collateral Design"],year:"2026",image:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/project-cover-v2.jpg`,showcaseImage:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/showcase.png`,gallery:[],hotspots:[{x:22.6,y:29.5,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/notebook-pen.jpg`,alt:"Airlink branded notebook and pen"},{x:40.4,y:27.6,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/rollup-banner.jpg`,alt:"Airlink roll-up banner collection"},{x:83.5,y:64.5,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/mugs.jpg`,alt:"Airlink branded mugs"}],additionalApplications:[{image:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/chalet-application.jpg`,alt:"Airlink exhibition chalet exterior",hotspots:[{x:5.5,y:42.5,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/flags.jpg`,alt:"Airlink official contractor flags"},{x:81.8,y:35.3,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/front-chalet-graphics.jpg`,alt:"Airlink front chalet graphics"}]},{image:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/team-shirts-application.jpg`,alt:"Airlink event team wearing branded shirts",hotspots:[{x:50,y:32.1,src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/shirt-design.jpg`,alt:"Airlink branded event shirt design"}]}],client:"Airlink International U.A.E.",location:"Dubai, UAE",overview:"A collection of collateral designs created for Airlink International UAE, reflecting the company's professional brand identity through cohesive visual communication. The materials incorporate Airlink's brand elements and were designed to support corporate marketing, travel promotions, logistics services, exhibitions, client presentations, and business events across print and digital platforms.",challenge:"I developed adaptable collateral that maintained a consistent and recognizable Airlink brand presence across varied print and digital formats. The challenge was organizing different types of information for corporate events, logistics services, exhibitions, client presentations, and business events while preserving clear hierarchy, production-ready layouts, and a cohesive visual identity."},
  {slug:"airlink-youtube",title:"Airlink Youtube",category:"Videography & Video Editing",tags:["Videography & Video Editing"],year:"2025-2026",image:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/project-cover-v2.jpg`,gallery:[],videos:[{src:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/boat-show.mp4`,poster:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/boat-show.jpg`,title:"Boat Show",category:"Company event · Video editing"},{src:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/customer-experience.mp4`,poster:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/customer-experience.jpg`,title:"Customer Experience",category:"Customer story · Corporate video"},{src:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/moto-show.mp4`,poster:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/moto-show.jpg`,title:"Moto Show",category:"Company event · Video editing"},{src:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/warehouse-showcase.mp4`,poster:`${import.meta.env.BASE_URL}assets/video/airlink-youtube/warehouse.jpg`,title:"Warehouse Showcase",category:"Company profile · Facility showcase"}],client:"Airlink International UAE",location:"Dubai, UAE",overview:"A corporate YouTube channel showcasing Airlink International UAE's logistics services, company profile, events, customer experiences, and operational capabilities through professionally produced video content.",challenge:"I created and managed corporate video content for Airlink International UAE's YouTube platform, including corporate profile videos, company introduction videos, service showcase videos, behind-the-scenes and operational content, video branding and visual assets, and YouTube thumbnails. The challenge was to turn varied corporate, event, and operational footage into clear and engaging stories while maintaining consistent branding, pacing, typography, and messaging across the channel."},
  {slug:"circus-music-fest-2024",title:"Circus Music Fest 2024",category:"Motion Graphics",tags:["Motion Graphics"],year:"2024",image:`${import.meta.env.BASE_URL}assets/motion/circus-music-fest-2024/project-cover-v2.jpg`,gallery:[`${import.meta.env.BASE_URL}assets/motion/circus-music-fest-2024/event-process.mp4`,`${import.meta.env.BASE_URL}assets/motion/circus-music-fest-2024/event-live.mp4`],video:`${import.meta.env.BASE_URL}assets/motion/circus-music-fest-2024/event.mp4`,client:"Event Visual Production",location:"Dubai, UAE",overview:"A live-event motion graphics piece developed from the Blender production stage through to its final presentation on an event LED screen.",challenge:"The work required dimensional lettering, decorative forms, animation timing, lighting, and a composition that remained readable and impactful in a large live venue."},
  {slug:"airlink-international-motion-graphic",title:"Airlink International Motion Graphic",category:"Motion Graphics",tags:["Motion Graphics"],year:"2024",image:`${import.meta.env.BASE_URL}assets/motion/airlink/project-cover-v2.jpg`,gallery:[`${import.meta.env.BASE_URL}assets/motion/airlink/motion-02.mp4`,`${import.meta.env.BASE_URL}assets/motion/airlink/christmas-animation.mp4`,`${import.meta.env.BASE_URL}assets/motion/airlink/logo-animation-02.gif`,`${import.meta.env.BASE_URL}assets/motion/airlink/logo-animation-01.gif`],video:`${import.meta.env.BASE_URL}assets/motion/airlink/motion-01.mp4`,client:"Airlink International U.A.E.",location:"Dubai, UAE",overview:"A collection of branded motion graphics created for Airlink International UAE, combining animated logo treatments, corporate visual transitions, and seasonal campaign content for digital communication.",challenge:"I translated Airlink's established visual identity into clear, polished animation while preserving logo recognition, brand consistency, readable timing, and smooth movement across corporate and festive motion pieces."},
  {slug:"in-out-concepts-2024",title:"In Out Concepts 2024",category:"Web Development",tags:["Web Development"],year:"2024",image:`${import.meta.env.BASE_URL}assets/web/in-out-concepts-2024/project-cover-v2.jpg`,detailGalleryOnly:true,gallery:[`${import.meta.env.BASE_URL}assets/web/in-out-concepts-2024/desktop.png`,`${import.meta.env.BASE_URL}assets/web/in-out-concepts-2024/tablet.png`,`${import.meta.env.BASE_URL}assets/web/in-out-concepts-2024/mobile.png`],client:"In Out Concepts",location:"Dubai, UAE",overview:"A responsive company website developed for In Out Concepts, translating the owner's vision for the brand into a clear digital experience that presents its architectural surfaces, projects, services, partners, and specialist offerings.",challenge:"I developed the website from the owner's creative direction, turning the envisioned visual concept into a functional responsive build. The work focused on structuring the content, implementing the full-screen architectural presentation, adapting navigation and typography across screen sizes, and maintaining a consistent experience on desktop, tablet, and mobile."}
];

const collateralProject = projects.find(project => project.slug === "airlink-collateral-design");
if (collateralProject) {
  collateralProject.collateralCollection = [
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/spiral-notebook.jpg`,alt:"Airlink spiral notebook design"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/tote-bags.jpg`,alt:"Airlink branded tote bag designs"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/trifold-brochure.jpg`,alt:"Airlink travel trifold brochure design"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/corporate-profile-book.jpg`,alt:"Airlink corporate profile book design"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/business-card.jpg`,alt:"Airlink business card design"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/travel-flyers.jpg`,alt:"Airlink travel flyer designs"},
    {src:`${import.meta.env.BASE_URL}assets/collateral/airlink-collateral-design/other/corporate-folder.jpg`,alt:"Airlink corporate folder design"}
  ];
}

export const services = [
  ["01", "Brand Identity Design", "Logo systems, color, typography, and brand applications."],
  ["02", "Social Media Design", "Campaigns, posts, stories, carousels, and digital content."],
  ["03", "Marketing Design", "Corporate profiles, brochures, events, and collateral."],
  ["04", "Photography & Videography", "Events, people, operations, and authentic visual storytelling."],
  ["05", "Motion & Video", "Reels, edits, thumbnails, and branded motion content."]
];

export const processSteps = [["Discover", "Understand the audience, message, and business objective."], ["Define", "Build a focused direction for the visual system."], ["Design", "Develop and refine the strongest creative route."], ["Deliver", "Prepare consistent assets for print, digital, and future growth."]];
export const testimonials = [
  ["I love his work, highly recommends this service to anyone seeking quality and reliability.", "Isabel Lunar", "BEEd Student", testimonialAsset("isabel-lunar")],
  ["The logo rebranding perfectly captured our brand's vision and gave us a fresh, modern identity. The process was professional, creative, and exceeded our expectations.", "Adrian Simon, MBA", "Managing Director · Leisure Solutions, Dubai UAE", testimonialAsset("adrian-simon")],
  ["My company site was brought into life and I love the work you've done with us.", "Eddy Abi Abdallah", "Managing Director · In Out Concepts, Dubai UAE", testimonialAsset("eddy-abi-abdallah")],
  ["I highly recommend his work to anyone in need of high-quality graphic design. My business has never looked better!", "Arnold Mendoza", "Business Owner · ACEM Canada", testimonialAsset("arnold-mendoza")],
  ["The creative genius and attention to detail brought my vision to life in ways I could not have predicted. Fast, professional, and extremely talented. Thank you Eris!", "DEM-FP Consulting", "Canada", testimonialAsset("dem-fp-consulting")],
  ["Thank you and I love how fast you work with the project and got it on time.", "Jonah R. Mesina", "Teacher Aid", testimonialAsset("jonah-mesina")],
  ["Eris, thank you so much!", "Angelo Joseph B. Pusing", "BSIT Coordinator", testimonialAsset("angelo-pusing")],
  ["The quality of his work was so amazing. He knows how to put up the design according to the theme. I would recommend him to others.", "Simon Gerald Granil", "BSIT Student", testimonialAsset("simon-granil")],
  ["Ganda ng gawa, magsa-ulitin. Maraming salamat, Eris!", "Mendoza Construction", "Pampanga", testimonialAsset("mendoza-construction")]
];
export const team = [{name:"Eris R. Mendoza", role:"Graphic Designer", image:asset("photo-corporate")}];
export const posts = projects.slice(0, 8).map(project => ({slug:project.slug, category:project.category, title:project.title, date:project.year, image:project.image}));

export const settings = {
  studioName: "ERIS",
  studioScript: "portfolio",
  email: "Add your email",
  phone: "Add your phone",
  location: "Dubai, UAE",
  availability: "Available for brand identity, marketing design, digital content, and photography projects."
};

export const siteContent = { clients, projects, services, processSteps, testimonials, team, posts, settings };
