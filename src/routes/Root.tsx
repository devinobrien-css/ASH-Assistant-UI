import { Outlet } from 'react-router-dom';
import { Navigation } from '../shared/components/Navigation/Navigation';
import { OmniSearch } from '../shared/components/OmniSearch/OmniSearch';

export const Root = () => {
  return (
    <div className="flex h-screen flex-col">
      <OmniSearch />
      <div className="relative flex h-full bg-grey-700">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};
