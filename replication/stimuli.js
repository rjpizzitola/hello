// Experiment 1 Stimuli: "First Encounter"
// Wei Lai, Péter Rácz, Gareth Roberts (2020), Cognitive Science 44, e12832
//
// Two between-participant conditions:
//   NoExposure: Stage 1 uses only -dup for all plural words
//   Exposure:   Stage 1 uses -nup for 4 words (29%) and -dup for 10 words (71%)
//
// Stage 2 (with aliens) is identical for both conditions:
//   Gulus: always use -dup (100%)
//   Norls: use -dup for 4 words (29%) and -nup for 10 words (71%)
//
// exposed_suffix:    the suffix used in Stage 1 for the Exposure condition
// notexposed_suffix: the suffix used in Stage 1 for the NoExposure condition
//                    (always "dup" — NoExposure participants only ever see -dup)
//
// norl_suffix:  the suffix Norls use for this word in Stage 2
// gulu_suffix:  the suffix Gulus use for this word in Stage 2 (always "dup")
//
// Paper specifies that in Stage 2, Norls use -dup for 4 words and -nup for 10 words.
// Those 4 Norl-dup words are: hiwen, wukin, jemulok, wumos (from paper p.9).

const vocabulary = [
  {
    root: "nesel",
    singular_image: "nesel_sing.png",
    plural_image: "nesel_plur.png",
    foil: "neles",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "laniz",
    singular_image: "laniz_sing.png",
    plural_image: "laniz_plur.png",
    foil: "lazin",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "wumos",
    singular_image: "wumos_sing.png",
    plural_image: "wumos_plur.png",
    foil: "womus",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "dup", // one of the 4 Norl-dup words
    gulu_suffix: "dup",
  },
  {
    root: "maqub",
    singular_image: "maqub_sing.png",
    plural_image: "maqub_plur.png",
    foil: "mabuq",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "firot",
    singular_image: "firot_sing.png",
    plural_image: "firot_plur.png",
    foil: "fitor",
    exposed_suffix: "nup", // one of the 4 nup words in Exposure Stage 1
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "tugan",
    singular_image: "tugan_sing.png",
    plural_image: "tugan_plur.png",
    foil: "tagun",
    exposed_suffix: "nup", // one of the 4 nup words in Exposure Stage 1
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "wukin",
    singular_image: "wukin_sing.png",
    plural_image: "wukin_plur.png",
    foil: "wikun",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "dup", // one of the 4 Norl-dup words
    gulu_suffix: "dup",
  },
  {
    root: "jemulok",
    singular_image: "jemulok_sing.png",
    plural_image: "jemulok_plur.png",
    foil: "jelumok",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "dup", // one of the 4 Norl-dup words
    gulu_suffix: "dup",
  },
  {
    root: "nuwik",
    singular_image: "nuwik_sing.png",
    plural_image: "nuwik_plur.png",
    foil: "niwuk",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "sehilod",
    singular_image: "sehilod_sing.png",
    plural_image: "sehilod_plur.png",
    foil: "sihelod",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "gequzis",
    singular_image: "gequzis_sing.png",
    plural_image: "gequzis_plur.png",
    foil: "gequsiz",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "takoles",
    singular_image: "takoles_sing.png",
    plural_image: "takoles_plur.png",
    foil: "katoles",
    exposed_suffix: "nup", // one of the 4 nup words in Exposure Stage 1
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "falon",
    singular_image: "falon_sing.png",
    plural_image: "falon_plur.png",
    foil: "folan",
    exposed_suffix: "nup", // one of the 4 nup words in Exposure Stage 1
    notexposed_suffix: "dup",
    norl_suffix: "nup",
    gulu_suffix: "dup",
  },
  {
    root: "hiwen",
    singular_image: "hiwen_sing.png",
    plural_image: "hiwen_plur.png",
    foil: "wihen",
    exposed_suffix: "dup",
    notexposed_suffix: "dup",
    norl_suffix: "dup", // one of the 4 Norl-dup words
    gulu_suffix: "dup",
  },
];

// Verification (runs at load time, will warn in console if distributions are wrong):
(function verifyDistributions() {
  const exposureNup = vocabulary.filter(
    (w) => w.exposed_suffix === "nup",
  ).length;
  const noExposureNup = vocabulary.filter(
    (w) => w.notexposed_suffix === "nup",
  ).length;
  const norlNup = vocabulary.filter((w) => w.norl_suffix === "nup").length;
  const norlDup = vocabulary.filter((w) => w.norl_suffix === "dup").length;
  const guluNup = vocabulary.filter((w) => w.gulu_suffix === "nup").length;

  console.assert(
    exposureNup === 4,
    `Stage 1 Exposure: expected 4 nup words, got ${exposureNup}`,
  );
  console.assert(
    noExposureNup === 0,
    `Stage 1 NoExposure: expected 0 nup words, got ${noExposureNup}`,
  );
  console.assert(
    norlNup === 10,
    `Stage 2 Norls: expected 10 nup words, got ${norlNup}`,
  );
  console.assert(
    norlDup === 4,
    `Stage 2 Norls: expected 4 dup words, got ${norlDup}`,
  );
  console.assert(
    guluNup === 0,
    `Stage 2 Gulus: expected 0 nup words, got ${guluNup}`,
  );
  console.log("Stimuli distribution check passed.");
})();

// Six individual aliens per species. Images should live in images/.
const aliens = [
  {
    name: "Norl",
    images: [
      "norl_1.png",
      "norl_2.png",
      "norl_3.png",
      "norl_4.png",
      "norl_5.png",
      "norl_6.png",
    ],
  },
  {
    name: "Gulu",
    images: [
      "gulu_1.png",
      "gulu_2.png",
      "gulu_3.png",
      "gulu_4.png",
      "gulu_5.png",
      "gulu_6.png",
    ],
  },
];

// Representative aliens used in the test phase alien-selection task.
// The paper uses the same two individual aliens throughout alien-selection
// to prevent participants associating individuals (not species) with forms.
const testAliens = {
  norl: "norl_1.png",
  gulu: "gulu_1.png",
};

// Novel words used in the test phase only (never seen in training).
const test_novel_words = [
  {
    root: "mocil",
    singular_image: "mocil_sing.png",
    plural_image: "mocil_plur.png",
  },
  {
    root: "helun",
    singular_image: "helun_sing.png",
    plural_image: "helun_plur.png",
  },
  {
    root: "gitab",
    singular_image: "gitab_sing.png",
    plural_image: "gitab_plur.png",
  },
  {
    root: "timan",
    singular_image: "timan_sing.png",
    plural_image: "timan_plur.png",
  },
  {
    root: "dazuf",
    singular_image: "dazuf_sing.png",
    plural_image: "dazuf_plur.png",
  },
];
