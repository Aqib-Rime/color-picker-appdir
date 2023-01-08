import {FC} from 'react';
import {getRandomColors} from "../utils/randomWork";
import Button from "../components/Button";

interface HomeProps {
}

const Page: FC<HomeProps> = ({}) => {
  const cnt = 4
  const colors = getRandomColors(cnt)
  const currentlySelected = Math.floor(Math.random() * cnt)
  console.log(colors, currentlySelected)

  return (
    <div className='mx-10'>
      <p>{colors[currentlySelected]}</p>
      <div className='p-20 mb-10 rounded-lg' style={{backgroundColor: colors[currentlySelected]}}></div>
      <div className='grid grid-cols-2 gap-8'>
        {colors.map((color, idx) => {
          return <Button key={idx} color={colors[idx]} currentIdx={idx} selectedIdx={currentlySelected} />
        })}
      </div>
    </div>
  );
};
export default Page
