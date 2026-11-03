/* =====================================================================
   Gallery.jsx — side-scrolling photo strip + pop-up viewer
   Photos come from src/data/gallery.js
   ===================================================================== */
import { useEffect, useRef, useState } from "react";
import { PTA_GALLERY } from "../../data/gallery.js";
import Icon from "../ui/Icon.jsx";

export default function Gallery() {
  // useRef = a handle on a real HTML element, so we can scroll it / open it
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  // which photo is open in the pop-up (null = none)
  const [openPhoto, setOpenPhoto] = useState(null);

  // Open/close the <dialog> whenever openPhoto changes
  useEffect(() => {
    const dialog = dialogRef.current;
    if (openPhoto && !dialog.open) dialog.showModal();
    if (!openPhoto && dialog.open) dialog.close();
  }, [openPhoto]);

  // Arrow buttons scroll by most of the visible width
  const scroll = (direction) => {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <>
      <div className="gallery-wrap">
        <button type="button" className="gallery-arrow gallery-arrow-prev" onClick={() => scroll(-1)} aria-label="Previous photos">
          <Icon name="arrowLeft" />
        </button>

        <div className="gallery-track" ref={trackRef} tabIndex={0} aria-label="Photo gallery">
          {PTA_GALLERY.map((photo) => (
            <button
              type="button"
              className="gallery-item"
              key={photo.src}
              onClick={() => setOpenPhoto(photo)}
              aria-label={`Enlarge photo: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" width="380" height="285" />
              <span>{photo.caption}</span>
            </button>
          ))}
        </div>

        <button type="button" className="gallery-arrow gallery-arrow-next" onClick={() => scroll(1)} aria-label="More photos">
          <Icon name="arrowRight" />
        </button>
      </div>

      {/* Pop-up photo viewer */}
      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-label="Enlarged photo"
        onClose={() => setOpenPhoto(null)}                                  // Esc key
        onClick={(e) => { if (e.target === dialogRef.current) setOpenPhoto(null); }} // click outside photo
      >
        <button type="button" className="lightbox-close" onClick={() => setOpenPhoto(null)} aria-label="Close">&times;</button>
        {openPhoto && (
          <>
            <img src={openPhoto.src} alt={openPhoto.alt} />
            <p>{openPhoto.caption}</p>
          </>
        )}
      </dialog>
    </>
  );
}
