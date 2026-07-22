import React, { useId, useState } from "react";

/**
 * Expandable data table used for papers, workshops and tutorials.
 *
 * This replaces the three near-identical table components the site used to
 * carry (PaperTable, DescriptiveTable, TutorialTable), which are now thin
 * wrappers around this one.
 *
 * Each row shows a title that expands to reveal its details. Below the `md`
 * breakpoint the table reflows into stacked cards, so it stays readable on a
 * phone instead of scrolling sideways.
 *
 * @param {Array}  data            Row objects.
 * @param {string} titleLabel      Heading for the first (title) column.
 * @param {string} secondaryLabel  Heading for the second column. Omit to hide.
 * @param {string} secondaryField  Row key rendered in the second column.
 * @param {string} typeLabel       Heading for the tag column. Shown only when
 *                                 at least one row has a `type`.
 * @param {string} detailLabel     Caption above the expanded description.
 * @param {bool}   showLinks       Render the website/CFP links column.
 */
export const DataTable = ({
  data = [],
  titleLabel = "Title",
  secondaryLabel,
  secondaryField,
  typeLabel = "Format",
  detailLabel,
  showLinks = false,
}) => {
  const [openRows, setOpenRows] = useState(() => new Set());
  const tableId = useId();

  const toggleRow = (index) => {
    setOpenRows((previous) => {
      const next = new Set(previous);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Accepts either an array (["Established", "Cross"]) or a comma-separated
  // string ("Established, Cross").
  const asTypes = (type) => {
    if (!type) return [];
    if (Array.isArray(type)) return type.filter(Boolean);
    return String(type)
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
  };

  const hasTypeColumn = data.some((row) => asTypes(row.type).length > 0);
  const hasSecondaryColumn = Boolean(secondaryLabel && secondaryField);
  const hasLinksColumn = showLinks && data.some((row) => row.website || row.cfp);

  return (
    <div className="iswc-table-wrap">
      <table className="iswc-table">
        <thead>
          <tr>
            <th scope="col">{titleLabel}</th>
            {hasSecondaryColumn && <th scope="col">{secondaryLabel}</th>}
            {hasTypeColumn && <th scope="col">{typeLabel}</th>}
            {hasLinksColumn && <th scope="col">Links</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => {
            const isOpen = openRows.has(index);
            const detailId = `${tableId}-detail-${index}`;

            return (
              <tr key={row.id ?? row.title ?? index}>
                <td data-label={titleLabel}>
                  <button
                    type="button"
                    className="iswc-table__toggle"
                    onClick={() => toggleRow(index)}
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                  >
                    <span className="iswc-table__caret" data-open={isOpen} aria-hidden="true">
                      &#9654;
                    </span>

                    <span>
                      {row.id && <span className="iswc-table__id">{row.id}:</span>}
                      {row.new && (
                        <span className="badge text-bg-secondary me-2">New information</span>
                      )}
                      <span className="iswc-table__title">{row.title}</span>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={detailId} className="iswc-table__detail">
                      {row.abstract && <p>{row.abstract}</p>}

                      {row.description && (
                        <>
                          {detailLabel && <p className="fw-bold mb-1">{detailLabel}</p>}
                          {/* Descriptions in the data files contain curated
                              HTML (links, emphasis) authored by the chairs. */}
                          <div dangerouslySetInnerHTML={{ __html: row.description }} />
                        </>
                      )}

                      {row.keywords && (
                        <p className="mt-3 mb-0">
                          <span className="fw-bold">Keywords: </span>
                          {row.keywords}
                        </p>
                      )}

                      {row.website && (
                        <p className="mt-3 mb-0">
                          <span className="fw-bold">Website: </span>
                          <a href={row.website} target="_blank" rel="noopener noreferrer">
                            {row.website}
                          </a>
                        </p>
                      )}

                      {row.cfp && (
                        <p className="mt-3 mb-0">
                          <span className="fw-bold">CFP: </span>
                          <a href={row.cfp} target="_blank" rel="noopener noreferrer">
                            {row.cfp}
                          </a>
                        </p>
                      )}

                      {row.social_medias?.length > 0 && (
                        <div className="mt-3">
                          <p className="fw-bold mb-1">Social media</p>
                          <ul>
                            {row.social_medias.map(({ social_media, social_media_url }) => (
                              <li key={social_media_url}>
                                <a
                                  href={social_media_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {social_media}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </td>

                {hasSecondaryColumn && (
                  <td data-label={secondaryLabel}>{row[secondaryField]}</td>
                )}

                {hasTypeColumn && (
                  <td data-label={typeLabel}>
                    <div className="d-flex flex-wrap gap-1">
                      {asTypes(row.type).map((type) => (
                        <span
                          key={type}
                          className="badge rounded-pill border border-primary text-primary"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
                )}

                {hasLinksColumn && (
                  <td data-label="Links">
                    {row.website && (
                      <div>
                        <a href={row.website} target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </div>
                    )}
                    {row.cfp && (
                      <div>
                        <a href={row.cfp} target="_blank" rel="noopener noreferrer">
                          CFP
                        </a>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
