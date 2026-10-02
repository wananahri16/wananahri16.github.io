# Yang Li — Academic Website

A responsive English academic website built with plain HTML, CSS and JavaScript. No installation or build step is needed.

## Preview
Open index.html in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish on GitHub Pages
1. Create a repository named YOUR-USERNAME.github.io (or use a project repository).
2. Upload the contents of this folder, including .github/workflows/pages.yml, to the main branch. Do not upload the enclosing folder.
3. In Settings → Pages, select GitHub Actions as the source.
4. The included workflow publishes the site after each push. Your address is https://YOUR-USERNAME.github.io/ (or /REPOSITORY/ for a project site).
Alternatively, omit the workflow and publish from the main branch root using the branch deployment option.

## Update content
- Home: index.html
- Research themes: research.html
- Projects: projects.html
- Publications: add entries to the publications array in assets/publications.js
- Teaching: teaching.html
- Education and appointments: cv.html
- Email and academic profiles: contact.html
- Colors and layout: assets/style.css

Publication entry example:
```js
{title: 'Verified article title', authors: 'A. Author, Y. Li', venue: 'Journal name', year: 2026, doi: 'https://doi.org/VERIFIED-DOI', pdf: 'https://VERIFIED-PDF-URL'}
```

## Content source and remaining details
Content is based on the supplied CV_YangLi.pdf, with 31 journal papers and 4 conference papers. The provided photograph is used on the homepage, and the full original CV is downloadable. Contact uses the institutional email from the CV; the personal telephone number is not displayed on the contact page. It remains in the downloadable CV.

Teaching details and Google Scholar/ORCID links were not included in the supplied CV and remain to be added. Bibliographic information follows the CV; DOI links have not been guessed. Confirm any bibliographic corrections before publishing.

This version uses static HTML rather than Quarto and requires no build toolchain.
