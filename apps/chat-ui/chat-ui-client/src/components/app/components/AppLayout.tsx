// Libraries
import { Children, type ReactNode } from 'react';

// Styles
import './AppLayout.css';

enum SlotName {
  SIDE_NAV = 'SIDE_NAV',
  MAIN = 'MAIN'
};

interface SlotProps {
  name: SlotName;
  children: JSX.Element;
}

const Slot = (props: SlotProps): null => null;

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const childElements = Children.toArray(children) as JSX.Element[];

  const sideNavSlot = childElements?.find?.((childEl: JSX.Element): boolean => childEl.props?.name === SlotName.SIDE_NAV);
  const mainSlot = childElements?.find?.((childEl: JSX.Element): boolean => childEl.props?.name === SlotName.MAIN);

  return (
    <div className="app-container">
      <div className="app-sidenav">
        {sideNavSlot?.props?.children ?? null}
      </div>
      <div className="app-main">
        {mainSlot?.props?.children ?? null}
      </div>
    </div>
  )
}

AppLayout.Slot = Slot;

export { AppLayout, SlotName }
