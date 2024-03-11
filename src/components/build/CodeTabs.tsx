import classNames from "classnames";
import { useState } from "react";

export function CodeTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-neutral-900">
      {/* Tab Buttons */}
      <div className="flex [&>*]:flex-1">
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6",
            {
              "bg-neutral-500": activeTab !== 0,
            },
          )}
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Protocol
          <span className="text-content font-normal">Solidity</span>
        </button>
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6",
            {
              "bg-neutral-500": activeTab !== 1,
            },
          )}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Hyperdrive Math
          <span className="text-content font-normal">Rust</span>
        </button>
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6",
            {
              "bg-neutral-500": activeTab !== 2,
            },
          )}
          onClick={() => {
            setActiveTab(2);
          }}
        >
          Bots
          <span className="text-content font-normal">Python</span>
        </button>
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6",
            {
              "bg-neutral-500": activeTab !== 3,
            },
          )}
          onClick={() => {
            setActiveTab(3);
          }}
        >
          UI Integration
          <span className="text-content font-normal">TypeScript</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div>
        <CodeTabContent
          title="Protocol"
          description="..."
          code={""}
          language="solidity"
          active={activeTab === 0}
        />
        <CodeTabContent
          title="Hyperdrive Math"
          description="..."
          code={""}
          language="rust"
          active={activeTab === 1}
        />
        <CodeTabContent
          title="Bots"
          description="..."
          code={""}
          language="python"
          active={activeTab === 2}
        />
        <CodeTabContent
          title="UI Integration"
          description="..."
          code={""}
          language="typescript"
          active={activeTab === 3}
        />
      </div>
    </div>
  );
}

interface CodeTabContentProps {
  title: string;
  description: string | React.ReactNode;
  code: string;
  language: string;
  active: boolean;
}

function CodeTabContent({
  title,
  description,
  active = false,
}: CodeTabContentProps) {
  return (
    <div
      className={classNames({
        hidden: !active,
      })}
    >
      {/* Top Section */}
      <div>
        <h3>{title}</h3>
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
      {/* Code (TODO: Code Snippet Library) */}
      <div></div>
    </div>
  );
}
