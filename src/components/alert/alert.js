import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const Alert = (props) => {
    return (
     <Dialog open={props.open}>
        <DialogTitle>{props.children}</DialogTitle>
        <Button onClick={props.handleOnClick}>Ok</Button>
     </Dialog>
    )
  }
 
  export default Alert