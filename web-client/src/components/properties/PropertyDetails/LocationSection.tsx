import { StyledH3, StyledMapPlaceholder } from './styled';
import Image from 'next/image';

export default function LocationSection() {
  return (
    <section>
      <StyledH3>Location</StyledH3>
      <StyledMapPlaceholder>
        <Image src="/images/map-ph.png" alt="" fill objectFit="cover" />
        <div className="map-veil">
          <Image src="/icons/map-pin.svg" alt="" height={64} width={64} />
          <p>coming soon...</p>
        </div>
      </StyledMapPlaceholder>
    </section>
  );
}
