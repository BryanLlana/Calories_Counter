import { categories } from '../data/index';
import { Dispatch, useMemo, useState } from 'react';
import { ActivityForm } from '../types';
import { ActivityAction } from '../reducers/activity.reducer';
import { v4 as uuid } from 'uuid'

type Props = {
  dispatch: Dispatch<ActivityAction>
}

const initialState: ActivityForm = {
  name: '',
  category: 0,
  calories: 0
}

const Form = ({ dispatch }: Props) => {
  const [form, setForm] = useState<ActivityForm>(initialState) 

  const isValidate = useMemo(() => form.name.trim() !== '' && form.calories > 0 && form.category !== 0, [form])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const isConverInteger = ['category', 'calories'].includes(e.target.id)
    setForm({
      ...form,
      [e.target.id]: isConverInteger ? Number(e.target.value) : e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'save-activity', payload: {newActivity: { id: uuid(), ...form } }})
    setForm(initialState)
  } 

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <label htmlFor="category" className='font-bold'>Categoría:</label>
        <select
          id="category" 
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          defaultValue={form.category}
          onChange={handleChange}
        >
          <option value={form.category} selected={form.category === 0} disabled>--Seleccione--</option>
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
        <label htmlFor="name" className='font-bold'>Actividad:</label>
        <input
          type="text"
          id='name'
          className='border border-slate-300 p-2 rounded-lg' 
          placeholder='Ejm: Comida, Jugo, Ejercicio, Pesas'
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <label htmlFor="calories" className='font-bold'>Calorías:</label>
        <input
          type="number"
          id='calories'
          className='border border-slate-300 p-2 rounded-lg'
          placeholder='Ejm: 300'
          value={form.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white cursor-pointer disabled:opacity-50 rounded-md'
        value='Guardar'
        disabled={!isValidate}
      />
    </form>
  )
}

export default Form