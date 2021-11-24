import { useState } from "react";
import { OrderedList } from "./styled/OrderedList.styled";
import { stepsData } from "../data/Steps.data";
import Step from "./Step";

const StepsList: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null> (null);

  return (
    <OrderedList>
      {stepsData.map((step) => (
        <Step
          key={step.id}
          step={step}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ))}
    </OrderedList>
  );
};

export default StepsList;
