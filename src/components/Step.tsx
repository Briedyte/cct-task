import { useRef } from "react";
import { OrderedItem } from "./styled/OrderedList.styled";
import { UnorderedList } from "./styled/UnorderedList.styled";

interface StepProps {
  step: {
    id: number;
    title: string;
    subSteps: string[];
  };
  activeStep: number | null;
  onStepClick: () => void;
}

const Step = ({ step, activeStep, onStepClick }: StepProps) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const ulHeight = ulRef.current ? ulRef.current.scrollHeight : 0;

  const isActive = step.id === activeStep;

  return (
    <OrderedItem onClick={onStepClick} statusLineWidth={!isActive ? 200 : 260}>
      <h2>{step.title}</h2>

      <UnorderedList
        ref={ulRef}
        height={isActive ? ulHeight : 0}
        opacity={isActive ? 1 : 0}
      >
        {step.subSteps.map((subStep, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: `${subStep}` }} />
        ))}
      </UnorderedList>
    </OrderedItem>
  );
};

export default Step;
