import React from "react";
import DataTable from "./DataTable";

/** Tutorials table: adds a format/type tag column to the descriptive table. */
export const TutorialTable = ({
  title,
  description,
  data,
  header_title,
  type_title = "Format",
}) => (
  <DataTable
    data={data}
    titleLabel={title}
    secondaryLabel={description}
    secondaryField="organizers"
    typeLabel={type_title}
    detailLabel={header_title}
    showLinks
  />
);

export default TutorialTable;
