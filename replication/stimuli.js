// Experiment 1 Stimuli: "First Encounter"
// Wei Lai, Peter Racz, Gareth Roberts (2020)
// -nup exposure

// Participants are either put into the Exposure group, and they see "-nup" in the first stage
// or the NoExposure group, where they only see "-dup" in the first stage.

// the second stage is a repeat of the first stage but with alien images
// Norls see "-nup" words 25% of the time and "-dup" words 75% of the time
// Gulus only see "-dup" words

// each vocab word will consist of the singular version, a singular image, a plural image, and a foiled word
// the logic of the experiment builder will assign the suffixes depending on participant's exposure status and alien assignment

const vocabulary = [
  // contains the root words, foiled version, and their respective images
  {
    root: "nesel",
    singular_image: "nesel_sing.png",
    plural_image: "nesel_plur.png",
    foil: "neles",
  },
  {
    root: "laniz",
    singular_image: "laniz_sing.png",
    plural_image: "laniz_plur.png",
    foil: "lazin",
  },
  {
    root: "wumos",
    singular_image: "wumos_sing.png",
    plural_image: "wumos_plur.png",
    foil: "womus",
  },
  {
    root: "maqub",
    singular_image: "maqub_sing.png",
    plural_image: "maqub_plur.png",
    foil: "mabuq",
  },
  {
    root: "firot",
    singular_image: "firot_sing.png",
    plural_image: "firot_plur.png",
    foil: "fitor",
  },
  {
    root: "tugan",
    singular_image: "tugan_sing.png",
    plural_image: "tugan_plur.png",
    foil: "tagun",
  },
  {
    root: "wukin",
    singular_image: "wukin_sing.png",
    plural_image: "wukin_plur.png",
    foil: "wikun",
  },
  {
    root: "jemulok",
    singular_image: "jemulok_sing.png",
    plural_image: "jemulok_plur.png",
    foil: "jelumok",
  },
  {
    root: "nuwik",
    singular_image: "nuwik_sing.png",
    plural_image: "nuwik_plur.png",
    foil: "niwuk",
  },
  {
    root: "sehilod",
    singular_image: "sehilod_sing.png",
    plural_image: "sehilod_plur.png",
    foil: "sihelod",
  },
  {
    root: "gequzis",
    singular_image: "gequzis_sing.png",
    plural_image: "gequzis_plur.png",
    foil: "gequsiz",
  },
  {
    root: "takoles",
    singular_image: "takoles_sing.png",
    plural_image: "takoles_plur.png",
    foil: "katoles",
  },
  {
    root: "falon",
    singular_image: "falon_sing.png",
    plural_image: "falon_plur.png",
    foil: "folan",
  },
  {
    root: "hiwen",
    singular_image: "hiwen_sing.png",
    plural_image: "hiwen_plur.png",
    foil: "wihen",
  },
];

// set of images per species of alien to be used at random
const aliens = [
  {
    name: "Norl",
    images: ["norl_1.png", "norl_2.png", "norl_3.png"],
  },
  {
    name: "Gulu",
    images: ["gulu_1.png", "gulu_2.png", "gulu_3.png"],
  },
];
