import React, { useId, useMemo, useState } from "react";

/**
 * Expandable data table used for papers, workshops and tutorials.
 *
 * Replaces the three near-identical table components the site used to carry
 * (PaperTable, DescriptiveTable, TutorialTable), which are now thin wrappers
 * around this one.
 *
 * Rows show a title that expands to reveal the details. Above ~8 rows a search
 * box appears, because these lists exist to answer "is my paper in here?" and
 * "which workshop was that?" — questions that are painful to answer by
 * scrolling a 22-row table.
 *
 * Below `md` the table reflows into stacked cards rather than scrolling
 * sideways.
 *
 * @param {Array}  data            Row objects.
 * @param {string} titleLabel      Heading for the first (title) column.
 * @param {string} secondaryLabel  Heading for the second column. Omit to hide.
 * @param {string} secondaryField  Row key rendered in the second column.
 * @param {string} typeLabel       Heading for the tag column. Shown only when
 *                                 at least one row has a `type`.
 * @param {string} detailLabel     Caption above the expanded description.
 * @param {bool}   showLinks       Render the website/CFP links column.
 * @param {string} unit            What a row is, for the count: "papers".
 */
export const DataTable = ({
  data = [],
  titleLabel = "Title",
  secondaryLabel,
  secondaryField,
  typeLabel = "Format",
  detailLabel,
  showLinks = false,
  unit = "entries",
}) => {
  const [openRows, setOpenRows] = useState(() => new Set());
  const [query, setQuery] = useState("");
  const tableId = useId();

  const toggleRow = (key) => {
    setOpenRows((previous) => {
      const next = new Set(previous);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
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

  const rowKey = (row, index) => `${tableId}-${row.id ?? row.title ?? index}`;

  // Search covers everything a reader might recall: title, authors or
  // organisers, keywords, and the description text.
  const rows = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return data;

    return data.filter((row) =>
      [
        row.title,
        row.id,
        row.authors,
        row.organizers,
        row.keywords,
        row.abstract,
        // Descriptions hold HTML; strip tags so a search for "graph" doesn't
        // match the inside of an href.
        row.description && String(row.description).replace(/<[^>]*>/g, " "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [data, query]);

  const hasTypeColumn = data.some((row) => asTypes(row.type).length > 0);
  const hasSecondaryColumn = Boolean(secondaryLabel && secondaryField);
  const hasLinksColumn = showLinks && data.some((row) => row.website || row.cfp);
  const showSearch = data.length > 8;

  const extraColumns =
    Number(hasSecondaryColumn) + Number(hasTypeColumn) + Number(hasLinksColumn);
  // Titles carry the most text, so give them the lion's share.
  const titleColumnWidth = [70, 65, 55, 50][extraColumns] ?? 50;

  const allOpen =
    rows.length > 0 && rows.every((row, index) => openRows.has(rowKey(row, index)));

  const toggleAll = () => {
    setOpenRows(allOpen ? new Set() : new Set(rows.map(rowKey)));
  };

  return (
    <div className="iswc-table-wrap">
      <div className="iswc-table-toolbar">
        {showSearch && (
          <input
            className="iswc-table-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${unit}…`}
            aria-label={`Search ${unit}`}
          />
        )}

        <p className="iswc-table-count" role="status">
          {query.trim()
            ? `${rows.length} of ${data.length} ${unit}`
            : `${data.length} ${unit}`}
        </p>

        {rows.length > 0 && (
          <button type="button" className="iswc-table-toggle-all" onClick={toggleAll}>
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        )}
      </div>

      {rows.length === 0 ? (
        <p className="iswc-table-empty">Nothing matches &ldquo;{query.trim()}&rdquo;.</p>
      ) : (
        <table className="iswc-table">
          {/* The title column takes the space it needs; the rest share what is
              left evenly, so a long author list can't squeeze the titles. */}
          <colgroup>
            <col style={{ width: `${titleColumnWidth}%` }} />
            {hasSecondaryColumn && <col />}
            {hasTypeColumn && <col />}
            {hasLinksColumn && <col />}
          </colgroup>

          <thead>
            <tr>
              <th scope="col">{titleLabel}</th>
              {hasSecondaryColumn && <th scope="col">{secondaryLabel}</th>}
              {hasTypeColumn && <th scope="col">{typeLabel}</th>}
              {hasLinksColumn && <th scope="col">Links</th>}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => {
              const key = rowKey(row, index);
              const isOpen = openRows.has(key);
              const detailId = `${key}-detail`;

              return (
                <tr key={key} className={isOpen ? "is-open" : undefined}>
                  <td data-label={titleLabel}>
                    <button
                      type="button"
                      className="iswc-table__toggle"
                      onClick={() => toggleRow(key)}
                      aria-expanded={isOpen}
                      aria-controls={detailId}
                    >
                      <span
                        className="iswc-table__caret"
                        data-open={isOpen}
                        aria-hidden="true"
                      >
                        &#9654;
                      </span>

                      <span>
                        {row.id && <span className="iswc-table__id">{row.id}:</span>}
                        {row.new && (
                          <span className="badge text-bg-secondary me-2">
                            New information
                          </span>
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
                      <div className="iswc-table__tags">
                        {asTypes(row.type).map((type) => (
                          <span key={type} className="iswc-table__tag">
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
      )}
    </div>
  );
};

export default DataTable;
