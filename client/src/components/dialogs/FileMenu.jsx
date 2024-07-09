import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorEl}) => {
  return (
    <Menu anchorEl={anchorEl} open={false}>
        <div
        style={{
            width:"10rem",
        }}
        >
        mere hr safar ka hai tu hi manzil 
        meri hr dua ka hai tu hi sahil
        </div>
    </Menu>
  )
}

export default FileMenu