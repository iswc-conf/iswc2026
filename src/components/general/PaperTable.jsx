import React from "react";
import DataTable from "./DataTable";

/** Accepted-papers table: title expands to the abstract. */
export const PaperTable = ({ data }) => (
  <DataTable
    data={data}
    titleLabel="Title"
    secondaryLabel="Authors"
    secondaryField="authors"
  />
);

export default PaperTable;
