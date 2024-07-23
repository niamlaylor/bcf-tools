import DropdownSelector from "./DropdownSelector";

export default function ImportantNotesForm() {
  return (
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex flex-col -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Type of message
          </label>
          <DropdownSelector />
        </div>
      </form>
    </div>
  );
};