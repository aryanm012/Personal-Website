import type { Project } from "./types";

const climatePoster = {
  src: "/images/climate-computing-fire/poster.webp",
  alt: "FIRE climate computing poster comparing simulated temperatures across three Arctic sea ice scenarios",
  width: 1200,
  height: 1061,
};

export const climateComputingFire = {
  slug: "climate-computing-fire",
  title: "Computational Climate Research",
  area: "Atmospheric modeling",
  context: "University of Maryland",
  summary:
    "Our University of Maryland FIRE team used atmospheric simulations to study how August Arctic sea ice extremes might influence extratropical cyclones in North America.",
  featured: {
    summary: "Automated atmospheric simulations and data processing on NCAR’s Derecho supercomputer to study how surface conditions influence storms.",
    thumbnail: {
      ...climatePoster,
      fit: "cover",
    },
  },
  technologies: ["WRF", "Python", "NCL", "NCEP/NCAR Reanalysis", "NCAR Derecho"],
  caseStudy: {
    preview: {
      ...climatePoster,
      caption: "FIRE research poster preview.",
    },
    posterSections: [
      {
        heading: "Introduction",
        body: "Arctic sea ice loss contributes to amplified warming and can change the temperature contrast between the Arctic and midlatitudes. Our team tested how different August sea ice extents might affect atmospheric conditions for summertime extratropical cyclones.",
      },
      {
        heading: "Methods",
        body: "We ran the Weather Research and Forecasting model at 20 km resolution over North America and the North Atlantic. Using August 1980 atmospheric conditions from the NCEP/NCAR Global Reanalysis, we compared the 1980 control sea ice extent with the 1984 median and 2012 minimum extents.",
      },
      {
        heading: "Results",
        body: "Compared with the 1980 control, the 1984 case produced slight cooling over Canada and the Arctic and slight warming near the U.S. East Coast. The 2012 case showed stronger changes in the same regions across the pressure levels examined.",
      },
      {
        heading: "Analysis",
        body: "The strongest temperature differences appeared at 850 and 500 hPa, in the lower and middle atmosphere. We compared the simulated anomalies with NOAA’s reference patterns for the North Atlantic Oscillation (NAO), whose phases are associated with changes in storm track position and strength.",
      },
      {
        heading: "Conclusions",
        body: "The 2012 minimum-ice simulation most closely resembled the positive phase of the NAO. The 1984 case showed a weaker resemblance. The team interpreted the stronger temperature contrast at lower altitudes as a potential contributor to conditions favorable to summertime cyclone development.",
        fullWidth: true,
      },
      {
        heading: "Acknowledgements",
        body: "The team used the Derecho supercomputer provided by the NSF National Center for Atmospheric Research (NCAR), with support from the National Science Foundation.",
      },
      {
        heading: "References",
        body: "The poster cites Coumou et al. (2018), Francis and Skific (2015), Hay et al. (2025), and NOAA’s NAO temperature patterns. The full reference list is in the research paper below.",
      },
    ],
  },
  documents: [
    { title: "Research poster", src: "/documents/climate-computing-fire-poster.pdf" },
    { title: "Research paper", src: "/documents/climate-computing-fire-paper.pdf" },
  ],
} satisfies Project;
