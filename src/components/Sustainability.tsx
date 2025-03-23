
import SustainabilityContent from './sustainability/SustainabilityContent';

export interface SustainabilityProps {
  fullPage?: boolean;
}

const Sustainability = ({ fullPage }: SustainabilityProps) => {
  return (
    <SustainabilityContent fullPage={fullPage} />
  );
};

export default Sustainability;
