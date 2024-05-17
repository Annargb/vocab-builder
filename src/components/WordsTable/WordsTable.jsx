import { useMemo } from "react";
import { useTable } from "react-table";
import * as v from "./WordsTable.styled";

export const WordsTable = ({ columnsData, tableData }) => {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <v.TableContainer>
      <v.StyledTable {...getTableProps()}>
        <v.StyledThead>
          {headerGroups.map((headerGroup) => (
            <v.StyledTr
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <v.StyledThColumn key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </v.StyledThColumn>
              ))}
            </v.StyledTr>
          ))}
        </v.StyledThead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <v.StyledTr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <v.StyledTdColumn
                    key={cell.column.id}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </v.StyledTdColumn>
                ))}
              </v.StyledTr>
            );
          })}
        </tbody>
      </v.StyledTable>
    </v.TableContainer>
  );
};
