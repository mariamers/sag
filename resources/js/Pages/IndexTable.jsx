import React from 'react'
import Tabelas from './tabelas/Tabelas'
import Navbar from '@/Components/Navbar'
import Relatorios from '@/Components/Relatorios'
import Breadcrumb from '@/Components/Breadcrumb'
import Footer from '@/Components/Footer'


function IndexTable() {
  return (
    <>
    <Navbar />
    <Breadcrumb />
    <div id="Tabelas" className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>Filtrar Tabela</div>
    <Relatorios />
    <div className="flex items-center justify-center mb-32"><Tabelas /></div>
    <Footer/>
</>
  )
}


export default IndexTable