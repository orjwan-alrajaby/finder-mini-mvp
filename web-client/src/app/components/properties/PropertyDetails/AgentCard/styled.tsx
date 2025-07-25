import styled from "styled-components"

export const StyledAgentCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${({theme}) => theme.palette.surface};
  border-radius: 8px;
  height: fit-content;
  width: 100%;
  max-width: 416px;
`

export const StyledAgentImage = styled.figure`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  overflow: hidden;
  border-radius: 100%;
`

export const StyledAgentCardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const StyledAddress = styled.address`
  font-style: normal;
`

export const StyledContactMethods = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  > li:first-child {
   margin-bottom: 0.5rem;
  }
`