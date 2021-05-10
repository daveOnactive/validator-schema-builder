import { Input } from "@chakra-ui/react";
import { AppContext } from "../../Providers";
import React from "react";
import { addSchemaValue } from "../../actions";

const { useContext } = React;

export const SchemaValueName = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addSchemaValue(e.target.value));
  };

  return (
    <Input
      variant="filled"
      size="lg"
      placeholder="Name"
      focusBorderColor="brand.primary"
      onChange={handleChange}
    />
  );
};
