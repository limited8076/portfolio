import { useState } from "react";
import { usePortfolio } from "../PortfolioContext";

const Skill = () => {
  const data = usePortfolio();
  const { Frontend = [], Backend = [], Technologies = [] } = data?.tech || {};

  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = [
    { label: "FrontEnd", key: "Frontend", skills: Frontend },
    { label: "BackEnd", key: "Backend", skills: Backend },
    { label: "Technologies", key: "Technologies", skills: Technologies },
  ];

  const activeSkills = tabs.find((t) => t.key === activeTab)?.skills || [];

  return (
    <div className="text-center my-20" id="skills">
      <h1 className="text-4xl font-bold text-primary">Skills</h1>
      <div
        role="tablist"
        className="tabs tabs-boxed mt-10 w-full sm:w-1/2 mx-auto"
      >
        {tabs.map((tab) => (
          <a
            key={tab.key}
            role="tab"
            className={`tab ${activeTab === tab.key ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center mt-10">
        {activeSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 btn w-28 h-28 justify-center hover:scale-95 transition-transform"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-xs font-medium truncate w-full text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
