import React, { useState, useEffect, use } from "react";

import TechCard from "./TechCard";

type Props = {
  activeTab: string;
  data: any;
};

const TechCards = ({ activeTab, data }: Props) => {
  const [tech, setTech] = useState<{ name: string; icon: string }[]>(
    data.mobile
  );

  useEffect(() => {
    switch (activeTab) {
      case "Top":
        setTech(data.top);
        break;
      case "Web":
        setTech(data.web);
        break;
      case "Mobile":
        setTech(data.mobile);
        break;
      case "Design":
        setTech(data.design);
        break;
      case "Testing":
        setTech(data.testing);
        break;
      case "Backend":
        setTech(data.backend);
        break;
      default:
        setTech(data.top);
    }
  }, [activeTab]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tech.map((tech, index) => (
        <TechCard tech={tech} key={index} />
      ))}
    </div>
  );
};

export default TechCards;
