import React from 'react';
import AvatarCard from './SponsorCard';
import { theme } from '../../theme';
import UnderlineHeader from '../general/UnderlineHeader';

function SliderSponsor({ users, hideImage = false }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container text-center">
        {Object.keys(users).map((role, idx) => {
          const members = users[role];
          const justifyContent =
            members.length === 1
              ? 'justify-center'
              : members.length === 2
              ? 'justify-center'
              : 'justify-center';

          return (
            <div className="mb-8" key={role}>
              <UnderlineHeader>{role}</UnderlineHeader>
              <div
                className={`flex ${justifyContent} gap-4 flex-wrap`}
              >
                {members.map((user) => (
                  <div key={user.name} className="max-w-xs">
                    <AvatarCard
                      img={user.img}
                      name={user.name}
                      role={role}
                      detail={`${user.institution}, ${user.country}`}
                      hideImage={hideImage}
                      className="p-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SliderSponsor;
