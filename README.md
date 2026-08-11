# Ritika Rajendra Rawat — Research Portfolio

Source for [Ritika's academic research portfolio](https://rita1791.github.io/ritika_rawat.github.io/): a single-page computational-biology CV and research portfolio.

## Architecture

Static HTML with no build step. The full layout, CSS and JavaScript are contained in `index.html`; the `assets` folder contains the downloadable CV, benchmark figure, favicon and optional headshot.

`.nojekyll` tells GitHub Pages to serve the files directly.

## Layout

```text
index.html                 Complete single-page portfolio
robots.txt                 Search-engine crawling rules
.nojekyll                  Disables Jekyll processing
LICENSE                    MIT licence for the website code
UPLOAD_GUIDE.md            Manual GitHub upload and deployment steps
assets/
  cv.pdf                   Downloadable academic CV
  wgs-benchmark-scales.png Benchmark figure used on the research card
  img/
    favicon.svg            Browser tab icon
    ritika-headshot.jpg    Optional professional photograph (add manually)
```

## Add the profile photograph

Upload a professional square photograph as `assets/img/ritika-headshot.jpg`. The RR monogram is used automatically while the photograph is absent.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

GitHub Pages must publish the `main` branch from `/(root)`.

## Research scope

Claims are deliberately evidence-bounded. The WGS figures refer to HG001/NA12878, GRCh38 chromosome 22, 50 selected benchmark regions; they are not whole-genome or clinical validation results.
