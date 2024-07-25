import Step from "./Step";
import { StepsProps } from "./StepType";

export const Steps = ({ steps }: StepsProps) => {
  return (
    <>{steps && steps.map((obj) => <Step key={obj.order} etape={obj} />)}</>
  );
};

export default Steps;
