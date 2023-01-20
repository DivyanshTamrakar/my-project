import React, { useState } from "react";
import TechTabButton from "./TechTabButton";

type Props = {
  activeTab: string;
  handleTabClick: (tab: string) => void;
  categories: string[];
};

const TechTabs = ({ activeTab, handleTabClick, categories }: Props) => {
  const [tabs, setTabs] = useState<string[]>(categories);

  return (
    <div className="mt-20 mb-10">
      {/* buttons */}
      {tabs.map((tab, index) => (
        <TechTabButton
          text={tab}
          key={index}
          isActive={tab == activeTab}
          handleTabClick={handleTabClick}
        />
      ))}
    </div>
  );
};

export default TechTabs;
