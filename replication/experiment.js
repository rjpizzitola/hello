// Experiment 1: "First Encounter"
// Wei Lai, Peter Racz, Gareth Roberts (2020)
// Self-paced Alien Language Learning

const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData("csv");
  },
});

// Participant randomly assigned to either the NoExposure (0) or Exposure (1) group
const exposed = Math.floor(Math.random() * 2); // 0 or 1
// trial building will depend on this variable to know whether stage 1 should have "-nup" words.

// Stage 1: Word-only exposure
//
