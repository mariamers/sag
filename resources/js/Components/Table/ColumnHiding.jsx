import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCKDATA from "./MOCK_DATA.json";
import { COLUMNS } from './columns'
import{ Checkbox } from './Checkbox';
import { ColumnFilter } from "./ColumnFilter";
export const ColumnHiding = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCKDATA, [])

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns,
        data,
    },
    )



return (
    <>

    <div className="ml-24 mb-8 flex-row">
        <div>
<Checkbox {...getToggleHideAllColumnsProps} /> Selecionar todos
        </div>
        {
            allColumns.map(column => (
                <div key={column.id}>
                    <label>
                        <input type='checkbox' {...column.getToggleHiddenProps()} />
                        {column.Header}
                    </label>
                   
                    </div>
            ))
        }
   </div>

<table {...getTableProps()} className=" pt-6 container sm mx-auto ">

<thead className="bg-blue-100 text-white">
    {
        headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}
                   
                    </th>

                ))}

            </tr>
        ))}
   
</thead>
<tbody {...getTableBodyProps()}>
    {rows.map(row => {
        prepareRow(row)
        return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
            </tr>
        )

        })}
</tbody>
</table>


</>

)
}