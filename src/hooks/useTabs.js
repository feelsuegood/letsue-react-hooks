import { useState } from "react";

//fake data, assume this data comes from API
const contents = [
  {
    tab: "Section 1",
    content: "Content of the section 1",
  },
  {
    tab: "Section 2",
    content: "Content of the section 2",
  },
];

export const useTabs = (initailTab, allTabs) => {
  if (!allTabs | !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initailTab);
  return {
    currentTab: allTabs[currentIndex],
    changeTab: setCurrentIndex,
  };
};

export default function App() {
  const { currentTab, changeTab } = useTabs(0, contents);
  return (
    <div>
      {contents.map((content, index) => (
        <button key={index} onClick={() => changeTab(index)}>
          {content.tab}
        </button>
      ))}
      <div>{currentTab.content}</div>
    </div>
  );
}
