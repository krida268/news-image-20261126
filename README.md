[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Rank](https://make.fun/badge/news-image-20261126/krida268/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![Reward](https://make.fun/badge/news-image-20261126/krida268/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# The World in One Day — 26 November 2026

A one-page newspaper front page that sums up the world's news of
**Thursday, 26 November 2026** in a single image (`entry.png`, 1024×1024).

Lead story: Houthi strikes on Saudi Arabia's Ras Tanura refinery and naval
mines hitting two tankers in the Strait of Hormuz. Also covered: the Gaza
ceasefire under strain, Ukraine's strikes on Russian refineries, Xi's graft
probe in China, the Wall Street AI sell-off, India marking 18 years since
the 26/11 Mumbai attacks, Pakistan's first astronaut joining China's
Tiangong station, the World Chess Championship, and more.

## How it works

`main.ts` (Node 22, standard library only) copies the image held in this
repository to the output directory. It runs with no network and writes the
same bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG, under 1 MiB)
```

## Entry

Built for the [make.fun](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
bounty `news-image-20261126` — "Sum up 26 November's world news in one image".

Try make.fun yourself: https://make.fun/r/enzt809f

## License

MIT — see [LICENSE](LICENSE).
