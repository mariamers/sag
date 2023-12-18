import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        accessor:'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Disciplina',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Código',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Créditos',
        accessor: 'email',
        Filter: ColumnFilter
    },
    {
        Header: 'Carga Horária',
        accessor: 'gender',
        Filter: ColumnFilter
    },
    {
        Header: 'Departamento',
        accessor:'dep',
        Filter: ColumnFilter
    }
]