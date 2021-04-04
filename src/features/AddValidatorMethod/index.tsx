import { Dialog } from '../../components';
import React from 'react';
import { AppContext } from '../../Providers';
import { handleCloseDialog } from '../../actions';

const { useContext, useEffect, useState } = React;

export const AddValidatorMethod = () => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(state.open)
  useEffect(() => {
    setOpen(state.open);
  }, [state]);

  const handleClose = () => {
    dispatch(handleCloseDialog());
  }
  return (
    <Dialog
      isOpen={open}
      onClose={handleClose}
      footer={
        <>Button</>
      }
      title='Add Validation'
    >
      Dialog content
    </Dialog>
  );
};

export default AddValidatorMethod;