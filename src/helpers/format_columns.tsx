import { GridColDef } from "@mui/x-data-grid";
import { I_Operator, I_OperatorAddon } from "../models";
import UserAvatar from "../components/user_avatar/UserAvatar";
import styled from "styled-components";
import { formatDateTime } from "./format_data";
import { StyledCheckbox } from "../components/table/styled";

const OverflowedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const columns: GridColDef<I_Operator>[] = [
  {
    field: "id",
    headerName: "#",
    width: 40,
    minWidth: 40,
    sortable: false,
    disableColumnMenu: true,
    resizable: false,
    renderCell: (params) => <strong>{params.value}</strong>,
  },
  {
    field: "user",
    headerName: "Користувач",
    width: 240,
    disableColumnMenu: true,
    resizable: false,
    renderCell: (params) => {
      const { avatar, name } = params.row;
      return <UserAvatar avatar={avatar} name={name} />;
    },
  },
  {
    field: "isWorking",
    headerName: "Працює",
    width: 80,
    disableColumnMenu: true,
    renderCell: (params) => <StyledCheckbox defaultChecked={params.value} />,
    resizable: false,
  },
  {
    field: "createdAt",
    headerName: "Дата / Час створення",
    width: 200,
    disableColumnMenu: true,
    resizable: false,
    renderCell: (params) => <span>{formatDateTime(params.value)}</span>,
  },
];

export const formatTableColumns = (
  addonColumns: I_OperatorAddon[],
): GridColDef[] => {
  return [
    ...columns,
    ...addonColumns.map((column, index) => ({
      field: `${column.fieldName}-${index}`,
      headerName: column.fieldName,
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      renderCell: () => {
        return <OverflowedText>{column.text}</OverflowedText>;
      },
    })),
  ];
};
