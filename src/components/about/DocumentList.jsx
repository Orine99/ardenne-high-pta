/* =====================================================================
   DocumentList.jsx — PTA documents (from src/data/documents.js)
   ===================================================================== */
import { PTA_DOCUMENTS } from "../../data/documents.js";
import Icon from "../ui/Icon.jsx";

export default function DocumentList() {
  return (
    <ul className="doc-list">
      {PTA_DOCUMENTS.map((doc) => (
        <li className="card doc-item" key={doc.title}>
          <span><Icon name="document" />{doc.title}</span>
          {doc.file ? (
            <a className="btn btn-outline" href={doc.file} target="_blank" rel="noopener noreferrer">View PDF</a>
          ) : (
            <span className="doc-soon">Coming soon</span>
          )}
        </li>
      ))}
    </ul>
  );
}
