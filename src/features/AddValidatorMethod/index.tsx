import { Dialog } from "../../components";
import React from "react";
import { AppContext } from "../../Providers";
import { handleCloseDialog, saveValidation } from "../../actions";
import { Textarea, Button, Input } from "@chakra-ui/react";
import { SchemaValidators } from "../../types";

const { useContext, useEffect, useState } = React;

type Value = {
  value?: number;
  message?: string;
};

export const AddValidatorMethod = () => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(state.open);
  const [value, setValue] = useState<Value>({});
  const [showInput] = useState<SchemaValidators[]>(["max", "min"]);

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
    dispatch(
      saveValidation({
        method: state.validatorMethod as SchemaValidators,
        ...value,
      })
    );
    setValue({});
  };

  return (
    <Dialog
      isOpen={open}
      onClose={handleClose}
      footer={
        <Button bg="brand.primary" size="md" type="submit" form="my-form">
          Save
        </Button>
      }
      title="Add Validation"
    >
      <form id="my-form" onSubmit={handleSubmit}>
        {showInput.map((method: SchemaValidators) => {
          if (method === state.validatorMethod) {
            return (
              <Input
                key={method}
                variant="outline"
                placeholder={`Enter ${state.validatorMethod} value`}
                type="number"
                value={value.value}
                onChange={handleInputChange}
                required
                my="4"
                name="value"
              />
            );
          }
        })}
        <Textarea
          value={value.message}
          onChange={handleInputChange}
          placeholder="Enter Validator Method Message"
          size="sm"
          name="message"
        />
      </form>
    </Dialog>
  );
};

export default AddValidatorMethod;
