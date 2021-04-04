import { Dialog } from '../../components';
import React from 'react';
import { AppContext } from '../../Providers';
import { handleCloseDialog } from '../../actions';
import { Textarea, Button, Input } from "@chakra-ui/react";
import { SchemaValidators } from '../../types';

const { useContext, useEffect, useState } = React;

type Value = {
  value?: number,
  message?: string,
}

export const AddValidatorMethod = () => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(state.open);
  const [value, setValue] = useState<Value>({});
  const [showInput] = useState<SchemaValidators[]>(['max', 'min']);

  useEffect(() => {
    setOpen(state.open);
  }, [state]);

  const handleClose = () => {
    dispatch(handleCloseDialog());
  };

  const handleInputChange = (e: any) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

  }

  return (
    <Dialog
      isOpen={open}
      onClose={handleClose}
      footer={
        <Button bg="brand.primary" size="md" type='submit' form="my-form">
          Save
        </Button>
      }
      title='Add Validation'
    >
      <form id="my-form">
        {showInput.map((method: SchemaValidators) => {
          if (method === state.validatorMethod) {
            return (
              <Input
                variant="outline"
                placeholder={`Enter ${state.validatorMethod} value`}
                type='number'
                value={value.value}
                onChange={handleInputChange}
                required
                my='4'
              />
            )
          }
        })}
        <Textarea
          value={value.message}
          onChange={handleInputChange}
          placeholder="Enter Validator Method Message"
          size="sm"
          required
        />
      </form>
    </Dialog>
  );
};

export default AddValidatorMethod;