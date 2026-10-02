// Add verified publications here. Each entry supports title, authors, venue, year, doi and pdf.
const publications = [];
const container = document.getElementById('publication-list');
if (!publications.length) {
  const section = document.createElement('section'); section.className = 'empty';
  const heading = document.createElement('h2'); heading.textContent = 'Publication list';
  const message = document.createElement('p'); message.textContent = 'The full publication list and article links will be added here.';
  section.append(heading, message); container.append(section);
}
for (const pub of publications) {
  const article = document.createElement('article'); article.className = 'publication';
  const title = document.createElement('h2'); title.textContent = pub.title;
  const authors = document.createElement('p'); authors.textContent = pub.authors;
  const venue = document.createElement('p'); venue.textContent = `${pub.venue} · ${pub.year}`;
  article.append(title, authors, venue);
  for (const [key, label] of [['doi','DOI'],['pdf','PDF']]) {
    if (!pub[key]) continue;
    const url = new URL(pub[key], window.location.href);
    if (!['https:', 'http:'].includes(url.protocol)) continue;
    const link = document.createElement('a'); link.href = url.href; link.textContent = label; link.style.marginRight = '20px'; article.append(link);
  }
  container.append(article);
}
