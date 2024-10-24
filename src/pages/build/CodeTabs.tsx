import classNames from "classnames";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GradientBorderButton } from "src/components/buttons/GradientButton";

type TabId = "protocol" | "hyperdrive-math" | "bots" | "ui-integration";

export function CodeTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("protocol");

  return (
    <div className="mx-auto max-w-5xl bg-neutral-900">
      {/* Tab Buttons */}
      <div className="flex gap-0.5 [&>*]:flex-1">
        <TabButton
          name="Protocol"
          language="Solidity"
          active={activeTab === "protocol"}
          onClick={() => {
            setActiveTab("protocol");
          }}
        />
        <TabButton
          name="Hyperdrive Math"
          language="Rust"
          active={activeTab === "hyperdrive-math"}
          onClick={() => {
            setActiveTab("hyperdrive-math");
          }}
        />
        <TabButton
          name="Bots"
          language="Python"
          active={activeTab === "bots"}
          onClick={() => {
            setActiveTab("bots");
          }}
        />
        <TabButton
          name="UI Integration"
          language="TypeScript"
          active={activeTab === "ui-integration"}
          onClick={() => {
            setActiveTab("ui-integration");
          }}
        />
      </div>

      {/* Tab Contents */}
      <div className="bg-neutral-950">
        {/* Protocol */}
        <TabContent
          active={activeTab === "protocol"}
          title="Utilizing Hyperdrive as a DeFi Primitive"
          body={
            <>
              <p className="mb-8">
                The Hyperdrive AMM is a new DeFi primitive that allows
                fixed-rate markets to be created on top of variable rate yield
                sources. Developers can take advantage of Hyperdrive's Long and
                Short positions to provide users with fixed rate or variable
                rate exposure. These positions can be included as part of a
                user's portfolio to provide them with predictable yield, to give
                them exposure to directional changes in the variable-rate, or to
                hedge existing borrow positions. For example, Hyperdrive Shorts
                can be used to hedge the interest owed on variable rate borrow
                positions to help shield their borrow position from effects of
                interest rate increases.
              </p>
              <GradientBorderButton
                href="https://github.com/delvtech/hyperdrive"
                className="button-sm"
              >
                Hyperdrive source code
              </GradientBorderButton>
            </>
          }
          example={{
            language: "solidity",
            code: `contract Integrator {
    IHyperdrive hyperdrive = address("0x123abc");

    function usesLong(...) external returns (...) {
        // Do something...

        // Approve Hyperdrive with the amount of base to spend.
        uint256 baseAmount = 10e18;
        hyperdrive.baseToken().approve(address(hyperdrive), baseAmount);

        // Open the long position.
        uint256 minBondAmount = 100e18;
        (uint256 maturityTime, uint256 longAmount) = hyperdrive.openLong(
            baseAmount, // the amount of base to use for longs
            minBondAmount, // min amount slippage guard
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
        hyperdrive.baseToken().approve(address(hyperdrive), maxDeposit);

        // Open the short position.
        uint256 shortAmount = 100e18;
        (uint256 maturityTime, uint256 basePaid) = hyperdrive.openShort(
            shortAmount, // the amount of bonds to short
            maxDeposit, // max deposit slippage guard
            hyperdrive.getPoolInfo().vaultSharePrice, // max share price guard
            IHyperdrive.Options({
                destination: destination, // the recipient
                asBase: true, // use base to pay for the short
                extraData: new bytes(0)
            })
        );

        // Do something...
    }
}`,
          }}
        />

        {/* Hyperdrive Math */}
        <TabContent
          active={activeTab === "hyperdrive-math"}
          title="Use the Rust SDK to abstract away detailed calculations"
          body={
            <>
              <p className="mb-8">
                Hyperdrive's Rust SDK provides several advanced calculations
                that allow developers to abstract away the details of
                Hyperdrive's implementation while still getting accurate
                results. In particular, developers can use the Rust SDK to
                calculate the max long or short that can be opened, calculate
                the trade size needed to move the pool to a target rate, and
                much more.
              </p>
              <GradientBorderButton
                href="https://docs.rs/crate/hyperdrive-math/latest"
                className="button-sm"
              >
                Rust SDK docs
              </GradientBorderButton>
            </>
          }
          example={{
            language: "rust",
            code: `use std::{str::FromStr, sync::Arc};

use ethers::{
    middleware::SignerMiddleware,
    providers::{Http, JsonRpcClient},
    signers::LocalWallet,
    types::Address,
};
use eyre::Result;
use fixed_point_macros::fixed;
use hyperdrive_math::State;
use hyperdrive_wrappers::i_hyperdrive::IHyperdrive;

#[tokio::main]
async fn main() -> Result<()> {
    // Instantiate a Hyperdrive contract wrapper.
    let provider = Http::from_str("http://localhost:8545")?;
    let client = {
        let signer = "PRIVATE_KEY".parse::<LocalWallet>()?;
        Arc::new(SignerMiddleware::new(provider.clone(), signer))
    };
    let hyperdrive = IHyperdrive::new("HYPERDRIVE_ADDRESS".parse::<Address>()?, client);

    // Construct the state object
    let state = State {
        config: hyperdrive.get_pool_config().call().await?,
        info: hyperdrive.get_pool_info().call().await?,
    };

    // Get the current block's timestamp.
    let now = provider
        .get_block(provider.get_block_number().await?)
        .await?
        .unwrap()
        .timestamp;

    // Calculate the max long that can be opened.
    println!(
        "max long = {}",
        state.get_max_long(
            fixed!(100_000e18), // budget
            hyperdrive
                .get_checkpoint_exposure(state.to_checkpoint(now))
                .await?, // checkpoint exposure
            None, // use the default max iterations
        ),
    );

    // Calculate the max short that can be opened.
    let Checkpoint {
        vault_share_price: open_vault_share_price,
    } = hyperdrive.get_checkpoint(state.to_checkpoint(now)).await?;

    println!(
        "max short = {}",
        state.get_max_short(
            fixed!(100_000e18), // budget
            open_vault_share_price, // open vault share price
            hyperdrive
                .get_checkpoint_exposure(state.to_checkpoint(now))
                .await?, // checkpoint exposure
            None, // don't give an estimated realized price
            None, // use the default max iterations
        ),
    );

    Ok(())
}`,
          }}
        />

        {/* Bots */}
        <TabContent
          active={activeTab === "bots"}
          title="Build Trading Bots"
          body={
            <>
              <p className="mb-8">
                Agent0 is DELV's Python-based library for testing, analyzing,
                and interacting with Hyperdrive's smart contracts. It provides
                ready-for-use trading policies as well as a framework for
                building smart agents that act according to policies that can be
                strictly user-designed, AI-powered, or a combination. These
                agents are deployable to execute trades on-chain or can be
                coupled with a simulated environment to test trading strategies,
                understand Hyperdrive, and explore integrations or deployment
                configurations. When running Hyperdrive on a local blockchain,
                we provide a managed database delivered to you as Pandas
                dataframes via an API as well as a visualization dashboard to
                enable analysis and understanding.
              </p>
              <ul className="mb-8 list-disc space-y-2 pl-4 marker:text-neutral-600">
                <li>
                  Get started by following our{" "}
                  <a
                    className="text-neutral-100 underline hover:text-aquamarine"
                    href="https://github.com/delvtech/agent0/blob/main/examples/tutorial.ipynb"
                  >
                    bot-building tutorial
                  </a>
                </li>
                <li>
                  Fork{" "}
                  <a
                    className="text-neutral-100 underline hover:text-aquamarine"
                    href="https://github.com/delvtech/agent0"
                  >
                    agent0
                  </a>{" "}
                  to start building your own bots
                </li>
              </ul>
              <GradientBorderButton
                href="https://agent0.readthedocs.io/en/latest/"
                className="button-sm"
              >
                agent0 docs
              </GradientBorderButton>
            </>
          }
          //           example={{
          //             language: "python",
          //             code: `import datetime
          // from fixedpointmath import FixedPoint
          // from agent0.hyperdrive.interactive import ILocalHyperdrive, ILocalChain

          // # Initialize chain object
          // chain = ILocalChain()
          // interactive_hyperdrive = ILocalHyperdrive(chain)
          // hyperdrive_agent0 = interactive_hyperdrive.init_agent(base=FixedPoint(100_000)) # trading budget = 100,000

          // # Open Hyperdrive positions and store the results
          // open_long_event = hyperdrive_agent0.open_long(base=FixedPoint(100))
          // open_short_event = hyperdrive_agent0.open_short(base=FixedPoint(100))
          // add_liquidity_event = hyperdrive_agent0.add_liquidity(base=FixedPoint(100))

          // # Advance time for a day (only possible on local test chain)
          // chain.advance_time(datetime.timedelta(days=1))

          // # Close a position and store the results
          // close_long_event = hyperdrive_agent0.close_long(
          //     maturity_time=open_long_event.maturity_time,
          //     bonds=open_long_event.bond_amount,
          // )`,
          //           }}
        />

        {/* UI Integration */}
        <TabContent
          active={activeTab === "ui-integration"}
          title="Use the SDK to integrate frontends"
          body={
            <>
              <p className="mb-8">
                The Hyperdrive TypeScript SDK provides a simple interface for
                interacting with the Hyperdrive protocol from front-ends or
                node.js applications. Under the hood, the SDK uses the
                Hyperdrive Math library compiled to WebAssembly.
              </p>
              <GradientBorderButton
                href="https://js.hyperdrive.box"
                className="button-sm"
              >
                TypeScript SDK Docs
              </GradientBorderButton>
            </>
          }
          example={{
            language: "typescript",
            code: `import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";

// 1. Create a public client
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 2. Create a ReadHyperdrive instance
const hyperdrive = new ReadHyperdrive({
  address: "0x...",
  publicClient,
});

// 3. Query the pool
const rate = await hyperdrive.getFixedApr();`,
          }}
        />
      </div>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  name: string;
  language: string;
}

