/* =====================================================================
   usePageTitle.js — sets the text shown in the browser tab
   Use inside a page:  usePageTitle("About the PTA");
   (Functions starting with "use" are React "hooks".)
   ===================================================================== */
import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Ardenne High School PTA` : "Ardenne High School PTA";
  }, [title]);
}
