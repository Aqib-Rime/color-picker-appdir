'use client'
import {FC} from 'react';
import {useRouter} from "next/navigation";

interface ButtonProps {
  color: string,
  currentIdx: number,
  selectedIdx: number
}

const Button: FC<ButtonProps> = ({color, currentIdx, selectedIdx}) => {
  const router = useRouter()
  console.log(color)
  const handleClick = () => {
    if (currentIdx === selectedIdx) {
      router.push("/")
    } else {
      alert('Wrong selection')
    }
  }
  return (
    <div onClick={handleClick} className='p-2 rounded-lg hover:bg-green-500 text-center bg-green-300'>{color}</div>
  )
};
export default Button
