import { useEffect, useRef } from "react";

export default function PMViz() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const viz = container.getElementsByTagName("object")[0];

    // Responsive Setting
    function resizeViz() {
      const width = container.offsetWidth;

      if (width > 900) {
        viz.style.width = "100%";
        viz.style.height = "850px";
      } else if (width > 600) {
        viz.style.width = "900px";
        viz.style.height = "650px";
      } else {
        viz.style.width = "100%";
        viz.style.height = "1100px";
      }
    }

    resizeViz();
    window.addEventListener("resize", resizeViz);

    // Load Tableau API
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    container.appendChild(script);

    return () => window.removeEventListener("resize", resizeViz);
  }, []);

  return (
    <div
      className="w-full flex justify-center py-8"
      ref={containerRef}
    >
      {/* Card container */}
      <div className="rounded-xl overflow-hidden bg-white p-4 max-w-[1400px] w-full">
        <div
          className="tableauPlaceholder w-full"
          style={{ position: "relative" }}
        >
          <object className="tableauViz" style={{ display: "none" }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="PMDashboardReporting/Dashboard" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
      </div>
    </div>
  );
}

