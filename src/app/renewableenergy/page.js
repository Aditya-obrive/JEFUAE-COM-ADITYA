import RenewableEnergyResource from '../industries/renewableenergy/recontent';

export const metadata = {
  title: 'Renewable Energy Grid Studies | JEF UAE',
  description: 'Grid integration and power system studies for renewable energy projects.',
  alternates: { canonical: 'https://www.jefuae.com/renewableenergy' },
};

export default function RenewableEnergyPage() {
  return <RenewableEnergyResource />;
}
