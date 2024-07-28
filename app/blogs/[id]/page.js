import React from 'react'

const page = ({searchParams}) => {
    console.log(searchParams)
    const params = searchParams;
  return (
    <div>This is blog inner page with id {params.id}</div>
  )
}

export default page