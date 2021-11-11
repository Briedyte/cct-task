import { useState } from "react";
import { OrderedList } from "./styled/OrderedList.styled";
import Step from "./Step";

const StepsList: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Build test task",
      subSteps: [
        "Create repository",
        "Implement designs",
        "Implement functionality",
      ],
    },
    {
      id: 2,
      title: "Submit your test task",
      subSteps: [
        "Open email client",
        "Sent link with information to careers@cornercasetech.com",
      ],
    },
    {
      id: 3,
      title: "Participate in tech interview",
      subSteps: ["Talk with HR", "Talk with Tech team"],
    },
    {
      id: 4,
      title: "Receive answer",
      subSteps: ["Receive answers", "Start your IT career"],
    },
  ];

  return (
    <OrderedList>
      {steps.map((step) => (
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
