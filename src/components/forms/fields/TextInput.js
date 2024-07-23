export default function TextInput( {children} ) {
  return(
    <div class="flex flex-col -mx-3 mb-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        {children}
      </label>
      <input 
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="grid-city" 
        type="text" 
        placeholder="Text here">
      </input>
    </div>
  );
};