"use client";

import { StyledAgentCard, StyledAgentImage, StyledAgentCardHeader, StyledAddress, StyledContactMethods } from "./styled";
import Image from "next/image"
import Button from "@/components/ui/Button";

export default function AgentCard () {
    return (
            <StyledAgentCard>
      <StyledAgentCardHeader>        
        <StyledAgentImage>
          <Image src="/images/ph-4.jpg" alt="Portrait of agent Liza Williams" width={80} height={80} />
        </StyledAgentImage>
        <div>
          <h2>Liza Williams</h2>
          <p>Listing agent</p>
        </div>
      </StyledAgentCardHeader>
      <section>
        <StyledAddress>
          <StyledContactMethods>
            <li><Image src="/icons/mail.svg" alt="" width={16} height={16} /> <a href="mailto:contact@example.com">contact@example.com</a></li>
            <li><Image src="/icons/phone.svg" alt="" width={16} height={16} /> <a href="tel:+1 50 537 53 082">+1 50 537 53 082</a></li>
          </StyledContactMethods>
        </StyledAddress>
      </section>
      <Button type="button" label="Book a tour" />
    </StyledAgentCard>
    )
}