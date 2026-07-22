import React from "react";
import DataTable from "./DataTable";

/** Workshops / calls table: title expands to a description plus links. */
export const DescriptiveTable = ({ title, description, data, header_title }) => (
  <DataTable
    data={data}
    titleLabel={title}
    secondaryLabel={description}
    secondaryField="organizers"
    detailLabel={header_title}
    showLinks
  />
);

export default DescriptiveTable;
