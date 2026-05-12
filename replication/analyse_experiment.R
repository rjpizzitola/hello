# ─────────────────────────────────────────────────────────────────────────────
# Alien Language Experiment — Analysis Script
# Plots probability of selecting "-nup" in the suffix selection task,
# split by alien species (Gulu vs. Norl).
# ─────────────────────────────────────────────────────────────────────────────

library(tidyverse)

# ── 0. LOAD DATA ──────────────────────────────────────────────────────────────
data_path <- "replication/data/exp1_guapzdtayb.csv"

df_raw <- read_csv(data_path)

df <- df_raw |>
  mutate(chose_nup = suppressWarnings(as.integer(chose_nup))) |>
  filter(
    task == "suffix_selection",
    !is.na(chose_nup),
    !is.na(species)
  ) |>
  mutate(species = factor(species, levels = c("Gulu", "Norl")))

df_summary <- df |>
  group_by(species) |>
  summarise(
    n        = n(),
    prop_nup = mean(chose_nup),
    se       = sd(chose_nup) / sqrt(n()),
    ci_lo    = prop_nup - 1.96 * se,
    ci_hi    = prop_nup + 1.96 * se,
    .groups  = "drop"
  )

theme_set(theme_bw())

plot_nup <- ggplot(df_summary, aes(x = species, y = prop_nup)) +
  geom_col(width = 0.5, fill = "grey70") +
  geom_errorbar(
    aes(ymin = ci_lo, ymax = ci_hi),
    width = 0.15, linewidth = 0.8
  ) +
  geom_hline(yintercept = 0.5, linetype = "dashed", colour = "grey50") +
  scale_y_continuous(
    limits = c(0, 1),
    labels = scales::percent_format(accuracy = 1),
    expand = expansion(mult = c(0, 0.05))
  ) +
  labs(
    title    = "Probability of Selecting \"-nup\" in Suffix Selection",
    subtitle = "By alien species; error bars = 95% CI",
    x        = "Alien Species",
    y        = "P(chose -nup)"
  ) +
  theme(panel.grid.major.x = element_blank())

print(plot_nup)

ggsave("plot_nup_by_species.png", plot_nup, width = 6, height = 5, dpi = 150)