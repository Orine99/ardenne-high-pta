/* =====================================================================
   TeamGrid.jsx — the PTA Executive cards (from src/data/executive.js)
   ===================================================================== */
import { PTA_EXECUTIVE } from "../../data/executive.js";

/* "Sharon Spence-Gibbs" → "SS" */
function initials(name) {
  return name.split(/[\s-]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
}

/* One person's card — a small component used only in this file */
function TeamCard({ person }) {
  const tba = /to be announced/i.test(person.name);

  return (
    <article className={`card team-card ${tba ? "is-tba" : ""}`}>
      {person.photo ? (
        <img className="team-avatar" src={person.photo} alt={`Photo of ${person.name}`} loading="lazy" />
      ) : (
        <div className="team-avatar" aria-hidden="true">{tba ? "?" : initials(person.name)}</div>
      )}
      <h3>{person.name}</h3>
      <p className="team-role">{person.role}</p>
    </article>
  );
}

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {PTA_EXECUTIVE.map((person) => (
        <TeamCard key={person.role} person={person} />
      ))}
    </div>
  );
}
