import DropdownSelector from "./fields/DropdownSelector";
import TextInput from "./fields/TextInput";

export default function ImportantNotesForm( {handleFieldOne, fieldOneSelection} ) {

  const dropdownOptions = {
    importantOrInformational: ["Yes", "No"],
  }

  return (
    <div className="w-full max-w-md">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <DropdownSelector
            options={dropdownOptions.importantOrInformational}
            handleFieldOne={handleFieldOne}
            fieldOneSelection={fieldOneSelection}
          >
            Important of Informational?
          </DropdownSelector>
          <TextInput>
            Top header
          </TextInput>
      </form>
    </div>
  );
};