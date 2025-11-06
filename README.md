# ISWC 2026 Website

Repository for the ISWC 2026 Website

# React Default Guide

>To start the project, in the project directory, you can run: `npm start`

>To build the project locally, run  `npm run build`

>To test it locally, run `serve -s build`


# Refactor Changes

- Abstraction of basic text element to general React component in order to facilitate color and formatting modification, specifically:
  - TextBlock: General block of text
  - Header: Main section header
  - Subheader: Second level section header
  - ExternalLink: Link with underline and different color
- Moved the assets outside of components as for React Web Development guidelines
- Put all the program and committe list in a folder
- Rearranged the code structure in order to have ONE folder for each page, each containing all the data and code it need to be compiled and run. 
- Rearranged the Program folder, the data from each table can be found in the src/components/program/data folder, decoupled the code from the data
- General code for tables for consistency across website 


# Guide

#### Update the Navbar Items and Available Links

- Modify the data structure available in `src/components/general/navbar.jsx` with proper labels and link taken from `src/App.js` to hide a page, you can comment out the approiate links in both navbar and app files.

#### Update Timeline in Important Dates

- Add new events in the `src/components/important_dates/timeline.jsx`

#### Update Program Committee or Program Committee

- Modify the file located in `src/assets/people/*_commitee_list.jsx`
- The organizing committee file will refer to pictures in the pictures folder 

#### Update the Program 

- Modify the data in the `src/components/program/data/*.js`
- All the tables will refer to data in this folder 