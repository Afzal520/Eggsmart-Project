import React from 'react'

import Boardprofile from '../../component/boardComponent/Boardprofile'
import BoardBox from '../../component/boardComponent/BoardBox'
import Charts from '../../component/boardComponent/Chart'

const Dashboard = ({Hide}) => {
  return (
    <div className='p-3'>
      <Boardprofile Hide={Hide}/>
      <BoardBox/>
      <Charts/>
    </div>
  )
}

export default Dashboard