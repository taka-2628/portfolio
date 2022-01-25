// web project assets
import bundleGif from "../assets/web/01-BUNDLE.gif";
import actorsGif from "../assets/web/02-52711-Actors.gif";

// space-design-tech project assets
import aIVCover from "../assets/space-design-tech/a-IV-01.jpg";
import cICover from "../assets/space-design-tech/c-I-01.jpg";
import cIICover from "../assets/space-design-tech/c-II-00.jpg";
import cIIICover from "../assets/space-design-tech/c-III-01.jpg";
import mgiHTDNCover from "../assets/space-design-tech/mgi-how-to-do-nothing-00.gif";
import mgiSharedKitchenCover from "../assets/space-design-tech/mgi-shared-kitchen-00.gif";


const web = [
  {
    id: 1,
    title: "BUNDLE",
    subtitle: "Single-page Application with Vanilla JavaScript and JSON-server on Heroku",
    image: bundleGif,
    description: " BUNDLE is a simple portfolio aggregator/tracker for stock and crypto investors. It fetches real-time price data from APIs and calculates the total value and unrealized gain/loss of a portfolio.",
    school: "Flatiron School",
    year: 2021,
    url: "https://taka-2628.github.io/portfolio/",
    github: "https://github.com/taka-2628/BUNDLE",
    medium: "https://takashi-honzawa.medium.com/bundle-my-first-spa-project-3e1a7f692b27",
    collaborator: null,
    collaborator_url: "",
    selected: true
  },
  {
    id: 2,
    title: "LIFE AND DEATH OF 52,711 ACTORS",
    subtitle: "Data Visualization with D3.js and Mapbox API",
    image: actorsGif,
    description: "Data Visualization project that explores the correlation between the main genre of an actor and his or her maridge, divorce and cause of death. Are romance actors happily married? Do actors of the same genre die of the same cause?",
    school: "Columbia University",
    year: 2021,
    url: "https://taka-2628.github.io/52711_ACTORS/",
    github: "https://github.com/taka-2628/52711_ACTORS",
    medium: "",
    collaborator: "Anays Gonzalez",
    collaborator_url: "https://www.arch.columbia.edu/student-work?student_name_contains=Anays%20Gonzalez",
    selected: false
  }
]

const sdt = [
  {
    id: 1,
    title: "Continuum",
    cover: mgiHTDNCover
  },
  {
    id: 2,
    title: "",
    cover: mgiSharedKitchenCover
  },
  {
    id: 3,
    title: "",
    cover: cICover
  },
  {
    id: 4,
    title: "",
    cover: cIICover
  },
  {
    id: 5,
    title: "",
    cover: cIIICover
  },
  {
    id: 6,
    title: "",
    cover: aIVCover
  }
]

export { web, sdt }