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
import Note from "./components/notes";

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
import ReasonBasics from "./static/reason_basics.png";
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
    <Deck theme={theme} transition={["slide"]} transitionDuration={300}>
      <Slide>
        <Notes>
          <Note
            main={`Good afternoon folks, thanks for sticking around today. What an
          awesome day of talks it's been – I'm so energized by this community
          and the knowledge that's being shared here. So the title of my talk
          this afternoon is "Towards an Open, Reason(ML)able Web." The idea for
          this talk comes out of two of my passions – making the web more
          accessible to new developers, and a fairly new programming language
          called ReasonML.`}
          />
        </Notes>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Heading size={4}>Towards an Open, Reason(ML)able Web</Heading>
          <StrangeLoop />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now before we begin, let's be honest with one another.`}
            points={[`It's 4:30pm.`]}
          />
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
          <Note
            main={`You may be hitting that hour when your eyes are getting a little
          heavy.`}
            points={[
              `Maybe you're thinking of upcoming celebrations with new friends
              from the conference today.`,
              `Maybe you're still here for this last session, and ready to learn
              something new.`,
              "Well, I thought about this and I decided:"
            ]}
          />
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
        <Notes>
          <Note main="To make this talk a story." />
        </Notes>
        <Layout>
          <Heading size={4}>
            This talk is really a <HighlightedText>story</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`It's a story about a language and the community that formed around
          that language.`}
          />
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
          <Note
            main={`It's a story about the future of the web, and how I think Reason, or
          something like it, can give us insight into what that future looks
          like.`}
          />
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
          <Note
            main={`And it's a story about how we create cultures around open source in
          new programming communities.`}
          />
        </Notes>
        <Layout>
          <Heading size={5}>
            It's a story about how we create{" "}
            <HighlightedText>cultures</HighlightedText> around open source.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, before we get too deep into this story, I should tell you a
          little bit about who your storyteller is.`}
            points={[
              `So my name is Parker and I'm a software engineer at Formidable.`
            ]}
          />
        </Notes>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Profile src={ParkieDoo} />
          <Heading size={6}>Software Engineer at Formidable</Heading>
          <Social />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`For those of you who don't know Formidable, we're a JavaScript
          consultancy who embeds directly with teams to help them level up.`}
          />
        </Notes>
        <Layout>
          <Formidable />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`We're based in Seattle and have offices in London, Denver, and
          Phoenix. In addition to our consulting practice, we have a heavy focus
          on open source and shaping the future of the web.`}
          />
        </Notes>
        <Layout>
          <RoundedImage src={FormidableLocales} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`You may have heard of some of our open source projects like`}
            points={[
              `Spectacle – a presentation library for React, and actually what
              this talk uses.`,
              `Victory – a data visualization library for React.`,
              `We also recently launched v1 of urql, a GraphQL client for React.`,
              `And runpkg, an online explorer for packages on the npm registry.`
            ]}
          />
        </Notes>
        <Layout>
          <OSS />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`We love open source at Formidable, and it's a big part of our identity
          and who we are as a culture. As part of doing a lot of open source,
          we're also continually involved in discussions with the broader web
          community about where the web is going from a technical perspective.`}
            points={[
              `In fact, every year we gather the Formidable team from across the
              world to engage in a week of technical discussion around where we
              see the web going.`
            ]}
          />
        </Notes>
        <Layout>
          <RoundedImage src={FormidableOSS} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`During this time we're asking questions of one another based on our
          experiences working in open source and across a lot of different
          client teams around the world. We ask questions like:`}
            points={[
              `
              Where is the web going in the next year? What about in the next
              five?`,
              `How do we want to be involved in that transformation?`,
              `How can we support other developers in that process?`
            ]}
          />
        </Notes>
        <Layout>
          <List>
            <ListItem>
              Where is the web going in the next year? The next five?
            </ListItem>
            <Appear>
              <ListItem>
                How do we want to be involved in that transformation?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                How can we support other developers in that process?
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`So let me take you back to early 2018, my first time engaging in this
          discussion with my colleagues at Formidable. We were talking about the
          changes we were starting to see in the client projects we'd gotten and
          the OSS libraries we contributed to, and we were starting to see two
          patterns emerge.`}
          />
        </Notes>
        <Layout>
          <Heading size={2}>Early 2018</Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Static typing, and specifically TypeScript, was eating the web.`}
            points={[
              `Teams were latching onto this idea that having a compile time type
              checking step could help eliminate bugs from their web
              applications.`,
              `
              TypeScript had also matured, and its features were considerably
              more advanced than they had been even a year earlier.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>Static Typing</Heading>
          <Image src={TypeScriptLogo} height={175} style={{ margin: 20 }} />
          <Text>was eating the web.</Text>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`The State of JS survey that had just come out recently really bore
          this out. Not only had TypeScript grown majorly in adoption, but so
          had another static type checking tool, Flow.`}
            points={[
              `
              There was also a lot of interest in learning TypeScript among
              teams that hadn't yet adopted it.`
            ]}
          />
        </Notes>
        <Layout>
          <RoundedImage src={StateOfJS2017} />
          <Annotation>From the State of JS 2017</Annotation>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now very honestly, this surprised me. I had worked for a company that
          was a very early adopter of TypeScript. We had used it back in the
          v1.4 days, when there was very little community support around it.`}
            points={[
              `
              Type inference was terrible and our team wasn't disciplined about
              types.`,
              `
              Type definitions were distributed via a tool called typings,
              which was a precursor to @types and the DefinitelyTyped repo.
          The definitions were often wrong, which forced you to litter your
          codebase with @ts-ignore.`,
              `
              The result was that we ended up with a codebase that was using
              "anyscript", an illusion of static typing.`,
              `
              And compilation times were incredibly slow. TypeScript would run
              full typechecking on your app on every rebuild, which would result
              in 10-15 seconds hot reload your app.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Nevertheless, that experience had still really opened my mind to the
          power of static typing. As someone who had only ever programmed in
          JavaScript up until that point, I was used to the somewhat quirky,
          cavalier nature of dynamically typed languages. But working with a
          type system did really help me start to see the bugs in my code.`}
            points={[
              `
              Complex logic spread across multiple files now became linked, and
              my ability to read and review code improved as a result.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={5}>
            Using a <HighlightedText>type system</HighlightedText> can
            fundamentally change how you write code for the{" "}
            <HighlightedText>better</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`And of course, I wasn't alone. Almost every team we were working
              with at Formidable was adopting static typing of some kind.
              Now interestingly, folks seemed to be overwhelmingly going for TypeScript
              rather than Flow.`}
            points={[
              `And I thought, ok, this makes sense. We have a major corporation in Microsoft backing this project, and for a lot of teams that gives them a sense of comfort.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={TypeScriptPer} />
          <Image src={TypeScriptKen} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, the second trend that came out of this meeting was a broader discussion about compilation to JavaScript. All of us at Formidable were curious about these new languages, frameworks, and web standards coming out. It seemed like all the cool kids were taking the stance that you shouldn't write your JS by hand anymore. You should write your source code in a different language and compile it to JS.`}
          />
        </Notes>
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
      <Slide>
        <Notes>
          <Note
            main={`The WebAssembly standard was starting to crystallize and people were getting excited to play with it. Elm was getting hot amidst the move to static typing. The first prototypes of Svelte had come out.`}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`It kind of felt like hype trains were leaving the station in every direction, and I wanted to be a part of it.`}
          />
        </Notes>
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
      <Slide>
        <Notes>
          <Note
            main={`One of the last things we discussed that day was a little known language called ReasonML, whose promise was a little different from everything else.`}
            points={[
              `Reason promised a supercharged type system, with 100% sound type inference.`,
              `It also highlighted blazing fast compilation times (ms rebuilds). For someone coming from TypeScript projects that were regularly taking seconds to recompile, this was particularly alluring.`,
              `It also advertised that could target both the web and native from a single source.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`What probably surprised me the most, however, was that Reason wasn't necessarily a new technology. In fact, after a bit of light research, I found it that, at it's most basic, it was just a syntax for a language called OCaml, which had been around since 1996.`}
            points={[
              `I read that OCaml allowed for syntactic extensions to the language, and the Reason team had taken advantage of this to create a syntax that looked like JavaScript.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, to give you all a better sense of what this looks like, let's take look at a simple diagram from Axel Rauschmayer's blog. His blog is sort of the seminal first text on the language, and many people encounter this diagram early on.`}
            points={[
              `You can see that Reason branches off at an early stage from OCaml in the compilation process. It's just a syntax, and it gets parsed into an OCaml.`,
              `Once we have the AST in place, different backends (compilers) can take effect and compile your code to your target of choice – bytecode, native code, or JavaScript.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={ReasonOCamlConnection} />
          <Annotation>
            From Dr. Axel Rauschmayer's "Exploring ReasonML"
          </Annotation>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Reading this, I was kind of shocked. It was like, what's new is actually old.`}
            points={[
              `And this actually made me quite excited about Reason – in investing in something based off of time-tested ideas in OCaml, I felt like I was skipping over the worst parts of the hype train ride, namely the leap between what's cool and flashy, and what can actually use in production.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>What's new is actually old.</Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`And so I started playing with the language. I went home that night, went through the hello world tutorials, and started trying to make things. I got really excited by quality of the compiler errors, so much so that I actually tweeted about it.`}
          />
        </Notes>
        <Layout>
          <RoundedImage src={ReasonErrorHandling} style={{ height: "75%" }} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`I joined the ReasonML Discord and began to get to know the community.`}
          />
        </Notes>
        <Layout>
          <RoundedImage src={ReasonDiscord} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`I asked questions and got help, often from core contributors to the language, or even the original authors themselves.`}
            points={[
              `What really struck me about this experience is that the language was being actively engineered in the open.`,
              `Core team members were, in getting the community on board, also seeking their feedback around how to make the syntax friendly, how to translate the best of OCaml's type system into JavaScript, how to empower new users.`
            ]}
          />
        </Notes>
        <Layout>
          <RoundedImage src={GettingHelp} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`In a lot of ways, this was a totally unique experience for me, and for a lot of people.`}
            points={[
              `I was used to monolithic companies being monoliths.`,
              `I was used to having engineering leads and project managers adopt tools because they were stamped by those companies.`,
              `I was used to not really having much of a voice or a say in how things worked.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={5}>This felt novel.</Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, in embracing a more open practice in the design of the language, the Reason team was also subject to *a lot* of discussion and argument about the best ways to do things.`}
            points={[
              `What was particularly interesting is that they were trying to reconcile the OCaml community, a fairly academic leaning one, with elements of the JavaScript community.`,
              `The syntax was undergoing fast, aggressive, breaking changes; in fact, we're actually on version 3 of the syntax already, and it's only been about 2.5 years since the initial prototypes of the language came out.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Meanwhile, other projects were sprouting up to accompany the language. The most notable of these was BuckleScript, developed by Hongbo Zhang at Bloomberg.`}
          />
        </Notes>
        <Layout>
          <RoundedImage
            src={BuckleScriptLogo}
            width="100%"
            style={{ objectFit: "cover", margin: "-4rem" }}
          />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`BuckleScript is a compiler for OCaml and Reason that produces highly optimized JavaScript. Because it uses OCaml's type system to inform the compilation step, it not only guarantees 100% percent type soundness, but it can also make optimizations to the output JavaScript that aren't possible in TypeScript.`}
          />
        </Notes>
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
      </Slide>
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
      <Slide>
        <Notes>
          <Note
            main={`When I first realized this, I was really blown away.`}
            points={[
              `I thought back to my team that had been doomed to "AnyScript" and pondered how different things could've been had we had this tooling then.`,
              `And I thought a lot about teams I was meeting now who were accepting TypeScript because it was the "safe" choice.`,
              `And I thought about how * I * wanted to write code.I missed the fluidity and dynamism of just writing JavaScript, but I wanted the soundness and safety that a real type system could give me.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`And so, I started talking to people about Reason.`}
            points={[
              `I was working for a client who had some interest in it. They were too worried about getting their team spun up in time to be productive and make a product that could make them money.`,
              `I tried getting Formidable to discuss Reason more internally, and to begin learning it. But I was met with resistance that, as long clients weren't using it, it wasn't really worth the investment.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`So I turned back to the community that had gotten me into programming in the first place – the open source community.`}
            points={[
              `As a self - taught programmer, I've learned most of what I know by reading and studying other people's code.Open source has been the single most important factor in my professional education, and it's why I turned to this community to continue my exploration of Reason.`,
              `As part of this process, I try to create resources in the process of my own learning that can help others.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={GitHubSocial} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, I quickly came to realize that there was a flip side to how the Reason community was embracing open source development of the language and the supporting ecosystem – consistent, up-to-date documentation and clear guidance on best practices was mostly absent.`}
            points={[
              `Beyond Discord and the official docs, there wasn't much out there. Folks recommended reading the OCaml documentation, but as someone without a deep theoretical background in computer science I quickly found it too cumbersome to be of much use.`
            ]}
          />
        </Notes>
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
        <Notes>
          <Note
            main={`Initially, much of my learning happened by trial and error.`}
            points={[
              `For example, I created a repo called reason-basics that went a bit beyond what the official docs showed. Most of what I uncovered in this process just involved using the guidance of the BuckleScript compiler to achieve the results I wanted.`,
              `What was pretty amazing was that this approach kind of "just worked". Once my code compiled, it almost always did what I expected.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={ReasonBasics} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Meanwhile, I saw a lot of my peers expressing frustration about their experiences with TypeScript. Even seasoned JavaScript developers, were hitting frustrations; Josh's tweet really sums up the feelings of the moment.`}
            points={[
              `Meanwhile, Reason's compiler guidance mixed the best elements of being thorough while also being concrete. It made coding with a strong type system approachable and friendly.`,
              `Around the time of my deeper personal exploration of Reason, some of the first really innovative open source began to come out in the community, and this afforded a lot of opportunities to contribute.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={TypeScriptBullshit} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`The first of these projects that I got really interested in was a library called wonka developed by my friend and colleague Phil Pluckthun.`}
          />
        </Notes>
        <Layout>
          <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
            <Code style={{ fontSize: "4rem" }}>wonka</Code>
            <Image src={Wonka} height={350} />
          </Flex.FlexHorizontalBetween>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`wonka is a lightweight, observable-like library that implements the Callbag spec, which is a bit different than the model used in traditional reactive programming like RxJS.`}
            points={[
              `I won't go too deep into the details of how it works, but you can think of it as a lighter-weight, faster version of Rx.`
            ]}
          />
        </Notes>
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
      <Slide>
        <Notes>
          <Note
            main={`What's so innovative about wonka, however, is that because of the way it's written and distributed, it can actually be used in a handful of different environments.`}
            points={[
              `Because it's written in Reason, it can be understood by the OCaml compiler and parsed into an OCaml AST. This allows it to compile down to native code or bytecode, just like any other OCaml code.`,
              `But Phil did a pretty clever thing and wrote it in such a way to maintain consistent behavior when run through the BuckleScript compiler and compiled to JS.`,
              `By publishing the compiled JS artifacts along with the Reason source, and by providing type definitions for TypeScript and Flow, wonka can be run in codebases using Reason, OCaml, JS, TS, and Flow.`
            ]}
          />
        </Notes>
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
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`I think this is extremely novel.`}
            points={[
              `We often talk about having cross-platform applications in the software community, but I think we spend less time thinking about cross-compilation and compatibility of library code.`,
              `It's an extremely powerful idea that, as library authors, as open source authors, we can write our code in a single source language and developers working across a variety of environments attempting to create a variety of user experiences can benefit from it.`,
              `I helped Phil a bit on this library, mostly writing tests and documentation, and it's been a wonderful library to learn from.`,
              `Because Reason and JavaScript share a fair amount of syntax overlap, using the API across both languages doesn't look too different. Let's take a look at a simple example.`
            ]}
          />
        </Notes>
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
        <Notes>
          <Note
            main={`This type of interop between languages is really powerful. We're not just compiling to JavaScript, we're creating an API in Reason that is intuitive, typesafe, and callable from the JavaScript side.`}
          />
        </Notes>
        <Layout>
          <Code style={{ fontSize: "3rem", marginBottom: 30 }}>
            reprocessing
          </Code>
          <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
            <RoundedImage
              src={PerlinNoise}
              height={300}
              style={{
                marginRight: 30
              }}
            />
            <RoundedImage src={Gravitron} height={300} />
          </Flex.FlexHorizontalBetween>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Around the same time that wonka was getting traction, Avery Morin and Ben San Souci were working on a project called Reprocessing, which is a port of the popular Processing language to Reason. This is one of my favorite projects to work with, especially because the source code is so approachable.`}
            points={[
              `It allows you to create sophisticated graphics and visualizations, exposing a draw loop that runs continuously as your application runs.`,
              `People have made some really cool visualizations with it – including things like Perlin noise visualizations and small physics engines for games.`
            ]}
          />
        </Notes>
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
    </Deck>
  );
};

export default Presentation;
