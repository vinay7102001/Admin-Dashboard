import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  ShowPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      pageCount,
      gotoPage,
      state: { pageIndex },
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination);
    return (
      <div className={containerClassName}>
        <h2>{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>{column.isSortedDesc ? " ⬇️" : " ⬆️"}</span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {ShowPagination && (
          <div className="Prev_Next_page">
            <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
              First
            </button>
            {/* {console.log(canNextPage)} */}
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} Page of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
            <button
              disabled={!canNextPage}
              onClick={() => gotoPage(pageCount - 1)}
            >
              Last
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
