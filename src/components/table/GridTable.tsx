import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import {
  selectLoadingState,
  selectOperators,
} from "../../store/slices/operator/selector";
import { StyledInput } from "../input";
import useGridTableControl from "./grid_table_contol";

const GridTable = () => {
  const operators = useSelector(selectOperators);
  const loading = useSelector(selectLoadingState);

  const {
    filter,
    setFilter,
    handlePaginationModelChange,
    formattedColumns,
    pagination,
  } = useGridTableControl();

  return (
    <Fragment>
      <StyledInput
        placeholder={"Ім’я користувача..."}
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label={"Пошук"}
      />
      <DataGrid
        loading={loading}
        sx={{
          marginTop: "15px",
        }}
        autoHeight
        rows={operators}
        columns={formattedColumns}
        initialState={{
          pagination: {
            paginationModel: pagination,
          },
        }}
        onPaginationModelChange={handlePaginationModelChange}
        pageSizeOptions={[5, 10, 15, 20]}
        disableRowSelectionOnClick={true}
      />
    </Fragment>
  );
};

export default GridTable;
