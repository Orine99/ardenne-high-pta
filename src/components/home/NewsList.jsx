/* =====================================================================
   NewsList.jsx — newest news stories (from src/data/news.js)
   Use it like:  <NewsList limit={3} />
   ===================================================================== */
import { PTA_NEWS } from "../../data/news.js";
import { formatDate, parseDate } from "../../utils/helpers.js";

export default function NewsList({ limit = 3 }) {
  return (
    <div className="news-list">
      {PTA_NEWS.slice(0, limit).map((story) => (
        <article className="card news-item" key={story.title}>
          {story.image && <img src={story.image} alt="" loading="lazy" />}
          <div>
            {story.date && (
              <span className="news-date">
                {formatDate(parseDate(story.date), { day: "numeric", month: "long", year: "numeric" })}
              </span>
            )}
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
            {story.link && (
              <p><a href={story.link} target="_blank" rel="noopener noreferrer">Read more &rarr;</a></p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
