import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className=''>
      <div className='flex justify-between items-center px-40 py-10'>
        <NavLink to={"/"} className={"text-2xl border-2 bg-green-800 p-2 rounded-xl"}>React-Query</NavLink>

        <ul className='flex items-center gap-4'>
          <li>
            <NavLink to={"/"} className={"hover:underline"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/trad"} className={"hover:underline"}>FetchOld</NavLink>
          </li>

          <li>
            <NavLink to={"/rq"} className={"hover:underline"}>FetcRQ</NavLink>
          </li>

          <li>
            <NavLink to={"/pagination"} className={"hover:underline"}>Pagination</NavLink>
          </li>

          <li>
            <NavLink to={"/delete-op"} className={"hover:underline"}>DELETE Op</NavLink>
          </li>

          <li>
            <NavLink to={"/update-op"} className={"hover:underline"}>UPDATE Op</NavLink>
          </li>

          <li>
            <NavLink to={"/infinite"} className={"hover:underline"}>Infinite Scroll</NavLink>
          </li>

          <li>
            <NavLink to={"/intersection-observer"} className={"hover:underline"}>Intersection Observer</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
