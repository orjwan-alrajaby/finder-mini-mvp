import {
  StyledGenInfoSection,
  StyledGenInfoH3,
  StyledTable,
  StyledTH,
} from './styled';

const generalInfo = [
  { label: 'Property Type', value: 'Apartment' },
  { label: 'Year Built', value: '2023' },
  { label: 'Living Area', value: '42 sq.m' },
  { label: 'Floor', value: '3' },
  { label: 'Total Rooms', value: '2' },
  { label: 'Bedrooms', value: '1' },
  { label: 'Bathrooms', value: '1' },
];

export default function GeneralInfoSection() {
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
