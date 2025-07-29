"use client"; // TODO: explore making this a server component. 
// The styles for this page using the theme object is what's breaking the code if I remove the "use client" flag;

import { StyledMainContainer, StyledSection, StyledArticle, StyledMainInfoSection, StyledPrice, StyledAddress, StyledSubSection, StyledH3 } from "./styled";
import AgentCard from "./AgentCard";
import GeneralInfoSection from "./GeneralInfoSection";
import AmenitiesSection from "./AmenitiesSection";
import LocationSection from "./LocationSection";
import TagList from "../../ui/TagList";
import SpecsInfo from "../../ui/SpecsInfo";
import Gallery from "./Gallery";

export default function PropertyDetails() {
    return <StyledMainContainer>
        <Gallery />
         <StyledSection>
            <StyledArticle>
                <StyledMainInfoSection>
                    <TagList />
                    <StyledPrice className="price">$1.350</StyledPrice>
                    <StyledAddress>67-04 Myrtle Ave Glendale, NY 11385</StyledAddress>
                    <SpecsInfo bedrooms={5} bathrooms={2} garages={1} sqm={90} />
                </StyledMainInfoSection>
                <section>
                    <StyledH3>About</StyledH3>
                    <p>It offers a comfortable living area leading to a formal dining room, gorgeous hardwood floors throughout, spacious renovated Island kitchen with granite countertops and stainless steel appliances.
        Additionally, revel in the convenience of a master bedroom featuring a built-in dressing room, complemented by a private bath and shower for added comfort.
        This inviting apartment is conveniently located close to transportation hubs, ensuring easy access to the city's heartbeat. </p>
                </section>
                <StyledSubSection>
                    <GeneralInfoSection />
                    <AmenitiesSection />
                </StyledSubSection>
                <LocationSection />
            </StyledArticle>
            <section className="agent-section">
                <StyledH3>Reach out to the advertiser</StyledH3>
                <AgentCard />
            </section>
        </StyledSection>
    </StyledMainContainer>
}