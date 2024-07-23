import DropdownSelector from "./fields/DropdownSelector";
import TextInput from "./fields/TextInput";

export default function ImportantNotesForm() {
  return (
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <DropdownSelector
            options={["Yes", "No"]}
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