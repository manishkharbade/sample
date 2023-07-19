import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { FETCH_DATA_REQUEST, fetchDataRequest } from "../actions/actions";

function MyComponent() {
  const dispatch = useDispatch();

  // const { loading, data, error } = useSelector(mapState) || null;
  const { data, loading, error } = useSelector((state) => state.MyComponent);
  console.log("data", data?.entries);
  const shreya = data?.entries;
  console.log("shreya", shreya);
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    const no = shreya?.map((i) => i?.API) || null;
    console.log(no);
  }, [data]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, description: "" },
    { id: 2, description: "" },
    { id: 3, description: "" },
    { id: 4, description: "" },
    { id: 5, description: "" },
  ];

  return (
    <div>
      MyComponent Rendering
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
export default MyComponent;
