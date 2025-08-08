import { HomeType } from '@/types/properties';
import {
  StyledGenInfoSection,
  StyledGenInfoH3,
  StyledTable,
  StyledTH,
} from './styled';

export default function GeneralInfoSection({
  propertyType,
  yearBuilt,
  livingArea,
  floor,
  bedrooms,
  bathrooms,
  garages,
}: Readonly<{
  propertyType: HomeType;
  yearBuilt: number;
  livingArea: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
}>) {
  const generalInfo = [
    { label: 'Property Type', value: propertyType },
    { label: 'Year Built', value: yearBuilt },
    { label: 'Living Area', value: `${livingArea} sqm` },
    { label: 'Floor', value: floor },
    { label: 'Bedrooms', value: bedrooms },
    { label: 'Bathrooms', value: bathrooms },
    { label: 'Garages', value: garages },
    { label: 'Total Rooms', value: bedrooms + bathrooms + garages },
  ];
  return (
    <StyledGenInfoSection>
      <StyledGenInfoH3>General Information</StyledGenInfoH3>
      <StyledTable>
        <tbody>
          {generalInfo.map((item) => (
            <tr key={item.label}>
              <StyledTH scope="row">{item.label}</StyledTH>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledGenInfoSection>
  );
}
