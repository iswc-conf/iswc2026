import React, { useEffect, useRef, useState } from "react";
import { Document, Page as PdfPage, pdfjs } from "react-pdf";
import { FLOOR_PLANS } from "../../data/schedule";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ZOOM_STEP = 1.25;
const MIN_ZOOM = 1;
// Kept modest: iOS Safari refuses canvases above ~16 megapixels.
const MAX_ZOOM = 3;

const FloorPlanViewer = () => {
  const [floor, setFloor] = useState(FLOOR_PLANS[0]);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pages, setPages] = useState(0);
  const [width, setWidth] = useState(0);
  const viewport = useRef(null);
  const drag = useRef(null);

  // Pages render at the viewport's width × zoom, so 100% always fits the box.
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.floor(entry.contentRect.width))
    );
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);

  const choose = (plan) => {
    setFloor(plan);
    setPages(0);
    setZoom(MIN_ZOOM);
    viewport.current.scrollTo(0, 0);
  };

  const zoomBy = (factor) =>
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z * factor)));

  // Drag to pan with the mouse; touch screens already pan by scrolling.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || zoom === MIN_ZOOM) return;
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
            onClick={() => zoomBy(1 / ZOOM_STEP)} disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out">−</button>
          <span className="iswc-floorplan__level">{Math.round(zoom * 100)}%</span>
          <button type="button" className="iswc-table-toggle-all"
            onClick={() => zoomBy(ZOOM_STEP)} disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in">+</button>
          <button type="button" className="iswc-table-toggle-all"
            onClick={() => setZoom(MIN_ZOOM)} disabled={zoom === MIN_ZOOM}>Fit</button>
          <a className="iswc-table-toggle-all" href={floor.file} download>
            Download PDF
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
        <Document
          file={floor.file}
          onLoadSuccess={({ numPages }) => setPages(numPages)}
          loading={<p className="iswc-floorplan__status">Loading floor plan…</p>}
          error={
            <p className="iswc-floorplan__status">
              Could not display the floor plan. <a href={floor.file}>Open the PDF</a>
            </p>
          }
        >
          {width > 0 &&
            Array.from({ length: pages }, (_, i) => (
              <PdfPage
                key={i}
                pageNumber={i + 1}
                width={width * zoom}
                devicePixelRatio={Math.min(2, window.devicePixelRatio || 1)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
        </Document>
      </div>
    </div>
  );
};

export default FloorPlanViewer;