function TabButton({ active, onClick, name, language }: TabButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "flex flex-col gap-1 bg-neutral-600 px-6 py-4 font-semibold text-neutral-100 transition-all hover:bg-neutral-700",
        {
          "!bg-neutral-950": active,
        },
        "max-md:items-center max-md:text-body-sm",
        "max-sm:px-2",
      )}
      onClick={onClick}
    >
      {name}
      <span className="font-normal text-content">{language}</span>
    </button>
  );
}

interface TabContentProps {
  active: boolean;
  title: string;
  body: JSX.Element;
  example?: {
    language: string;
    code: string;
  };
}

function TabContent({ active, title, body, example }: TabContentProps) {
  return (
    <div
      className={classNames({
        hidden: !active,
      })}
    >
      <div className="max-w-4xl px-14 py-8 max-lg:px-[6vw]">
        <h3 className="mb-4 font-chakra font-medium text-body-lg text-neutral-100">
          {title}
        </h3>
        {body}
      </div>
      {example && (
        <SyntaxHighlighter
          showLineNumbers={true}
          language={example.language}
          style={dracula}
          lineNumberStyle={{
            borderRight: "1px solid rgba(0,0,0,.2)",
            marginRight: "24px",
          }}
          customStyle={{
            fontSize: "14px",
            padding: "32px 56px 32px 0",
            borderRadius: "0",
          }}
        >
          {example.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
