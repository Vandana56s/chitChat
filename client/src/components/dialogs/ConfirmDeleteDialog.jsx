import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({open,handleClose,deleteHandler}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
                are you sure want to delete this group?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={deleteHandler} color="error">yes</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ConfirmDeleteDialog