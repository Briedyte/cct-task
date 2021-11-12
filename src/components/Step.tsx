import Linkify from "react-linkify";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { OrderedItem } from "./styled/OrderedList.styled";
import { UnorderedList } from "./styled/UnorderedList.styled";

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

  const ulRef = useRef<HTMLUListElement>(null);
  const ulHeight = ulRef.current ? ulRef.current.scrollHeight : 0;
  const AnimatedUl = animated(UnorderedList);

  const expand = useSpring({
    to: { height: isActive ? ulHeight : 0, opacity: isActive ? 1 : 0 },
    config: { tension: 120, friction: 30 },
  });

  return (
    <Linkify>
      <OrderedItem
        onClick={() => (!isActive ? setActiveStep(id) : setActiveStep(0))}
        statusLineWidth={!isActive ? 200 : 300}
      >
        <h2>{title}</h2>

        <AnimatedUl ref={ulRef} style={expand}>
          {subSteps.map((subStep, index) => (
            <li key={index}>{subStep}</li>
          ))}
        </AnimatedUl>
      </OrderedItem>
    </Linkify>
  );
};

export default Step;
