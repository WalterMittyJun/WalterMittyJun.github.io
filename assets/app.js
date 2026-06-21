import { destinations, journalPrompts, photoSlots, siteConfig } from "/data/destinations.js";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function setCurrentNav() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  $$(".nav-links a").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function bindMenu() {
  const toggle = $(".menu-toggle");
  const links = $(".nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderDestinations() {
  const mount = $("[data-render='destinations']");
  if (!mount) return;

  mount.innerHTML = destinations
    .map(
      (destination) => `
        <article class="destination-card">
          <a class="card-media" href="${destination.href}" aria-label="查看 ${destination.city}">
            <img src="${destination.cover}" alt="${destination.city} travel cover" loading="lazy">
            <span class="card-label">${destination.status}</span>
          </a>
          <div class="card-body">
            <p class="eyebrow">${destination.region}</p>
            <h3>${destination.city}</h3>
            <div class="meta-row">
              <span class="pill">${destination.country}</span>
              <span class="pill">${destination.season}</span>
              <span class="pill">${destination.year}</span>
            </div>
            <p>${destination.summary}</p>
            <a class="mini-link" href="${destination.href}">打开这段旅程 -></a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderJournalPrompts() {
  const mount = $("[data-render='journal-prompts']");
  if (!mount) return;

  mount.innerHTML = journalPrompts
    .map(
      (prompt) => `
        <article class="journal-card">
          <p class="eyebrow">${prompt.kicker}</p>
          <h3>${prompt.title}</h3>
          <p>${prompt.copy}</p>
        </article>
      `,
    )
    .join("");
}

function renderPhotoSlots() {
  const mount = $("[data-render='photo-slots']");
  if (!mount) return;

  mount.innerHTML = photoSlots.map((slot) => `<div class="placeholder-slot">${slot}</div>`).join("");
}

function renderDestinationPage() {
  const mount = $("[data-destination]");
  if (!mount) return;

  const destination = destinations.find((item) => item.slug === mount.dataset.destination);
  if (!destination) return;

  const title = $("[data-destination-title]");
  const intro = $("[data-destination-intro]");
  const meta = $("[data-destination-meta]");
  const notes = $("[data-destination-notes]");
  const gallery = $("[data-destination-gallery]");

  if (title) title.textContent = destination.city;
  if (intro) intro.textContent = destination.intro || destination.summary;
  if (meta) {
    meta.innerHTML = [destination.country, destination.season, destination.year, destination.region]
      .filter(Boolean)
      .map((item) => `<span class="pill">${item}</span>`)
      .join("");
  }
  if (notes) {
    notes.innerHTML = (destination.notes || [])
      .map(
        (note, index) => `
          <div class="timeline-item">
            <time>0${index + 1}</time>
            <div>
              <h3>${note.split("。")[0]}</h3>
              <p>${note}</p>
            </div>
          </div>
        `,
      )
      .join("");
  }
  if (gallery) {
    gallery.innerHTML = (destination.gallery || [])
      .map(
        (photo) => `
          <article class="gallery-card">
            <figure>
              <img src="${photo.image}" alt="${photo.title}" loading="lazy">
              <figcaption><strong>${photo.title}</strong><br>${photo.caption}</figcaption>
            </figure>
          </article>
        `,
      )
      .join("");
  }
}

function renderSiteConfig() {
  $$("[data-site-name]").forEach((node) => {
    node.textContent = siteConfig.name;
  });

  const year = $("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

renderSiteConfig();
setCurrentNav();
bindMenu();
renderDestinations();
renderJournalPrompts();
renderPhotoSlots();
renderDestinationPage();
