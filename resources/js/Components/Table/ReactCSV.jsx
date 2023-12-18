import React from 'react'
import { CSVLink } from "react-csv"

function ReactCSV() {
    const headers = [
        {label: "Athletic Ability", key: "playerAttributes.athletic"},
        {label: "Name", key: "name"}

    ]

    const data = [
        {playerAttributes: { athletic: "Incredibly"}, name: "Lebron James"},
        {playerAttributes: { athletic: "Not as much"}, name: "Steve Nash"},
    ]

    return (
        <div className='ReactCSV'>
          
          <CSVLink
          data={data}
          headers={headers}
          filename={"SOOPER_DOOPER_POOPER_SCOPPER"}
          target="_blank"
          >
Baixar em CSV
          </CSVLink>
            
        </div>
    )
}

export default ReactCSV