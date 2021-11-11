import { OrderedItem } from "./styled/OrderedList.styled";
import { UnorderedList } from "./styled/UnorderedList.styled";
import Linkify from "react-linkify";

interface Props {
  step: {
    id: number;
    title: string;
    subSteps: string[];
  };
  activeStep: number;
  setActiveStep: React.Dispatch<number>;
}

const Step: React.FC<Props> = ({ step, activeStep, setActiveStep }) => {
  const { id, title, subSteps } = step;
  const isActive = id === activeStep;

  return (
    <Linkify>
      <OrderedItem
        onClick={() => (!isActive ? setActiveStep(id) : setActiveStep(0))}
      >
        <h2>{title}</h2>
        {isActive && (
          <UnorderedList>
            {subSteps.map((subStep, index) => (
              <li key={index}>{subStep}</li>
            ))}
          </UnorderedList>
        )}
      </OrderedItem>
    </Linkify>
  );
};

export default Step;
