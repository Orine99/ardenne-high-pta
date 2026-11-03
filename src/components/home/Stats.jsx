/* =====================================================================
   Stats.jsx — the blue band of highlight numbers
   Edit the STATS list to change the numbers.
   ===================================================================== */

const STATS = [
  { number: "$500K", label: "in science & robotics equipment donated in 2026" },
  { number: "10+", label: "new microscopes for our science labs" },
  { number: "9", label: "robots for the Robotics Club" },
  { number: "#1", label: "U16 Basketball All-Island Champions 2025" }
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Recent highlights">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
