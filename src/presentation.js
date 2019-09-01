// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Text,
  Image,
  List,
  Appear,
  Slide as BaseSlide,
  Quote,
  Cite,
  Notes
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import Layout from "./components/layout";
import Slide from "./components/slide";
import Social from "./components/social";
import Formidable from "./components/formidable";
import OSS from "./components/oss";
import ListItem from "./components/listItem";
import Code from "./components/code";
import Flex from "./components/flex";
import RoundedImage from "./components/roundedImage";
import Annotation from "./components/annotation";
import HighlightedText from "./components/highlighted_text";
import BlockQuote from "./components/blockquote";

import Topo from "./static/topography.svg";
import ReasonLogo from "./static/reason.png";
import ReasonLogoLong from "./static/reason_logo_long.svg";
import ParkieDoo from "./static/ziegler_parker_portrait_3.jpg";
import ReasonErrorHandling from "./static/reason_error_handling.png";
import FormidableLocales from "./static/formidable_locales.png";
import FormidableOSS from "./static/formidable_oss.png";
import TypeScriptLogo from "./static/typescript_logo.png";
import StateOfJS2017 from "./static/state_of_js_2017.png";
import Thonkilicious from "./static/thonkilicious.gif";
import TypeScriptPer from "./static/typescript_per.png";
import TypeScriptKen from "./static/typescript_ken.png";
import WASMLogo from "./static/wasm_logo.png";
import ElmLogo from "./static/elm_logo.png";
import SvelteLogo from "./static/svelte_logo.png";
import ReasonDiscord from "./static/reason_discord.png";
import JavaScriptLogo from "./static/javascript_logo.png";
import OCamlLogo from "./static/ocaml_logo.jpeg";
import OCamlLogoLong from "./static/ocaml.png";
import FlowLogo from "./static/flow_logo.png";
import ReasonOCamlConnection from "./static/reason_ocaml_connection.svg";
import GettingHelp from "./static/getting_help.png";
import BuckleScriptLogo from "./static/bucklescript.png";
import BuckleScriptLogoSmall from "./static/bucklescript_logo_small.svg";
import ReasonBikeshedding from "./static/reason_bikeshedding.png";
import ReasonBikesheddingResponse from "./static/reason_bikeshedding_response.png";
import GitHubSocial from "./static/github_social.jpg";
import DiscordLogo from "./static/discord_logo.png";
import ReasonDocs from "./static/reason_docs.png";
import ReasonBascis from "./static/reason_basics.png";
import TypeScriptBullshit from "./static/typescript_bullshit.png";
import Wonka from "./static/wonka.svg";
import ReprocessingDemo from "./static/reprocessing_demo.gif";
import PerlinNoise from "./static/perlin_noise.png";
import Gravitron from "./static/gravitron.gif";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import StrangeLoop from "./components/strangeloop";
import Profile from "./components/profile";

// Require CSS
require("normalize.css");

// Import code samples
require("prismjs");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-reason");
require("prismjs/components/prism-markup-templating");
const Collatz = require("./code/collatz.example");
const CollatzCompiled = require("./code/collatz_compiled.example");
const TypeScriptInference = require("./code/typescript_inference.example");
const ReasonInference = require("./code/reason_inference.example");
const WonkaReason = require("./code/wonka_reason.example");
const WonkaTypescript = require("./code/wonka_typescript.example");

const theme = createTheme(
  {
    primary: "white"
  },
  {
    primary: {
      name: "Fira Code",
      googleFont: true
    },
    secondary: "monospace"
  }
);

