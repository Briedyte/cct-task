import Step from "./Step";

const StepsList: React.FC = () => {
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
    <ol>
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </ol>
  );
};

export default StepsList;