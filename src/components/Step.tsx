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
    <li>
      <h2>{title}</h2>
      <ul>
        {subSteps.map((subStep) => (
          <li>{subStep}</li>
        ))}
      </ul>
    </li>
  );
}

export default Step;
