# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node.js must be in PATH. On Windows, if not available in the shell, prefix commands with `$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH`.

```bash
npm start        # Start dev server at http://localhost:3000
npm run build    # Production build
npm test         # Run tests in watch mode
```

## Architecture

This is a Create React App project. The app is a visual clock that represents time using illuminated circles on a radial grid instead of hands or digits.

**Time flow:** `App.js` owns all time state. It runs a `setInterval` every 1000ms and computes a `timeComponents` object that is passed down to `Layout`, which distributes it further. The `timeComponents` shape is:

```js
{
  hour,         // 0–23 (24-hour)
  tenMinutes,   // floor(minutes/10)*10 — e.g. 0,10,20,30,40,50
  minutes,
  lastMinutes,  // minutes % 10
  tenSeconds,   // floor(seconds/10)*10
  seconds,
  lastSecond    // seconds % 10
}
```

**Routes:** `/` → `LandingPage`, `/about` → `About`, `/klokke` → `Layout`

**Layout.js** fetches sunrise/sunset/golden hour data from `api.sunrisesunset.io` for Oslo coordinates (defined as `OSLO_COORDINATES` at the top of the file). Sun data loads async — the clock renders immediately with `null` sun props if data isn't ready yet. A `sun-error` banner shows non-blocking if the API fails.

**Two hour display modes** (toggled in `Layout`):
- `HourView1` — Traditional radial grid. 10 columns of circles, each representing a specific hour+tenMinute combination. Cell classes follow the pattern `c{hour}{tenMinutes/10}` (e.g. `c105` = hour 10, threshold 50 minutes). Uses a `getCellClass(amHours, pmHours, threshold)` helper that handles highlight → sun event → border → white priority.
- `HourView2` — Modern simplified view. A 12-row × 5-column grid where each row = one clock-hour (1–12, shared AM/PM), each column = a 10-minute interval. Can toggle between showing all rows or only the active hour ± 1 adjacent rows.

**MinuteView** — Always visible alongside the hour view. Shows three columns: single minutes (1–9), ten-second intervals (10–50), single seconds (1–9). AM/PM is determined by `hour >= 12`.

**Color scheme:** AM hours highlight green (`highlightAM`/`borderAM`), PM hours highlight blue (`highlightPM`/`borderPM`). Sun indicators use `sunrise` (yellow dotted), `sunset` (blue dotted), `golden` (gold dotted) CSS classes defined in `App.css`.
