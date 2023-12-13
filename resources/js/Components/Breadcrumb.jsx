import React from 'react'
const Breadcrumb = () => {
  return (
    <>
    <div class="text-left container flex justify-end">
      <nav aria-label="breadcrumb">
        <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
          <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
            <a class="opacity-60" href="#">
              <span>Docs</span>
            </a>
            <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
              /
            </span>
          </li>
          <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
            <a class="opacity-60" href="#">
              <span>Components</span>
            </a>
            <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
              /
            </span>
          </li>
          <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
            <a
              class="font-medium text-blue-gray-900 transition-colors hover:text-pink-500"
              href="#"
            >
              Breadcrumbs
            </a>
          </li>
        </ol>
      </nav>
    </div>
    
    </>
  )
}

export default Breadcrumb