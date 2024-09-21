import {FC, memo, useMemo, useState} from 'react';

import {SectionId} from '../data/data';

const Header: FC = memo(() => {
    const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
    const navSections = useMemo(
      () => [SectionId.About, SectionId.Contact, SectionId.Gallery, SectionId.Hero, SectionId.Services],
      [],
    );  
  
    return (
      <>
        HEADER
      </>
    );
  });

Header.displayName = 'Header';
export default Header;