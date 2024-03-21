import { categories } from '../data/index';
const Form = () => {
  return (
    <form className="space-y-5 bg-white p-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <label htmlFor="category" className='font-bold'>Categoría:</label>
        <select
          id="category" 
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          <option value="" disabled selected>--Seleccione--</option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <label htmlFor="activity" className='font-bold'>Actividad:</label>
        <input
          type="text"
          id='activity'
          className='border border-slate-300 p-2 rounded-lg' 
          placeholder='Ejm: Comida, Jugo, Ejercicio, Pesas'
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <label htmlFor="calories" className='font-bold'>Calorías:</label>
        <input
          type="number"
          id='calories'
          className='border border-slate-300 p-2 rounded-lg'
          placeholder='Ejm: 300'
        />
      </div>

      <input
        type="submit"
        className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white cursor-pointer disabled:opacity-50 rounded-md'
        value='Guardar'
        disabled={true}
      />
    </form>
  )
}

export default Form