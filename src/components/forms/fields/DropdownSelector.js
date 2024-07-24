export default function DropdownSelector( {children, handleFieldOne, fieldOneSelection} ) {
  return(
    <div className="flex flex-col -mx-3 mb-6">
      <label 
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="grid-state"
      >
          {children}
      </label>
      <div className="relative">
        <div className="flex flex-row space-x-4">
          <p 
            // Makes bold if fieldOneSelection equals Important in state
            className={`${fieldOneSelection === "Important" ? "font-bold" : ""}`}
            onClick={() => handleFieldOne("Important")}
          >
            Important
          </p>
          <p 
            // Makes bold if fieldOneSelection equals Informational in state
            className={`${fieldOneSelection === "Informational" ? "font-bold" : ""}`}
            onClick={() => handleFieldOne("Informational")}
          >
            Informational
          </p>
        </div>
      </div>
    </div>

  );
};