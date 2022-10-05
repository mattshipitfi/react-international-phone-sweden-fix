import './CountrySelector.style.scss';

import React, { useState } from 'react';

import { FlagEmoji } from '../FlagEmoji/FlagEmoji';
import {
  CountrySelectorDropdown,
  CountrySelectorDropdownProps,
} from './CountrySelectorDropdown';

interface CountrySelectorProps {
  selectedCountryIso2?: string;
  onSelect?: CountrySelectorDropdownProps['onSelect'];
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountryIso2,
  onSelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDropdown(true)}
        className={['country-selector-button'].join(' ')}
      >
        <FlagEmoji
          iso2={selectedCountryIso2 || ''}
          className="country-selector-button__flag-emoji"
        />
      </button>

      <CountrySelectorDropdown
        show={showDropdown}
        onSelect={(country) => {
          setShowDropdown(false);
          onSelect?.(country);
        }}
        selectedCountryIso2={selectedCountryIso2}
        onClickOutside={() => {
          setShowDropdown(false);
        }}
      />
    </>
  );
};
