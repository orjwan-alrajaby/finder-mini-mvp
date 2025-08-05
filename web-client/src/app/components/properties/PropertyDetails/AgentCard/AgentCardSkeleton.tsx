import { SkeletonLine, SkeletonBlock, SkeletonCircle, SimpleFlexContainer } from '@/app/components/layouts/Skeleton/base';
import { StyledAgentCard } from './styled';

export default function SkeletonAgentCard({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <StyledAgentCard aria-label="Loading Agent's information" aria-busy="true">
        <SimpleFlexContainer $alignItems="center" $gap="1.5rem" data-skeleton-name="agent-card-header">
          <SkeletonCircle $isDark={isDark} $dim="80px" data-skeleton-name="agent-avatar" />
          <SimpleFlexContainer $direction="column">
            <SkeletonLine $width="150px" $height="28px" $isDark={isDark} data-skeleton-name="agent-name" />
            <SkeletonLine $width="90px" $height="22px" $isDark={isDark} data-skeleton-name="agent-title" />
          </SimpleFlexContainer>
        </SimpleFlexContainer>
        <SimpleFlexContainer $direction="column" data-skeleton-name="agent-contact-infortmation">
          <SimpleFlexContainer data-skeleton-name="agent-email">
            <SkeletonBlock $width="22px" $height="22px" />
            <SkeletonLine $width="205px" $height="22px" />
          </SimpleFlexContainer>
          <SimpleFlexContainer data-skeleton-name="agent-phone">
            <SkeletonBlock $width="22px" $height="22px" />
            <SkeletonLine $width="130px" $height="22px" />
          </SimpleFlexContainer>
        </SimpleFlexContainer>
        <SkeletonLine $width="352px" $height="48px" $isDark={isDark} data-skeleton-name="book-tour-CTA" />
    </StyledAgentCard>
  );
}