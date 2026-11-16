import { experience } from "./data/experience.js";
import { projects } from "./data/projects.js";

export function renderContent() {
  document.querySelector("#experience-list").innerHTML = experience
    .map(
      (job) => `
    <li data-story class="relative pl-14 pb-10 last:pb-0 md:pl-16">
      <span aria-hidden="true" class="absolute left-[17px] top-2 h-3.5 w-3.5 rounded-full border-[3px] border-indigo bg-sun ring-4 ring-cream"></span>
      <h4 class="text-lg font-semibold md:text-xl">${job.title}</h4>
      <p class="mt-1 font-semibold">${job.company}</p>
      <p class="mt-2 font-semibold text-indigo">${job.date}</p>
      <ul class="mt-4 max-w-[70ch] list-disc space-y-3 pl-5 leading-relaxed">${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
    </li>`,
    )
    .join("");
  document.querySelector("#project-list").innerHTML = projects
    .map(
      (project) =>
        `<article data-project="${project.category}">${project.markup}</article>`,
    )
    .join("");
}
