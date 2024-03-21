type Props = {
  calories: number,
  text: string,
  textcolor: string
}

const CalorieDisplay = ({calories, text, textcolor}: Props) => {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl ${textcolor}`}>{calories}</span>
      {text}
    </p>
  )
}

export default CalorieDisplay