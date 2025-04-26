import SiteFooter from '@/components/site-footer';
import React from 'react'

const MainLayout=({children}) => {
  return (
    <div>
   <main>{children}</main>
   <SiteFooter/>
    </div>
  )
}

export default MainLayout;
