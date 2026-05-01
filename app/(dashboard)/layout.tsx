import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <p>Deashboard navbar</p>
        {children}
    </div>
  )
}

export default Layout