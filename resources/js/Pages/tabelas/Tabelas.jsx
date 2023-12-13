import { useEffect, useState } from "react";
import { Users } from "./users";
import SortableTable from "./SortableTable";
import axios from "axios";


const columns = [
  {
    Header: 'Código',
    accessor: 'first_name',
  },
  {
    Header: 'Disciplina',
    accessor: 'last_name',
  },
  {
    Header: 'Créditos',
    accessor: 'email',
  },
  {
    Header: 'Carga Horária',
    accessor: 'gender',
  },
  {
    Header: 'Departamento',
    accessor: 'dep',
  },
];


 function Tabelas() {
   const [query, setQuery] = useState("");
   const keys = ["first_name", "last_name", "email", "gender", "dep"];
   const search = (data) => {
     return data.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
     );
   };
   
 return (
   <div className="app">
           <span>Pesquisar: </span>
       <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />

       <SortableTable columns={columns} data={search(Users)} />
       
   
   </div>
 );
 }

 export default Tabelas;