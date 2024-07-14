import classNames from "classnames";
import { PropsWithChildren, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useIntersecting } from "src/hooks/useIntersecting";

// All questions
const questions = [
  "What is Hyperdrive?",
  "Who created Hyperdrive?",
  "How do I get started?",
  "What assets are supported?",
  "What are Longs & Shorts?",
  "How are interest rates determined?",
  "What is the role of a Liquidity Provider?",
  "Can I withdraw my assets before the maturity date of my position?",
  "What are the risks associated with using Hyperdrive?",
  "Are there any fees?",
  "Who can launch a new market on Hyperdrive?",
  "What is a Fixed Rate Borrow Position?",
  "How can I stay updated on new developments and news?",
] as const;

type Question = (typeof questions)[number];

// Create id slugs for each question
const ids: string[] = [];
const idsByQuestion = {} as Record<Question, string>;
for (const question of questions) {
  const id = slugify(question, { lower: true });
  idsByQuestion[question] = id;
  ids.push(id);
}

export function FAQs() {
  const [activeQuestionId] = useIntersecting(ids, {
    threshold: 0.5,
  });
  const navRef = useRef<HTMLDivElement>(null);

  // Ensure the nav link for the active question is always scrolled into view if
  // the screen is too small to show all questions at once.
  useEffect(() => {
    if (activeQuestionId) {
      const navItem = document.getElementById(`nav-${activeQuestionId}`);

      if (!navItem || !navRef.current) {
        return;
      }

      const navTop = navRef.current.scrollTop;
      const itemTop = navItem.offsetTop - 20;
      if (itemTop < navTop) {
        navRef.current.scrollTo({
          top: itemTop,
          behavior: "smooth",
        });
        return;
      }

      const navBottom = navTop + navRef.current.offsetHeight;
      const itemBottom = navItem.offsetTop + navItem.offsetHeight + 20;
      const delta = itemBottom - navBottom;
      if (delta > 0) {
        navRef.current.scrollTo({
          top: navTop + delta,
          behavior: "smooth",
        });
      }
    }
  }, [activeQuestionId]);

  return (
    <>
      <Header theme="dark" />

      <main className="my-40 max-w-7xl mx-auto px-[4vw]">
        <h1 className="text-h3 font-chakra gradient-text text-center">
          Frequently Asked Questions
        </h1>

        <div className="flex items-start gap-10 mt-16 max-md:justify-center">
          {/* Fixed question nav */}
          <div
            ref={navRef}
            className="basis-1/3 p-6 bg-card-gradient flex flex-col gap-2 sticky top-24 max-md:hidden max-h-[calc(100vh_-_116px)] overflow-y-auto"
          >
            {Object.entries(idsByQuestion).map(([question, id]) => (
              <a
                key={id}
                id={`nav-${id}`}
                href={`#${id}`}
                className={classNames(
                  "font-medium p-2 hover:text-neutral-100 transition-all",
                  {
                    "!text-aquamarine": activeQuestionId === id,
                  },
                )}
              >
                {question}
              </a>
            ))}
          </div>

          {/* Scrolling content */}
          <div className="basis-2/3 flex flex-col gap-16 body-copy max-md:basis-full">
            <Answer question="What is Hyperdrive?">
              <p>
                <Link className="" to="/docs">
                  Hyperdrive
                </Link>{" "}
                is an automated market maker (AMM) that enables fixed-rate
                markets to be built on top of arbitrary yield sources (e.g.
                stETH, sDAI, etc.). The yield source provides a variable rate of
                return, while the AMM's novel pricing mechanism facilitates
                trading rates, supported by the liquidity that underlies a given
                market. Hyperdrive supports LP'ing that is perpetual by design
                and solves the problem of liquidity fragmentation that other
                fixed-rate protocols face. In addition, It drastically
                simplifies the UX for both traders and LPs, while enhancing the
                efficiency of yield markets across DeFi.
              </p>
            </Answer>

            <Answer question="Who created Hyperdrive?">
              <p>
                Hyperdrive was created by <a href="https://delv.tech">DELV</a>,
                an R&D company that focuses on building novel, research-backed,
                and open-source infrastructure. Other projects they've worked on
                include the Element Protocol (which was released to the
                governance community in March 2022) and the Council governance
                framework. Hyperdrive is the next R&D leap from the team on
                variable and fixed rate primitives for DeFi.
              </p>
            </Answer>

            <Answer question="How do I get started?">
              <p>
                Launch the Hyperdrive App. From there, you can explore the
                available markets where you can take a Long, Short, and/or LP
                position to engage in passive or active yield strategies. Find
                more details in our{" "}
                <a href="https://docs.hyperdrive.box/hyperdrive-overview/ui-walkthrough">
                  UI Walkthrough
                </a>
                .
              </p>
            </Answer>

            <Answer question="What assets are supported?">
              <p>
                Hyperdrive currently supports{" "}
                <a href="https://github.com/makerdao/sdai">sDAI</a> and{" "}
                <a href="https://help.lido.fi/en/articles/5230610-what-is-steth">
                  stETH
                </a>{" "}
                and we plan to add support for an increasing variety of
                reputable yield sources. Explore the app to view all supported
                markets: <Link to="/app">Hyperdrive App.</Link>
              </p>
            </Answer>

            <Answer question="What are Longs & Shorts?">
              <p>
                <a href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/longs-fixed-rates">
                  Long positions
                </a>{" "}
                in Hyperdrive allow users to earn a fixed rate on their
                deposits. When a user opens a Long position, they receive an
                agreed-upon future value that is redeemable 1:1 at maturity.
              </p>

              <h3 className="text-neutral-100 font-semibold">Example</h3>
              <p>
                A user deposits 1.00 stETH in a market offering a 5% fixed APR
                (net of fees) for a 12-month position duration. They can redeem
                1.05 stETH one year from now.
              </p>
              <p>
                <a href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/shorts-variable-rates">
                  Short positions
                </a>{" "}
                in Hyperdrive enable users to earn a multiplied variable rate
                that may result in higher implied yields. Users pay the market
                fixed rate upfront as margin and earn variable yield on the full
                capital this margin is backing, leading to a profit (or loss)
                depending on which rate performed better.
              </p>

              <h3 className="text-neutral-100 font-semibold">Example</h3>
              <p>
                A user could pay 0.05 stETH upfront to earn the yield generated
                by a total of 1.05 stETH for a year (assuming a 5% fixed APR,
                12-month position duration). If the variable yield works out to
                be 0.08 stETH (8% APY), they'll be exposed to an implied return
                of:
                <br />
                <code>= variable yield * (1 / fixed rate)</code>
                <br />
                <code>= 0.08 * (1 / 0.05)</code>
                <br />
                <code>= 0.08 * 20</code>
                <br />
                <code>
                  = 1.6x on their principal investment (before pool fees)
                </code>
              </p>
            </Answer>

            <Answer question="How are interest rates determined?">
              <p>
                Interest rates in Hyperdrive are determined by market dynamics.
                The fixed rate for a given Hyperdrive market is determined by
                the AMM's pricing mechanism, and is a function of the trading
                activity in that market, while the variable rates are determined
                by the underlying yield source.
              </p>
            </Answer>

            <Answer question="What is the role of a Liquidity Provider?">
              <p>
                <a href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/liquidity-provider">
                  Liquidity Providers
                </a>{" "}
                (LPs) deposit single-sided liquidity into the Hyperdrive AMM,
                meaning they only need to provide liquidity in a base asset
                (like ETH, stETH, DAI or sDAI). LPs collectively take the other
                side of traders' respective Longs and Shorts in the market,
                which means that Long positions generate more variable yield for
                LPs, while Short positions take variable yield from LPs.{" "}
              </p>
              <p>
                Every time a user opens or closes a Long or a Short in
                Hyperdrive, the LPs earn fees according to the pool's initial
                configuration. Unutilized LP capital in Hyperdrive markets earns
                the underlying yield source's variable rate. LP capital isn't
                tied to a specific maturity date, so these benefits remain until
                the funds are withdrawn by the LP.
              </p>
            </Answer>

            <Answer question="Can I withdraw my assets before the maturity date of my position?">
              <p>
                Yes, users can exit their positions in a Hyperdrive market at
                any time prior to maturity. However, the position's
                profitability may be affected by market conditions at the time
                of closing. For example, Longs are structured to profit if held
                to maturity, but closing the position early could also result in
                a lower profit or a loss depending on the market rate.
              </p>
              <p>
                For LPs - If you attempt to withdraw liquidity and there is not
                enough idle liquidity (i.e., liquidity that is not currently
                backing open Long/Short positions) in the system, the portion of
                your liquidity that exceeds the system's idle liquidity may be
                queued for delayed withdrawal.
              </p>
            </Answer>

            <Answer question="What are the risks associated with using Hyperdrive?">
              <p>
                Security is a top priority to DELV. Hyperdrive has undergone
                multiple audits and a formal verification process. Learn more in
                the{" "}
                <a href="https://hyperdrive.delv.tech/#security">Security</a>{" "}
                section of our website.
              </p>
              <p>
                However, as with any DeFi protocol, there are inherent risks,
                such as potential smart contract vulnerabilities and the
                possibility of loss due to the user's incorrect appraisal of
                future market behavior. Users are encouraged to conduct thorough
                research and understand the risks before making any investment
                decision.
              </p>
              <p>
                To the extent permitted by applicable law, Hyperdrive is made
                available on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
                OF ANY KIND, either express or implied. See our{" "}
                <a href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf">
                  Terms of Service
                </a>
                . Nothing within this document or elsewhere within Hyperdrive
                documentation may be taken as financial, investment, regulatory,
                legal, or tax advice.
              </p>
            </Answer>

            <Answer question="Are there any fees?">
              <p>
                Users pay two types of{" "}
                <a href="https://docs.hyperdrive.box/trading/fees">fees</a> when
                opening or closing their Long or Short positions:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  a Curve Fee that is dynamic and is applied to the non-matured
                  portion of positions at the time of trading.
                </li>
                <li>
                  a Flat Fee that is fixed and applied to the matured portion of
                  positions at the time of redemption.
                </li>
              </ul>
              <p>
                Curve Fees rise or drop along with the fixed rates and are
                applied when the position is opened or closed. Flat Fees are a
                fixed percentage of the matured position size.
              </p>
              <p>
                LPs earn Curve Fees and Flat Fees from user trades. Depending on
                the deployment, it's possible that part of the fee revenue could
                be directed to, for example, a treasury contract set by the
                deployer protocol's governance, in addition to LPs.
              </p>
            </Answer>

            <Answer question="Who can launch a new market on Hyperdrive?">
              <p>
                Anyone can deploy new Hyperdrive markets based on DeFi yield
                sources. You may also want to provide your own front end for
                users to interact with the pools you deploy. Check out our{" "}
                <a href="https://hyperdrive.delv.tech/build">Build</a> page to
                learn more about the extensive suite of tools available for
                building on and interacting with Hyperdrive.
              </p>
            </Answer>

            <Answer question="What is a Fixed Rate Borrow Position?">
              <p>
                <a href="https://docs.hyperdrive.box/trading/trading-strategies/fixed-rate-borrow">
                  Fixed Rate Borrow
                </a>{" "}
                is a feature unlocked by Hyperdrive markets that allows users to
                place a cap on the potential downside of borrow positions, which
                makes their borrow costs more predictable. Hyperdrive allows
                borrowers to hedge against increases in borrowing costs by
                allowing them to match their borrow position with a lending
                position in the same market through a Hyperdrive Short, for
                which they pay a marginal cost given by the Hyperdrive market's
                fixed rate. Essentially, Hyperdrive gives borrowers supply-side
                earnings for their borrow positions, at a marginal fixed cost.
              </p>
              <p>
                Stay tuned for more updates around a dedicated Fixed Rate Borrow
                product, which will be available shortly after Hyperdrive
                launch.
              </p>
            </Answer>

            <Answer question="How can I stay updated on new developments and news?">
              <p>
                You can stay updated on new Hyperdrive developments by following
                our official social media channels (
                <a href="https://twitter.com/delv_tech">X</a>,{" "}
                <a href="https://warpcast.com/~/channel/delv">Farcaster</a>, and{" "}
                <a href="https://www.linkedin.com/company/delv-tech/">
                  Linkedin
                </a>
                ), joining our{" "}
                <a href="https://www.delv.tech/discord/">Discord server</a>, and
                subscribing to our <a href="https://blog.delv.tech/">blog</a>.
              </p>
            </Answer>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Answer({
  question,
  children,
}: PropsWithChildren<{ question: Question }>) {
  return (
    // The id container includes a top padding to offset it's scroll position
    // when jumping to it, and a negative top margin to prevent the padding from
    // affecting the layout.
    <div className="pt-24 -mt-24" id={idsByQuestion[question]}>
      <div className="relative flex flex-col gap-4">
        <h2 className="text-h6 text-neutral-100">{question}</h2>
        {children}
      </div>
    </div>
  );
}
