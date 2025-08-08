'use client';

import {
  StyledAgentCard,
  StyledAgentImage,
  StyledAgentCardHeader,
  StyledAddress,
  StyledContactMethods,
} from './styled';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getAdvertiserByIdOptions } from '@/services/queries/properties';

export default function AgentCard({
  id
}: Readonly<{ id: string }>) {
  const { data: advertiser } = useSuspenseQuery(getAdvertiserByIdOptions(id));

  return (
    <StyledAgentCard>
      <StyledAgentCardHeader>
        <StyledAgentImage>
          <Image
            src={advertiser.avatar.url}
            alt="Portrait of agent Liza Williams"
            width={80}
            height={80}
          />
        </StyledAgentImage>
        <div>
          <h2>{advertiser?.firstName} {advertiser?.lastName}</h2>
          <p>Listing {advertiser.advertiserType}</p>
        </div>
      </StyledAgentCardHeader>
      <section>
        <StyledAddress>
          <StyledContactMethods>
            <li>
              <Image src="/icons/mail.svg" alt="" width={16} height={16} />{' '}
              <a href={`mailto:${advertiser.email}`}>{advertiser.email}</a>
            </li>
            <li>
              <Image src="/icons/phone.svg" alt="" width={16} height={16} />{' '}
              <a href={`tel:${advertiser.phone}`}>{advertiser.phone}</a>
            </li>
          </StyledContactMethods>
        </StyledAddress>
      </section>
      <Button type="link" label="Book a tour" href={advertiser.bookingLink} />
    </StyledAgentCard>
  );
}
