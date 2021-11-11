import {OrderedItem} from "./styled/OrderedList.styled"
import {UnorderedList} from "./styled/UnorderedList.styled"

interface Props {
  step: {
    id: number;
    title: string;
    subSteps: string[];
  };
}

const Step: React.FC<Props> = ({ step }) => {
  const { title, subSteps } = step;
  return (
    <OrderedItem>
      <h2>{title}</h2>
      <UnorderedList>
        {subSteps.map((subStep, index) => (
          <li key={index}>{subStep}</li>
        ))}
      </UnorderedList>
    </OrderedItem>
  );
}

export default Step;
