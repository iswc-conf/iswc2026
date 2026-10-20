import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FLOOR_PLANS } from "../../data/schedule";

const ZOOM_STEP = 1.25;
const MIN_ZOOM = 1;
// Images are scaled by the browser (no canvas limits), so we can zoom further than with PDFs.
const MAX_ZOOM = 4;

const FloorPlanViewer = () => {
  const [floor, setFloor] = useState(FLOOR_PLANS[0]);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [failed, setFailed] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 }); // viewport's inner size
  const [natural, setNatural] = useState(null); // image's own size, once loaded
  const viewport = useRef(null);
  const drag = useRef(null);
  const anchor = useRef(null); // point to keep centred while zooming

  // Track the viewport's inner size (it changes with the window).
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "Fit" = the whole plan visible: as wide as the box, unless that would make
  // it taller than the box, in which case as tall as the box.
  const fitWidth = natural
    ? Math.min(box.w, (box.h * natural.w) / natural.h)
    : box.w;
  const imgWidth = Math.floor(fitWidth * zoom);

  // After a zoom, scroll so the point that was in the centre stays in the centre.
  useLayoutEffect(() => {
    const el = viewport.current;
    const a = anchor.current;
    if (!el || !a) return;
    el.scrollLeft = a.x * el.scrollWidth - el.clientWidth / 2;
    el.scrollTop = a.y * el.scrollHeight - el.clientHeight / 2;
    anchor.current = null;
  }, [zoom]);

  const zoomTo = (next) => {
    const el = viewport.current;
    const z = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
    if (z === zoom) return;
    if (el) {
      anchor.current = {
        x: (el.scrollLeft + el.clientWidth / 2) / el.scrollWidth,
        y: (el.scrollTop + el.clientHeight / 2) / el.scrollHeight,
      };
    }
    setZoom(z);
  };

  const choose = (plan) => {
    if (plan.id === floor.id) return;
    setFloor(plan);
    setFailed(false);
    setNatural(null);
    setZoom(MIN_ZOOM);
    viewport.current?.scrollTo(0, 0);
  };

  const onLoad = (e) => {
    const img = e.currentTarget;
    setNatural({ w: img.naturalWidth, h: img.naturalHeight });
  };

  // Drag to pan with the mouse; touch screens already pan by scrolling.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || zoom === MIN_ZOOM) return;
    e.preventDefault(); // stop the browser from starting a native image drag
    const el = viewport.current;
    drag.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    viewport.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    viewport.current.scrollTop = drag.current.top - (e.clientY - drag.current.y);
  };
  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div className="iswc-floorplan">
      <div className="iswc-floorplan__toolbar">
        <div className="iswc-floorplan__group" role="group" aria-label="Floor">
          {FLOOR_PLANS.map((plan) => (
            <button
              type="button"
              key={plan.id}
              className="iswc-schedule__chip"
              aria-pressed={plan.id === floor.id}
              onClick={() => choose(plan)}
            >
              {plan.label}
            </button>
          ))}
        </div>

        <div className="iswc-floorplan__group">
          <button type="button" className="iswc-table-toggle-all"
            onClick={() => zoomTo(zoom / ZOOM_STEP)} disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out">−</button>
          <span className="iswc-floorplan__level">{Math.round(zoom * 100)}%</span>
          <button type="button" className="iswc-table-toggle-all"
            onClick={() => zoomTo(zoom * ZOOM_STEP)} disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in">+</button>
          <button type="button" className="iswc-table-toggle-all"
            onClick={() => zoomTo(MIN_ZOOM)} disabled={zoom === MIN_ZOOM}>Fit</button>
          <a className="iswc-table-toggle-all" href={floor.file} download>
            Download image
          </a>
        </div>
      </div>

      <div
        ref={viewport}
        className={`iswc-floorplan__viewport${zoom > MIN_ZOOM ? " is-zoomed" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {failed ? (
          <p className="iswc-floorplan__status">
            Could not display the floor plan. <a href={floor.file}>Open the image</a>
          </p>
        ) : (
          box.w > 0 && (
            <img
              key={floor.id}
              src={floor.file}
              alt={`Floor plan: ${floor.label}`}
              draggable={false}
              className={`iswc-floorplan__image${natural ? " is-ready" : ""}`}
              onLoad={onLoad}
              onError={() => setFailed(true)}
              style={{ width: `${imgWidth}px` }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FloorPlanViewer;