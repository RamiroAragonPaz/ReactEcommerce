import * as React from 'react';
import Dialog from '@mui/material/Dialog';

const ModalCustom = ({handleClose, open , children}) => {
   
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        {children}
      </Dialog>
    </div>
  )
}

export default ModalCustom