const Presentation = () => {
  return (
    <Deck theme={theme} transition={["slide"]} transitionDuration={500}>
      <Slide>
        <Notes>
          Good afternoon folks, thanks for sticking around today. What an
          awesome day of talks it's been – I'm so energized by this community
          and the knowledge that's being shared here. So the title of my talk
          this afternoon is "Towards an Open, Reason(ML)able Web." The idea for
          this talk comes out of two of my passions – making the web more
          accessible to new developers, and a fairly new programming language
          called ReasonML.
        </Notes>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Heading size={4}>Towards an Open, Reason(ML)able Web</Heading>
          <StrangeLoop />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          Now before we begin, let's be honest with one another. - It's 4:30pm.
        </Notes>
        <Layout>
          <Heading size={5}>Let's Be Honest</Heading>
          <Appear>
            <Text>It's 4:30pm.</Text>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          You may be hitting that hour when your eyes are getting a little
          heavy. - Maybe you're thinking of upcoming celebrations with new
          friends from the conference today. - Maybe you're still here for this
          last session, and ready to learn something new. - Well, I thought
          about this and I decided:
        </Notes>
        <Layout>
          <Flex.FlexHorizontalEvenly
            style={{ width: "100%", fontSize: "5rem" }}
          >
            <span role="img" aria-labelledby="Nap">
              💤
            </span>
            <Appear>
              <span role="img" aria-labelledby="Celebrating">
                🍻
              </span>
            </Appear>
            <Appear>
              <span role="img" aria-labelledby="Brain">
                🧠
              </span>
            </Appear>
          </Flex.FlexHorizontalEvenly>
        </Layout>
      </Slide>
      <Slide>
        <Notes>To make this talk a story.</Notes>
        <Layout>
          <Heading size={4}>
            This talk is really a <HighlightedText>story</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          It's a story about a language and the community that formed around
          that language.
        </Notes>
        <Layout>
          <Heading size={5}>
            It's a story about a <HighlightedText>language</HighlightedText> and
            the <HighlightedText>community</HighlightedText> that formed around
            it.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          It's a story about the future of the web, and how I think Reason, or
          something like it, can give us insight into what that future looks
          like.
        </Notes>
        <Layout>
          <Heading size={5}>
            It's a story about the <HighlightedText>future</HighlightedText> of
            the web.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          And it's a story about how we create cultures around open source in
          new programming communities.
        </Notes>
        <Layout>
          <Heading size={5}>
            It's a story about how we create{" "}
            <HighlightedText>cultures</HighlightedText> around open source.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes></Notes>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Profile src={ParkieDoo} />
          <Heading size={6}>Software Engineer at Formidable</Heading>
          <Social />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Formidable />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={FormidableLocales} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <OSS />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={FormidableOSS} />
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <List>
            <ListItem>Where is the web going in the next year?</ListItem>
            <Appear>
              <ListItem>What about in the next five?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                How do we want to be involved in that transformation?
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Heading size={2}>Early 2018</Heading>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Heading size={4}>Static Typing</Heading>
          <Image src={TypeScriptLogo} height={175} style={{ margin: 20 }} />
          <Text>was eating the world.</Text>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={StateOfJS2017} />
          <Annotation>From the State of JS 2017</Annotation>
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Image src={Thonkilicious} height={75} />
          <List>
            <Appear>
              <ListItem>Type inference was terrible.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code>typings</Code> !== <Code>@types</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                "<Code>AnyScript</Code>"
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span role="img" aria-labelledby="Light">
                  🐌
                </span>{" "}
                Slow compilation
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Heading size={5}>
            Using a <HighlightedText>type system</HighlightedText> can
            fundamentally change how you write code for the{" "}
            <HighlightedText>better</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Image src={TypeScriptPer} />
          <Image src={TypeScriptKen} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Heading size={5}>
            No one wanted to <HighlightedText>write</HighlightedText> JS. <br />
            <br /> Everyone wanted to <HighlightedText>
              compile
            </HighlightedText>{" "}
            to JS.
          </Heading>
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Flex.FlexHorizontalEvenly>
            <Image src={WASMLogo} height={150} style={{ margin: 20 }} />
            <Appear>
              <Image src={ElmLogo} height={150} style={{ margin: 20 }} />
            </Appear>
            <Appear>
              <Image src={SvelteLogo} height={150} style={{ margin: 20 }} />
            </Appear>
          </Flex.FlexHorizontalEvenly>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Heading size={4}>
            <span role="img" aria-labelledby="Hype Train">
              🚂
            </span>{" "}
            All Aboard
          </Heading>
          <Text>(your respective hype trains)</Text>
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Image src={ReasonLogo} height={150} />
          <List>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                A supercharged type system with{" "}
                <span role="img" aria-labelledby="100">
                  💯
                </span>{" "}
                inference.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                <span role="img" aria-labelledby="Zap">
                  ⚡
                </span>
                Lightning quick compilation (ms rebuilds).
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Compile to web{" "}
                <span role="img" aria-labelledby="Web">
                  🕸️
                </span>{" "}
                and native{" "}
                <span role="img" aria-labelledby="Native">
                  🖥️
                </span>
                .
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </BaseSlide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Image src={ReasonLogoLong} height={125} style={{ margin: 20 }} />
          <Appear>
            <div>
              <Text>is just a syntax for</Text>
              <Image src={OCamlLogoLong} height={125} style={{ margin: 20 }} />
            </div>
          </Appear>
          <Appear>
            <Flex.FlexHorizontal>
              <Text>
                (that looks like{" "}
                <Image
                  src={JavaScriptLogo}
                  height={50}
                  style={{ display: "inline-block", margin: 0 }}
                />
                )
              </Text>
            </Flex.FlexHorizontal>
          </Appear>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Image src={ReasonOCamlConnection} />
          <Annotation>
            From Dr. Axel Rauschmayer's "Exploring ReasonML"
          </Annotation>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Heading size={4}>What's new is actually old.</Heading>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={ReasonErrorHandling} style={{ height: "75%" }} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={ReasonDiscord} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <RoundedImage src={GettingHelp} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Heading size={5}>This felt novel.</Heading>
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Heading size={6}>
            <HighlightedText>Design</HighlightedText> vs.{" "}
            <HighlightedText>Bikeshedding</HighlightedText>
          </Heading>
          <Appear>
            <RoundedImage src={ReasonBikeshedding} />
          </Appear>
          <Appear>
            <RoundedImage src={ReasonBikesheddingResponse} />
          </Appear>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <RoundedImage
            src={BuckleScriptLogo}
            width="100%"
            style={{ objectFit: "cover", margin: "-4rem" }}
          />
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Image src={BuckleScriptLogoSmall} height={75} />
          <List>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Compiler for Reason / OCaml to JS.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Guaranteed type soundness.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Compile time optimizations.
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </BaseSlide>
      <CodeSlide
        code={TypeScriptInference}
        lang="js"
        ranges={[
          { loc: [0, 1], title: "Identity Function" },
          { loc: [1, 2], title: "Inferred As" },
          { loc: [3, 4], title: "Call id with string" },
          { loc: [4, 5], title: "Inferred As" },
          { loc: [6, 7], title: "Call id with number" },
          { loc: [7, 8], title: "Inferred As" }
        ]}
      />
      <CodeSlide
        code={ReasonInference}
        lang="js"
        ranges={[
          { loc: [0, 1], title: "Identity Function" },
          { loc: [1, 2], title: "Inferred As" },
          { loc: [3, 4], title: "Call id with char" },
          { loc: [4, 5], title: "Inferred As" },
          { loc: [6, 7], title: "Call id with int" },
          { loc: [7, 8], title: "Inferred As" }
        ]}
      />
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Heading size={4}>
            <span role="img" aria-labelledby="Mind Blown">
              🤯
            </span>{" "}
          </Heading>
          <Appear>
            <Text>
              The <HighlightedText>dynamism</HighlightedText> of JavaScript with
              a truly <HighlightedText>sound</HighlightedText> type system.
            </Text>
          </Appear>
        </Layout>
      </BaseSlide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Text style={{ textAlign: "left" }}>
            <span role="img" aria-labelledby="Speak">
              🗣️
            </span>{" "}
            I started talking to people about Reason.
          </Text>
          <Appear>
            <Text style={{ textAlign: "left" }}>
              <span role="img" aria-labelledby="Support">
                🗳️
              </span>{" "}
              I tried to get internal support.
            </Text>
          </Appear>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Image src={GitHubSocial} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Flex.FlexHorizontalEvenly>
            <Image src={DiscordLogo} height={175} style={{ margin: 40 }} />
            <Image src={ReasonDocs} height={175} style={{ margin: 40 }} />
            <Text style={{ margin: 40, fontSize: "4rem" }}>
              <span role="img" aria-labelledby="Where">
                ❓
              </span>{" "}
            </Text>
          </Flex.FlexHorizontalEvenly>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Image src={ReasonBascis} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Image src={TypeScriptBullshit} />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
            <Code style={{ fontSize: "4rem" }}>wonka</Code>
            <Image src={Wonka} height={350} />
          </Flex.FlexHorizontalBetween>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <BlockQuote>
            <Quote>
              A lightweight iterable and observable library loosely based on the
              callbag spec.
            </Quote>
            <Cite>
              <Code>wonka</Code> Docs
            </Cite>
          </BlockQuote>
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Flex.FlexVerticalEvenly style={{ height: "100%" }}>
            <Flex.FlexHorizontalEvenly style={{ width: "100%" }}>
              <Image src={ReasonLogo} height={100} />
              <Appear>
                <Image src={OCamlLogo} height={100} />
              </Appear>
              <Appear>
                <Image src={JavaScriptLogo} height={100} />
              </Appear>
              <Appear>
                <Image src={TypeScriptLogo} height={100} />
              </Appear>
              <Appear>
                <Image src={FlowLogo} height={100} />
              </Appear>
            </Flex.FlexHorizontalEvenly>
            <Appear>
              <Text>All from a single source!</Text>
            </Appear>
          </Flex.FlexVerticalEvenly>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Text>
            Cross Platform <b>Apps</b>
          </Text>
          <Appear>
            <Text>
              Cross Platform{" "}
              <span style={{ textDecoration: "line-through" }}>
                <b>Apps</b>
              </span>{" "}
              <b>
                <i>Libraries</i>
              </b>
            </Text>
          </Appear>
        </Layout>
      </Slide>
      <CodeSlide
        code={WonkaReason}
        lang="js"
        ranges={[
          { loc: [0, 1], title: "Bring module into scope" },
          { loc: [2, 3], title: "Create a source" },
          { loc: [3, 4], title: "Accumulate with scan operator" },
          { loc: [4, 5], title: "Delay by 100ms" },
          { loc: [5, 6], title: "Print 1 to console" },
          { loc: [4, 5], title: "Delay by 100ms" },
          { loc: [5, 6], title: "Print 3 to console" },
          { loc: [4, 5], title: "Delay by 100ms" },
          { loc: [5, 6], title: "Print 6 to console" },
          { loc: [7, 8], title: "Until it completes" }
        ]}
      />
      <CodeSlide
        code={WonkaTypescript}
        lang="js"
        ranges={[
          { loc: [0, 1], title: "Import dependencies" },
          { loc: [2, 3], title: "Use the pipe operator" },
          { loc: [3, 4], title: "Create a source" },
          { loc: [4, 5], title: "Accumulate with scan operator" },
          { loc: [5, 6], title: "Delay by 100ms" },
          { loc: [6, 7], title: "Print 1 to console" },
          { loc: [5, 6], title: "Delay by 100ms" },
          { loc: [6, 7], title: "Print 3 to console" },
          { loc: [5, 6], title: "Delay by 100ms" },
          { loc: [6, 7], title: "Print 6 to console" },
          { loc: [9, 10], title: "Until it completes" }
        ]}
      />
      <Slide>
        <Layout>
          <Code style={{ fontSize: "3rem", marginBottom: 30 }}>
            reprocessing
          </Code>
          <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
            <RoundedImage
              src={PerlinNoise}
              height={300}
              style={{
                marginRight: 30,
                boxShadow:
                  "10px 10px 15px -10px rgba(34,34,34,0.5), -10px -10px 15px -10px rgba(34,34,34,0.5)"
              }}
            />
            <RoundedImage
              src={Gravitron}
              height={300}
              style={{
                boxShadow:
                  "10px 10px 15px -10px rgba(34,34,34,0.5), -10px -10px 15px -10px rgba(34,34,34,0.5)"
              }}
            />
          </Flex.FlexHorizontalBetween>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <BlockQuote>
            <Quote>
              A high-level drawing library, inspired by Processing, allowing you
              to write code that'll run on the web (using WebGL) and natively
              (using OpenGL).
            </Quote>
            <Cite>
              <Code>reprocessing</Code> Docs
            </Cite>
          </BlockQuote>
        </Layout>
      </Slide>
      <BaseSlide>
        <RoundedImage
          src={ReprocessingDemo}
          style={{
            boxShadow:
              "10px 10px 15px -10px rgba(34,34,34,0.5), -10px -10px 15px -10px rgba(34,34,34,0.5)"
          }}
        />
      </BaseSlide>
      {/* <CodeSlide
        code={Collatz}
        lang="reason"
        ranges={[
          { loc: [0, 1], title: "Recursive Function" },
          { loc: [1, 7], title: "Pattern Match" }
        ]}
      />
      <CodeSlide
        code={CollatzCompiled}
        lang="reason"
        ranges={[
          { loc: [0, 4], title: "Metadata and Imports" },
          { loc: [6, 7], title: "While Loop Recursion" },
          { loc: [9, 18], title: "Base Case" },
          { loc: [18, 21], title: "Recursive Case" },
          { loc: [24, 26], title: "Metadata on Exports" }
        ]}
      /> */}
    </Deck>
  );
};

export default Presentation;
