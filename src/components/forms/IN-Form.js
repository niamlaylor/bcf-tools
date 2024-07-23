import DropdownSelector from "./fields/DropdownSelector";
import TextInput from "./fields/TextInput";

export default function ImportantNotesForm( {handleImportant, handleInformational} ) {
  return (
    <div className="w-full max-w-md">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <DropdownSelector
            options={["Yes", "No"]}
            handleImportant={handleImportant}
            handleInformational={handleInformational}
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