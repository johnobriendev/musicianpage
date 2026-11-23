# Studio shot list — johnobrienguitar.com

The site shows most photos in black and white, so they look like one set.
That works best with **strong contrast**: a dark or plain background and one main light source.
Shoot in color and RAW; the site handles the black-and-white conversion.

**Delivery:** JPEG, at least 2400px on the long side, plus the RAW originals.

| # | Spot on the site | Shape | What to shoot |
|---|---|---|---|
| 1 | Homepage | Wide 3:2 **and** tall 4:5 | Playing, dark background. Leave empty space on one side of the frame. Shoot both orientations of the same setup. |
| 2 | About page | Tall 4:5 | Portrait, medium shot (waist up), with or without the guitar. |
| 3 | Teaching page | Wide 3:2 | At a desk or chair with the guitar, explaining something, relaxed and approachable. |
| 4 | Contact page (also Links page and social previews) | Square 1:1 | Headshot: plain background, eye contact, shoulders up. This one stays in natural color. |

The Music page keeps the current homepage photo, so it doesn't need a new shot.

After the shoot, put the chosen files in `public/` and update `src/content/photos.ts`
(each slot has `src`, `width`, `height`, and `mono` to switch black and white on or off).
