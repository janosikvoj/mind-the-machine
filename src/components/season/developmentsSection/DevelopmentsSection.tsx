import React, { useContext } from 'react';
import { seasonContext } from '../seasonContext';

const DevelopmentsSection = () => {
  const { keyDevelopmentsSection } = useContext(seasonContext);

  if (keyDevelopmentsSection)
    return (
      <section className="border-b border-gray-7 bg-blue-2">
        <hgroup className="px-6 pt-32 pb-20 text-center break-words">
          <h2 className="text-5xl font-display leading-8 text-blue-11">
            Key developments
          </h2>
          <p className="mt-1.5 text-sm text-gray-11 uppercase">
            —Key-Developments—
          </p>
        </hgroup>

        <div className="grid grid-cols-7 border-t border-gray-7">
          <ul className="col-start-2 col-span-5 grid grid-cols-2 gap-px bg-gray-7 items-stretch border-x border-gray-7">
            {keyDevelopmentsSection.map((keyDevelopment) => {
              const { title, year, category, description } = keyDevelopment;
              return (
                <li
                  key={title}
                  className="lg:aspect-square p-6 flex flex-col gap-8 justify-between bg-blue-2"
                >
                  <hgroup>
                    {category && (
                      <p className="mb-3 bg-gray-3 text-blue-11 px-1.5 pl-3 w-fit border-l-2 border-blue-9 text-sm uppercase tracking-wide font-medium">
                        {category}
                      </p>
                    )}
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    {year && <p className="text-lg">{year}</p>}
                  </hgroup>
                  <p className="text-gray-11">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
};

export default DevelopmentsSection;
