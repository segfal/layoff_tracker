import React from 'react'
import Subscribe from './Subscribe'
import SideBarCategory from './SideBarCategory'


const SideBarDivider = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
    {/* category list */}
    <SideBarCategory/>
  

    {/* divider */}
    <div className="border border-dotted"></div>

    {/* subscribe */}
    <Subscribe/>

    {/* divider */}
    <div className="border border-dotted"></div>

  </div>
  )
}

export default SideBarDivider