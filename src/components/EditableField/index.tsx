import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export const EditableField = () => {
  return (
    <Editable defaultValue="Take some chakra">
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export default EditableField;