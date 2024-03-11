import classNames from "classnames";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-neutral-900 max-w-5xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex [&>*]:flex-1">
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6 bg-neutral-500 hover:bg-neutral-600 transition-all",
            {
              "!bg-neutral-950": activeTab === 0,
            },
          )}
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Protocol
          <span className="text-content font-normal">Solidity</span>
        </button>
        {/* <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6 bg-neutral-500 hover:bg-neutral-600 transition-all",
            {
              "!bg-neutral-950": activeTab === 1,
            },
          )}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Hyperdrive Math
          <span className="text-content font-normal">Rust</span>
        </button> */}
        <button
          className={classNames(
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6 bg-neutral-500 hover:bg-neutral-600 transition-all",
            {
              "!bg-neutral-950": activeTab === 2,
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
            "text-neutral-100 font-semibold flex flex-col gap-1 py-4 px-6 bg-neutral-500 hover:bg-neutral-600 transition-all",
            {
              "!bg-neutral-950": activeTab === 3,
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
      <div className="bg-neutral-950">
        {/* Protocol */}
        <div
          className={classNames({
            hidden: activeTab !== 0,
          })}
        >
          <div className="px-14 py-8 max-w-4xl">
            <h3 className="font-chakra text-body-lg text-neutral-100 font-medium mb-4">
              Utilizing Hyperdrive as a DeFi Primitive
            </h3>
            <p>
              The Hyperdrive AMM is a new DeFi primitive that allows fixed-rate
              markets to be created on top of variable rate yield sources.
              Developers can take advantage of Hyperdrive's long and short
              positions to provide users with fixed rate or variable rate
              exposure. These positions can be included as part of a user's
              portfolio to provide them with predictable yield, to give them
              exposure to directional changes in the variable-rate, or to hedge
              existing borrow positions. For example, Hyperdrive Shorts can be
              used to hedge the interest owed on variable rate borrow positions
              to help shield their borrow position from effects of interest rate
              increases.
            </p>
          </div>
          <SyntaxHighlighter
            showLineNumbers={true}
            language="solidity"
            style={dracula}
            lineNumberStyle={{
              width: "72px",
              borderRight: "1px solid rgba(0,0,0,.2)",
              marginRight: "24px",
            }}
            customStyle={{
              padding: "32px 56px 32px 0",
              borderRadius: "0",
            }}
          >
            {`contract Integrator {
    IHyperdrive hyperdrive = address(FIXME - add real mainnet address);

    function usesLong(...) external returns (...) {
		    // Do something...

        // Approve Hyperdrive with the amount of base to spend.
        uint256 baseAmount = 10e18;
				hyperdrive.baseToken().approve(
				    address(hyperdrive),
            baseAmount
        );

				// Open the long position.
				uint256 minBondAmount = 100e18;
        (uint256 maturityTime, uint256 longAmount) = hyperdrive.openLong(
	          baseAmount, // the amount of base to use for longs
						minBondAmount, // min amount slippage guard
						// FIXME: We should have a getter for the share price
						hyperdrive.getPoolInfo().vaultSharePrice, // max share price guard
						IHyperdrive.Options({
						    destination: destination, // the recipient
                asBase: true, // use base to pay for the short
								extraData: new bytes(0)
						})
        );

				// Do something...
    }   

    function usesShort(...) external returns (...) {
		    // Do something...

        // Approve Hyperdrive with the maximum amount to deposit.
        uint256 maxDeposit = 10e18;
				hyperdrive.baseToken().approve(
				    address(hyperdrive),
            maxDeposit
        );

				// Open the short position.
				uint256 shortAmount = 100e18;
        (uint256 maturityTime, uint256 basePaid) = hyperdrive.openShort(
	          shortAmount, // the amount of bonds to short
						maxDeposit, // max deposit slippage guard
						// FIXME: We should have a getter for the share price
						hyperdrive.getPoolInfo().vaultSharePrice, // max share price guard
						IHyperdrive.Options({
						    destination: destination, // the recipient
                asBase: true, // use base to pay for the short
								extraData: new bytes(0)
						})
        );

				// Do something...
    }   
}`}
          </SyntaxHighlighter>
        </div>

        {/* Hyperdrive Math */}
        {/* <div
          className={classNames({
            hidden: activeTab !== 1,
          })}
        >
          <div>
            <h3>Hyperdrive Math</h3>
            <p>Rust</p>
          </div>
          <SyntaxHighlighter
            showLineNumbers={true}
            language="rust"
            style={dracula}
            lineNumberStyle={{
              width: "72px",
              borderRight: "1px solid rgba(0,0,0,.2)",
              marginRight: "24px",
            }}
            customStyle={{
              padding: "32px 56px 32px 0",
              borderRadius: "0",
            }}
          >
            // Rust code here
          </SyntaxHighlighter>
        </div> */}

        {/* Bots */}
        <div
          className={classNames({
            hidden: activeTab !== 2,
          })}
        >
          <div className="px-14 py-8 max-w-4xl">
            <h3 className="font-chakra text-body-lg text-neutral-100 font-medium mb-4">
              Build Trading Bots
            </h3>
            <p>
              Agent0 is DELV's Python-based library for testing, analyzing, and
              interacting with Hyperdrive's smart contracts. It provides
              ready-for-use trading policies as well as a framework for building
              smart agents that act according to policies that can be strictly
              user-designed, AI-powered, or a combination. These agents are
              deployable to execute trades on-chain or can be coupled with a
              simulated environment to test trading strategies, understand
              Hyperdrive, and explore integrations or deployment configurations.
              When running Hyperdrive on a local blockchain, we provide a
              managed database delivered to you as Pandas dataframes via an API
              as well as a visualization dashboard to enable analysis and
              understanding.
            </p>
          </div>
          <SyntaxHighlighter
            showLineNumbers={true}
            language="python"
            style={dracula}
            lineNumberStyle={{
              width: "72px",
              borderRight: "1px solid rgba(0,0,0,.2)",
              marginRight: "24px",
            }}
            customStyle={{
              padding: "32px 56px 32px 0",
              borderRadius: "0",
            }}
          >
            {`import datetime
from fixedpointmath import FixedPoint
from agent0.hyperdrive.interactive import ILocalHyperdrive, ILocalChain

# Initialize chain object
chain = ILocalChain()
interactive_hyperdrive = ILocalHyperdrive(chain)
hyperdrive_agent0 = interactive_hyperdrive.init_agent(base=FixedPoint(100_000)) # trading budget = 100,000

# Open Hyperdrive positions and store the results
open_long_event = hyperdrive_agent0.open_long(base=FixedPoint(100))
open_short_event = hyperdrive_agent0.open_short(base=FixedPoint(100))
add_liquidity_event = hyperdrive_agent0.add_liquidity(base=FixedPoint(100))

# Advance time for a day (only possible on local test chain)
chain.advance_time(datetime.timedelta(days=1))

# Close a position and store the results
close_long_event = hyperdrive_agent0.close_long(
    maturity_time=open_long_event.maturity_time,
    bonds=open_long_event.bond_amount,
)`}
          </SyntaxHighlighter>
        </div>

        {/* UI Integration */}
        <div
          className={classNames({
            hidden: activeTab !== 3,
          })}
        >
          <div className="px-14 py-8 max-w-4xl">
            <h3 className="font-chakra text-body-lg text-neutral-100 font-medium mb-4">
              Use the SDK to integrate frontends
            </h3>
            <p>
              The Hyperdrive TypeScript SDK provides a simple interface for
              interacting with the Hyperdrive protocol from front-ends or
              node.js applications. Under the hood, the SDK uses the Hyperdrive
              Math library compiled to WebAssembly.
            </p>
          </div>
          <SyntaxHighlighter
            showLineNumbers={true}
            language="typescript"
            style={dracula}
            lineNumberStyle={{
              width: "72px",
              borderRight: "1px solid rgba(0,0,0,.2)",
              marginRight: "24px",
            }}
            customStyle={{
              padding: "32px 56px 32px 0",
              borderRadius: "0",
            }}
          >
            {`import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "viem/chains";
import { createReadHyperdrive } from "@delvtech/hyperdrive-viem";

// 1. Create a public client
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 2. Create a wallet client
const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum!),
});

// 3. Create a ReadWriteHyperdrive instance
const hyperdrive = createReadWriteHyperdrive({
  address: "0x...",
  publicClient,
  walletClient,
});

// 4. Send a transaction
const transactionHash = await hyperdrive.pause(true);`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
