import styled from "styled-components";
import { Button, ListBox, ListBoxItem, Label as AriaLabel } from 'react-aria-components';

export const StyledContainer = styled.div`
    position: relative;
`

export const StyledLabel = styled(AriaLabel)`
  color: ${({theme}) => theme.palette.primary};
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  width: 100%;
  margin-bottom: 1rem;
  display: block;
`

export const StyledSelectTrigger = styled(Button)`
    height: 2.5rem;
    padding: 0.75rem 1rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.palette.inputColor};
    border-radius: 0.5rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.fonts.inter.medium};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-weight: 500;
    cursor: pointer;

    .select-value-container {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        padding-left: 8px;
    }

`

export const StyledPlaceholderValue = styled.span`
    color: ${({ theme }) => theme.palette.inputColor};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-family: ${({ theme }) => theme.fonts.inter.medium};
    font-weight: 500;
`

export const StyledUnderlay = styled.div`
    position: absolute;
    top: 40px;
    left: 0px;  
    width: 100%;
    background-color: ${({ theme }) => theme.palette.text};
    z-index: 50;
`

export const StyledPopover = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.palette.text};
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.inputColor};
    top: 48px !important;
    left: 0px !important;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
`

export const StyledListBox = styled(ListBox)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const StyledListBoxItem = styled(ListBoxItem)<{$isSelected: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 0;
    color:  ${({theme, $isSelected}) => $isSelected ?  theme.palette.primary : theme.palette.inputColor};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-family: ${({ theme }) => theme.fonts.inter.medium};
    font-weight: 500;
    cursor: pointer;
`

export const StyledChipList = styled.span`
    display: flex;
    gap: 0.25rem;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
`

export const StyledChip = styled.span`
    color: ${({ theme }) => theme.palette.text};
    background-color: ${({ theme }) => theme.palette.primary};
    padding: 4px;
    padding: 4px 8px;
    font-size: ${({ theme }) => theme.fonts.sizes.extraSmall};
    border-radius: 4px;
    width: fit-content;
    white-space: nowrap;
    text-align: left;

`