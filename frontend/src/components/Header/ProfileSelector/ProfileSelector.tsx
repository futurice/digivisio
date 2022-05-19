import React, { useState } from 'react';

import profiles from '../../../data/profiles';
import { Profile } from '../../../types/Profile';
import styles from './ProfileSelector.module.css';

export type ProfileProps = {
  readonly selectedProfile: Profile;
  readonly setSelectedProfile: (profile: Profile) => void;
};

const ProfileButton = ({ children, onClick }: { readonly children: React.ReactNode; readonly onClick: () => void }) => {
  return (
    <button className={styles.profileButton} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

const ProfileSelector = ({ selectedProfile, setSelectedProfile }: ProfileProps) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Profiilin valitsin"
        className={styles.profile}
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
      >
        {selectedProfile.name}
      </button>
      {isSelectorOpen && (
        <div className={styles.profileList}>
          {profiles.map((profile) => (
            <ProfileButton
              key={profile.name}
              onClick={() => {
                setIsSelectorOpen(false);
                setSelectedProfile(profile);
              }}
            >
              {profile.name}
            </ProfileButton>
          ))}
        </div>
      )}
    </>
  );
};

export default ProfileSelector;
