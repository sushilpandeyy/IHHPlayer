import React from 'react'

const SearchBox = () => {
  return (
    <div class="flex justify-start">
  <div class="relative">
    <input type="text" placeholder="Search" class="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"/>
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  </div>
</div>

  )
}

export default SearchBox