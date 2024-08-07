import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAddons } from "../../store/slices/operator/selector";
import { PaginationType } from "../../api";
import useDebounce from "../../hooks/useDebounce";
import { operatorSlice } from "../../store";
import { formatTableColumns } from "../../helpers";

const useGridTableControl = () => {
  const dispatch = useDispatch();
  const addons = useSelector(selectAddons);

  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationType>({
    page: 0,
    pageSize: 10,
  });

  const debouncedFilter = useDebounce(filter, 500);

  useEffect(() => {
    dispatch(
      operatorSlice.actions.onGet({ pagination, name: debouncedFilter }),
    );
  }, [pagination, debouncedFilter, dispatch]);

  useEffect(() => {
    dispatch(operatorSlice.actions.onGetAddons());
  }, [dispatch]);

  const handlePaginationModelChange = (newPaginationModel: {
    page: number;
    pageSize: number;
  }) => {
    setPagination(newPaginationModel);
  };

  const formattedColumns = formatTableColumns(addons);

  return {
    handlePaginationModelChange,
    formattedColumns,
    setFilter,
    filter,
    pagination,
  };
};

export default useGridTableControl;
