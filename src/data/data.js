// web project assets
import bundleGif from "../assets/web/01-BUNDLE.gif";
import actorsGif from "../assets/web/02-52711-Actors.gif";

// space-design-tech project assets
import aIVThumbnail from "../assets/space-design-tech/a-IV-00.jpg";
import aIVCover from "../assets/space-design-tech/a-IV-01.jpg";
import AIV2Map from "../assets/space-design-tech/a-IV-02.jpg";
import AIV3Collage from "../assets/space-design-tech/a-IV-03.jpg";
import AIV4Collage from "../assets/space-design-tech/a-IV-04.jpg";
import AIV5Collage from "../assets/space-design-tech/a-IV-05.jpg";
import AIV6Collage from "../assets/space-design-tech/a-IV-06.jpg";
import AIV7Collage from "../assets/space-design-tech/a-IV-07.jpg";
import AIV8Collage from "../assets/space-design-tech/a-IV-08.jpg";
import AIV9Collage from "../assets/space-design-tech/a-IV-09.jpg";
import AIV10Collage from "../assets/space-design-tech/a-IV-10.jpg";
import AIV11Collage from "../assets/space-design-tech/a-IV-11.jpg";
import AIV12Collage from "../assets/space-design-tech/a-IV-12.jpg";

import cIThumbnail from "../assets/space-design-tech/c-I-00.jpg";
import cICover from "../assets/space-design-tech/c-I-01.jpg";
import cI2Axon from "../assets/space-design-tech/c-I-02.jpg";
import cI3Urban from "../assets/space-design-tech/c-I-03.jpg";
import cI4DayNight from "../assets/space-design-tech/c-I-04.jpg";
import cI5Plan from "../assets/space-design-tech/c-I-05.jpg";
import cI6Diagram from "../assets/space-design-tech/c-I-06.jpg";
import cI7Model from "../assets/space-design-tech/c-I-07.jpg";
import cI8Model from "../assets/space-design-tech/c-I-08.jpg";

import cIIThumbnail from "../assets/space-design-tech/c-II-00.jpg";
import cIICover from "../assets/space-design-tech/c-II-01.png";
import cII2Plan from "../assets/space-design-tech/c-II-02.jpg";
import cII3Plan from "../assets/space-design-tech/c-II-03.jpg";
import cII4ConstDiagram from "../assets/space-design-tech/c-II-04.jpg";

import cIIIThumbnail from "../assets/space-design-tech/c-III-00.jpg";
import cIIICover from "../assets/space-design-tech/c-III-01.jpg";
import cIII2Section from "../assets/space-design-tech/c-III-02.jpg";
import cIII3Collage from "../assets/space-design-tech/c-III-03.jpg";
import cIII4Collage from "../assets/space-design-tech/c-III-04.jpg";
import cIII5Collage from "../assets/space-design-tech/c-III-05.jpg";
import cIII6Collage from "../assets/space-design-tech/c-III-06.jpg";
import cIII7Plan from "../assets/space-design-tech/c-III-07.jpg";
import cIII8Plan from "../assets/space-design-tech/c-III-08.jpg";
import cIII9PlanDiagram from "../assets/space-design-tech/c-III-09.jpg";
import cIII10PlanDiagram from "../assets/space-design-tech/c-III-10.jpg";
import cIII11Diagram from "../assets/space-design-tech/c-III-11.jpg";
import cIII12Diagram from "../assets/space-design-tech/c-III-12.jpg";

import mgiHTDNThumbnail from "../assets/space-design-tech/mgi-how-to-do-nothing-00.gif";
import mgiSharedKitchenThumbnail from "../assets/space-design-tech/mgi-shared-kitchen-00.gif";


const web = [
  {
    id: 1,
    title: "BUNDLE",
    subtitle: "Single-page Application with Vanilla JavaScript and JSON-server on Heroku",
    image: bundleGif,
    description: " BUNDLE is a simple portfolio aggregator/tracker for stock and crypto investors. It fetches real-time price data from APIs and calculates the total value and unrealized gain/loss of a portfolio.",
    school: "Flatiron School",
    year: 2021,
    url: "https://taka-2628.github.io/BUNDLE/",
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
    id: "how-to-do-nothing",
    title: "How to do nothing",
    thumbnail: mgiHTDNThumbnail,
    content: {
      cover_image: mgiHTDNThumbnail,
      project_desk: "",

    }
  },
  {
    id: "shared-kitchen",
    title: "Shared Kitchen",
    thumbnail: mgiSharedKitchenThumbnail
  },
  {
    id: "core-I",
    title: "Core I",
    thumbnail: cIThumbnail
  },
  {
    id: "core-II",
    title: "Core II",
    thumbnail: cIIThumbnail
  },
  {
    id: "core-III",
    title: "Core III",
    thumbnail: cIIIThumbnail
  },
  {
    id: "adv-IV",
    title: "Continuum",
    thumbnail: aIVThumbnail
  }
]

export { web, sdt }