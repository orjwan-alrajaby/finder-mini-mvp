'use client';

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  ToggleButton,
  Backdrop,
  Drawer,
  DrawerContent,
  DrawerHeader,
  CloseButton,
  Divider,
  Nav,
  NavList,
  NavItem,
  NavLink,
} from './styled';
import Image from 'next/image';
import { useOverlayTriggerState } from '@react-stately/overlays';
import {
  useModalOverlay,
  useDialog,
  DismissButton,
  FocusScope,
} from 'react-aria';
import LogoLink from '@/components/ui/LogoLink';

export default function BurgerMenu({
  navItems,
}: Readonly<{
  navItems: { label: string; href?: string }[];
}>) {
  const pathname = usePathname();
  const state = useOverlayTriggerState({}); // manages open/close
  const ref = useRef<HTMLDivElement>(null);

  const { modalProps, underlayProps } = useModalOverlay(
    {
      isDismissable: true,
    },
    state,
    ref
  );

  const { dialogProps } = useDialog({}, ref);

  return (
    <div id="burger-menu-with-overlay">
      <ToggleButton
        onClick={() => (state.isOpen ? state.close() : state.open())}
        aria-label={state.isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={state.isOpen}
        aria-controls="burger-menu"
        id="burger-menu-trigger"
      >
        <Image
          src="/icons/burger-menu.svg"
          alt="mobile menu"
          width={22}
          height={22}
        />
      </ToggleButton>

      <Backdrop
        id="burger-menu-backdrop"
        $isOpen={state.isOpen}
        {...underlayProps}
      >
        <FocusScope contain restoreFocus autoFocus>
          <Drawer
            $isOpen={state.isOpen}
            id="burger-menu"
            {...modalProps}
            {...dialogProps}
            ref={ref}
            onClick={(e) => e.stopPropagation()}
          >
            <DismissButton onDismiss={state.close} />

            <DrawerContent>
              <DrawerHeader>
                <LogoLink />
                <CloseButton onClick={state.close} aria-label="Close menu">
                  <Image
                    src="/icons/close.svg"
                    alt="close icon"
                    width={24}
                    height={24}
                  />
                </CloseButton>
              </DrawerHeader>

              <Divider />

              <Nav aria-label="Burger menu navigation">
                <NavList>
                  {navItems.map((item) => {
                    const active = item.href
                      ? pathname.includes(item.href)
                      : false;
                    return (
                      <NavItem key={item.label} $active={active}>
                        <NavLink href={item.href ?? ''} $active={active}>
                          {item.label}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </NavList>
              </Nav>
            </DrawerContent>

            <DismissButton onDismiss={state.close} />
          </Drawer>
        </FocusScope>
      </Backdrop>
    </div>
  );
}
