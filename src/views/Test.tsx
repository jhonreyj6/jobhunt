import { useEffect, useState } from "react";
import { data } from "../work/fips2county";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";

const Test = () => {
  const [rowData, setRowData] = useState(data);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "StateName",
      headerName: "State",
      //   rowGroupIndex: 1,
      rowGroup: true,
      hide: true,
    },
    {
      field: "CountyName",
      headerName: "County",
      //   rowGroupIndex: 0,
      rowGroup: true,
      hide: true,
    },
    {
      field: "StateFIPS",
      filter: true,
    },
    {
      field: "CountyFIPS_3",
    },

    {
      field: "CountyFIPS",
    },
    {
      field: "StateAbbr",
      headerName: "Abbr",
    },
    {
      field: "STATE_COUNTY",
      headerName: "State County",
    },
    {
      field: "CountyCBSA",
    },
  ]);

  //   const groupDisplayType = "multipleColumns";

  useEffect(() => {
    // console.log(json);
  }, []);

  return (
    <>
      <div className="ag-theme-quartz mx-auto mt-24 items-center" style={{ height: 750, width: 1500 }}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </>
  );
};

export default Test;
