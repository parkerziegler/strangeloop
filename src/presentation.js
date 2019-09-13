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
import RoundedImage from "./components/rounded_image";
import Annotation from "./components/annotation";
import HighlightedText from "./components/highlighted_text";
import BlockQuote from "./components/blockquote";
import Note from "./components/notes";
import Tweet from "./components/tweet";

import ReasonLogo from "./static/reason.png";
import ReasonLogoLong from "./static/reason_logo_long.svg";
import ParkieDoo from "./static/ziegler_parker_portrait_3.jpg";
import ReasonErrorHandling from "./static/reason_error_handling.png";
import FormidableLocales from "./static/formidable_locales.png";
import FormidableOSS from "./static/formidable_oss.png";
import TypeScriptLogo from "./static/typescript_logo.png";
import StateOfJS2017 from "./static/state_of_js_2017.png";
import Thonkilicious from "./static/thonkilicious.gif";
import WASMLogo from "./static/wasm_logo.png";
import ElmLogo from "./static/elm_logo.png";
import SvelteLogo from "./static/svelte_logo.png";
import ReasonDiscord from "./static/reason_discord.png";
import JavaScriptLogo from "./static/javascript_logo.png";
import OCamlLogo from "./static/ocaml_logo.jpeg";
import OCamlLogoLong from "./static/ocaml.png";
import FlowLogo from "./static/flow_logo.png";
import ReactLogo from "./static/react_logo.svg";
import ReasonOCamlConnection from "./static/reason_ocaml_connection.svg";
import GettingHelp from "./static/getting_help.png";
import BuckleScriptLogo from "./static/bucklescript.png";
import BuckleScriptLogoSmall from "./static/bucklescript_logo_small.svg";
import GitHubSocial from "./static/github_social.jpg";
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
    <Deck theme={theme} transition={["slide"]} transitionDuration={500}>
      <Slide>
        <Notes>
          <Note
            main={`Good afternoon folks, thanks for sticking around today. What an
          awesome day of talks it's been – I'm so energized by this community
          and the knowledge that's being shared here. I do want to take a quick moment
          to thank Alex and the whole Strangeloop team for organizing this conference.
          It's a ton of work and we all owe them gratitude for making it happen.
          So the title of my talk this afternoon is "Towards an Open, Reason(ML)able Web."
          The idea for this talk comes out of two of my passions – making the web more
          accessible to new developers, and a fairly new programming language
          called ReasonML.`}
          />
        </Notes>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Heading size={4}>Towards an Open, Reason(ML)able Web</Heading>
          <StrangeLoop />
          <a
            style={{ fontSize: "1.5rem", marginTop: 10 }}
            href="https://parkerziegler-strangeloop.netlify.com"
          >
            parkerziegler-strangeloop.netlify.com
          </a>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now before we begin, let's be honest with one another.`}
            points={[`It's 3:30pm.`]}
          />
        </Notes>
        <Layout>
          <Heading size={5}>Let's Be Honest</Heading>
          <Appear>
            <Text>It's 3:30pm.</Text>
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
              `Well, I thought about this and I decided:`
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
            main={`For those of you who don't know Formidable, we're a pretty unique little JavaScript
          consultancy. Our model involves embedding with teams across the world to help
          them level up, build products, and become better engineers and kinder people in the process.`}
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
          Phoenix.`}
            points={[
              `In addition to our consulting practice, we also have a heavy focus
          on open source and helping to shape the future of the web.`
            ]}
          />
        </Notes>
        <Layout>
          <RoundedImage src={FormidableLocales} />
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`You may have heard of some of our open source projects like:`}
            points={[
              `Spectacle, which a presentation library for React, and actually what
              this very talk uses.`,
              `Victory, a data visualization library for React to allow you to do all sorts of cool visualizations and charting.`,
              `We also recently launched version 1 of urql, which is a GraphQL client for React similar to Apollo client.`,
              `And there's runpkg, which is an online explorer for packages on the npm registry.`
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
              `And, how can we support other developers along the way?`
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
                How can we support other developers along the way?
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
          changes we were starting to see in the client projects we'd been working on and
          the open source libraries we'd been contributing to, and we were starting to see two
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
            main={`The first was that static typing, and specifically TypeScript, was eating the web.`}
            points={[
              `Teams were latching onto this idea that having a compile time type
              checking step could help eliminate bugs from their web
              applications.`,
              `Now of course, this wasn't a new idea in programming writ large but it was a new idea for the web.`,
              `JavaScript type checkers like TypeScript and Flow had also matured, and their type algorithms were considerably
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
          this out. Both TypeScript and Flow had grown majorly in adoption.`}
            points={[
              `There was also a lot of interest in learning one of the JavaScript static type checkers among
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
              ` We had found that the type inference was terrible. Our data structures were almost always
              inferred as being of type any. Our team wasn't disciplined about annotating our types
              either, so we got little to no benefit out of it initially.`,
              `Type definitions for third party libraries were distributed via a tool called typings,
              which was a precursor to @types and the DefinitelyTyped repo. The definitions were often wrong,
              which forced you to litter yourncodebase with @ts-ignore.`,
              `The result was that we ended up with a codebase that was using what I like to call
              "anyscript", an illusion that just because your files have a .ts extension you're getting
              some kind of magical type safety.`,
              `Lastly compilation times were incredibly slow. TypeScript would run
              full typechecking on your app on every rebuild, which would result
              in 10-15 seconds to hot reload your app.`
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
            main={`The compiler's error messages are also often really confusing.
            I think this tweet from Josh Comeau really sums up the frustrations folks
            feel with TypeScript at times.`}
          />
        </Notes>
        <Layout>
          <Tweet src={TypeScriptBullshit} />
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
              `Complex logic spread across multiple files now became linked, and
              my ability to read and review code improved as a result.`,
              `I came to the realization that using a type system can fundamentally
              change how you write code for the better.`
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
            main={`Now, the second trend that came out of this meeting was a broader
            discussion about compilation to JavaScript. All of us at Formidable were curious
            about these new languages, frameworks, and web standards coming out. It seemed like all
            the cool kids were taking the stance that you shouldn't write your JS by hand anymore.
            You should write your source code in a different language and compile it to JS.`}
          />
        </Notes>
        <Layout>
          <Heading size={5} style={{ textAlign: "left" }}>
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
            main={`The WebAssembly standard was starting to crystallize and people
            were getting excited to play with it. Elm was getting hot amidst the
            move to static typing. The first prototypes of Svelte had come out.`}
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
            main={`It felt like hype trains were leaving the station in every direction,
            and all of us at Formidable were excited to see which technologies would stick.`}
            points={[
              `In particular, we were looking for a technology that had potential for
              larger open source development and an ethos around community involvement.`
            ]}
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
            main={`One of the last technologies we discussed that day was a little known language
            called ReasonML, whose promise was a little different from everything else.`}
            points={[
              `Reason promised a supercharged type system, with 100% sound type inference.`,
              `It also highlighted blazing fast compilation times, with full application
              rebuilds taking only ms. For someone coming from TypeScript projects that were
              regularly taking seconds to recompile, this was particularly alluring.`,
              `It also advertised that it could target both web and native environments from
              the same source code.`
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
            main={`What probably surprised me the most, however, was that
            Reason wasn't necessarily a new technology.`}
            points={[
              `In fact, after a bit of light research, I found out that, at it's most basic,
            Reason was just a syntax for a language called OCaml, which had been around since 1996.`,
              `I read that OCaml allowed for syntactic extensions to the language,
              and the Reason team had taken advantage of this to create a syntax
              that looked like JavaScript.`
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
                that looks like{" "}
                <Image
                  src={JavaScriptLogo}
                  height={50}
                  style={{ display: "inline-block", margin: 0 }}
                />
                .
              </Text>
            </Flex.FlexHorizontal>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, for those of you who haven't encountered OCaml before, I'll give you
            a brief introduction.`}
            points={[
              `OCaml is a functional, statically typed language.`,
              `Traditionally it's been used in academic settings. It's renowned for its
              practicality and performance in systems programming and has perhaps the most
              powerful type inference of any modern language.`,
              `And it belongs to the family of meta languages, or MLs, that began to emerge
              in the 1970s.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={OCamlLogoLong} height={100} />
          <List>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                A functional, statically typed language.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Known for <HighlightedText>systems programming</HighlightedText>{" "}
                and powerful <HighlightedText>type inference</HighlightedText>.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Belongs to the family of{" "}
                <HighlightedText>meta languages </HighlightedText> (ML).
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, OCaml has a few features that make it unique from other languages
              in the ML family, and other functional languages more broadly.
              `}
            points={[
              `The first is support for mutability and object orientation. While all
              data structures are immutable by default, OCaml provides you with
              mechanisms to mark certain structures as mutable and alter them as needed
              at runtime – safely, of course. There are also techniques for working with
              side effects and non-pure functions.`,
              `The second is that OCaml allows for syntactic extensions to the
              language, through a feature called PPX. This actually allows developers
              to define rules for how specific syntax gets compiled into an OCaml AST.`,
              `To give you a better sense of how all these pieces fit together, let's look
              at a really simple diagram.`
            ]}
          />
        </Notes>
        <Layout>
          <Image src={OCamlLogoLong} height={100} />
          <List>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Support for <HighlightedText>mutability</HighlightedText> and{" "}
                <HighlightedText>side effects</HighlightedText>.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                <HighlightedText>Syntactic extensions</HighlightedText> to the
                language via <Code>ppx</Code>.
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`So this is taken directly from Dr. Axel Rauschmayer's blog.
            His writing on Reason is sort of the seminal first text on the language
             and many people encounter this diagram early on.`}
            points={[
              `You can see that Reason branches off at an early stage from OCaml
              in the compilation process. It's just a syntax, and it gets parsed into
              an OCaml AST.`,
              `Once we have the AST in place, different backends (compilers) can
              take effect and compile your code to your target of choice – bytecode,
              native code, or JavaScript.`
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
            main={`Reading this, I was kind of shocked. It was like,
            what's new is actually old.`}
            points={[
              `And this actually made me quite excited about Reason –
              in investing in something based off of time-tested ideas
              in OCaml, I felt like I was skipping over the worst parts
              of the hype train ride, namely the leap between what's cool
              and flashy, and what can actually use in production.`
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
            main={`Moreover, the more research I did, the more I found that
          OCaml, and the other MLs, were already supporting a lot of the parts
          of the web ecosystem that I loved and used everyday.`}
            points={[
              `The JavaScript static type checker Flow is written in Ocaml.`,
              `The first prototypes of React were written in StandardML.
              Coincidentally, the original author of React, Jordan Walke is
              actually the original author of ReasonML as well.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={6}>
            OCaml (and other MLs) already supported the web ecosystem.
          </Heading>
          <Flex.FlexHorizontalEvenly>
            <Appear>
              <Flex.FlexVertical>
                <Image src={FlowLogo} height={150} />
                <Text style={{ fontSize: "2rem" }}>
                  Flow is written in OCaml.
                </Text>
              </Flex.FlexVertical>
            </Appear>
            <Appear>
              <Flex.FlexVertical>
                <Image src={ReactLogo} height={150} />
                <Text style={{ fontSize: "2rem" }}>
                  Early React prototypes were written in StandardML.
                </Text>
              </Flex.FlexVertical>
            </Appear>
          </Flex.FlexHorizontalEvenly>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`And so I felt excited to start playing with the language.
            I went home that night, went through the hello world tutorials,
            and started trying to make things. I got really excited by the quality
            of the compiler errors, so much so that I actually tweeted about it.`}
          />
        </Notes>
        <Layout>
          <Tweet src={ReasonErrorHandling} />
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
            main={`I asked questions of community members and got help, often from core
            contributors to the language, or even the original authors themselves.`}
            points={[
              `What really struck me about this experience is that the language was
              being actively engineered in the open.`,
              `In generating interest around Reason, core team members were also
              seeking feedback from the community around how to make the syntax friendly,
              how to translate the best of OCaml's type system into JavaScript, and how
              to empower new users.`
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
            main={`In a lot of ways, this was a totally unique experience for me,
            and for a lot of people.`}
            points={[
              `I was used to programming languages being fixed, immutable things that I
              couldn't have a say in.`,
              `Certainly coming from the JavaScript community where TC-39 and the browsers
              control the course of how the language evolves, it was amazing to see everyday
              language users having their voices and ideas heard.`,
              `It was also fascinating to see two two programming language communities –
              the OCaml community and the JavaScript community – begin to come together
              around Reason. I think this type of cross-pollination is really significant
              in programming – we have a lot to learn from one another's languages, and newer
              languages should attempt to combine the best of what we have.`
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
            main={`Now, embracing a more open practice in the design of a language also comes
            with a lot of challenges. The Reason team was also subject to a lot of discussion
            and argument about the best ways to bridge the OCaml – JavaScript syntax divide.`}
            points={[
              `This leads to a lot of ambiguity around what ideas qualify as design proposals
              and what is just everyday bikeshedding.`,
              `The result is that the syntax for ReasonML has been undergoing fast, aggressive,
              breaking changes; in fact, we're actually on version 3 of the syntax already,
              and it's only been about 2.5 years since the initial prototypes of the language 
              were released.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            <HighlightedText>Design</HighlightedText>
          </Heading>
          <Appear>
            <Text>vs.</Text>
          </Appear>
          <Appear>
            <Heading size={4}>
              <HighlightedText>Bikeshedding</HighlightedText>
            </Heading>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Meanwhile, other projects were sprouting up to accompany the language.
            The most notable of these was BuckleScript, developed by Hongbo Zhang at Bloomberg.`}
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
            main={`BuckleScript is a compiler for OCaml and Reason that produces
            highly optimized JavaScript.`}
            points={[
              `Because it uses OCaml's type system to inform the compilation step,
              it can make optimizations to the output JavaScript that aren't possible
              in regular JavaScript typecheckers like TypeScript or Flow.`,
              `It's also unique in that it produces human readable JavaScript –
              you can actually inspect BuckleScript output and more or less understand
              what's going on.`
            ]}
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
                Compile time optimizations.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: "2rem" }}>
                Produces human readable JavaScript.
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`What's really incredible is that BuckleScript can provide
            guaranteed type soundness of your Reason code in milliseconds.`}
            points={[
              `Inferred types are actually mathematically proven to be correct.`,
              `Currently, a clean build of 1250 files would compile to JavaScript
              in 4.2 seconds. And compilation times speed up successively after that
              because the type checker doesn't need to run again over already verified
              code.`,
              `We can see the benefits of this through an extremely simple example by
              comparing some basic TypeScript code to its Reason equivalent.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            <HighlightedText>Guaranteed type soundness</HighlightedText>
          </Heading>
          <Text> in just milliseconds.</Text>
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
              `Reason felt like getting the fluidity and dynamism of writing JavaScript,
              with the soundness and safety that OCaml's type system provides.`
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
            main={`Moreover, there were a lot of opportunities to get involved with
            the open source community around Reason.`}
            points={[
              `One of the most significant undertakings in this field was the proliferation
              of BuckleScript bindings for popular open source projects written in JavaScript.
              The bindings are what allow Reason to interop safely with untyped JavaScript APIs.`,
              `A lot of possibilities were unlocked as well by considering how to write libraries
              that could be beneficial for both the OCaml and JavaScript communities.`
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
            main={`One of the first projects that really pushed this idea was
            a library called wonka developed by my friend and colleague Phil
            Pluckthun.`}
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
            main={`wonka is a lightweight, observable-like library that implements
            the Callbag spec, which is a bit different than the model used in
            traditional reactive programming libraries like RxJS and the broader Rx family.`}
            points={[
              `I won't go too deep into the details of how wonka works, but you
              can think of it as a lighter-weight, faster alternative to Rx.`
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
            main={`What's really innovative about wonka is the way it's written and distributed.`}
            points={[
              `Because it's written in Reason, it can be parsed into an OCaml AST. This allows it
              to compile down to native code or bytecode.`,
              `But Phil did a pretty clever thing and wrote it in such a way to maintain consistent
              behavior when run through the BuckleScript compiler and compiled to JS.`,
              `By publishing the compiled JS artifacts along with the Reason source,
              and by providing type definitions for TypeScript and Flow, wonka can be run
              in codebases using Reason, OCaml, JS, TS, and Flow all from a single source!`
            ]}
          />
        </Notes>
        <Layout>
          <Flex.FlexVerticalEvenly style={{ height: "100%" }}>
            <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
              <Flex.FlexVertical>
                <Text>Native</Text>
                <Flex.FlexHorizontalEvenly>
                  <Appear>
                    <Image
                      src={ReasonLogo}
                      height={100}
                      style={{ margin: 10 }}
                    />
                  </Appear>
                  <Appear>
                    <Image
                      src={OCamlLogo}
                      height={100}
                      style={{ margin: 10 }}
                    />
                  </Appear>
                </Flex.FlexHorizontalEvenly>
              </Flex.FlexVertical>
              <Flex.FlexVertical>
                <Text>Web</Text>
                <Flex.FlexHorizontalEvenly>
                  <Appear>
                    <Image
                      src={JavaScriptLogo}
                      height={100}
                      style={{ margin: 10 }}
                    />
                  </Appear>
                  <Appear>
                    <Image
                      src={TypeScriptLogo}
                      height={100}
                      style={{ margin: 10 }}
                    />
                  </Appear>
                  <Appear>
                    <Image src={FlowLogo} height={100} style={{ margin: 10 }} />
                  </Appear>
                </Flex.FlexHorizontalEvenly>
              </Flex.FlexVertical>
            </Flex.FlexHorizontalBetween>
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
              `We often talk about having cross-platform applications in the software
              community, but I think we spend less time thinking about cross-compilation
              and compatibility of library code.`,
              `It's an extremely powerful idea that, as open source authors, we can write
              our code in a single source language and developers working across a variety
              of environments can get an intuitive, ergonomic API to work with.`,
              `I helped Phil a bit on this library, mostly writing tests and documentation,
              and it's been a wonderful library to learn from.`,
              `Because Reason and JavaScript share a fair amount of syntax overlap,
              using the API across both languages doesn't look too different.
              Let's take a look at a simple example.`
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
          { loc: [3, 4], title: "Accumulate with scan operator" },
          { loc: [4, 5], title: "Delay by 100ms" },
          { loc: [5, 6], title: "Print 3 to console" },
          { loc: [3, 4], title: "Accumulate with scan operator" },
          { loc: [4, 5], title: "Delay by 100ms" },
          { loc: [5, 6], title: "Print 6 to console" },
          { loc: [7, 8], title: "Until it completes" }
        ]}
      />
      <CodeSlide
        code={WonkaTypescript}
        lang="js"
        ranges={[
          { loc: [0, 7], title: "Import dependencies" },
          { loc: [8, 9], title: "Use the pipe operator" },
          { loc: [9, 10], title: "Create a source" },
          { loc: [10, 11], title: "Accumulate with scan operator" },
          { loc: [11, 12], title: "Delay by 100ms" },
          { loc: [12, 13], title: "Print 1 to console" },
          { loc: [10, 11], title: "Accumulate with scan operator" },
          { loc: [11, 12], title: "Delay by 100ms" },
          { loc: [12, 13], title: "Print 3 to console" },
          { loc: [10, 11], title: "Accumulate with scan operator" },
          { loc: [11, 12], title: "Delay by 100ms" },
          { loc: [12, 13], title: "Print 6 to console" },
          { loc: [15, 16], title: "Until it completes" }
        ]}
      />
      <Slide>
        <Notes>
          <Note
            main={`Around the same time that wonka was getting traction
             Avery Morin and Ben San Souci were working on a project called
             Reprocessing, which is a port of the popular Processing language
             to Reason. This is one of my favorite projects to work with,
             especially because the source code is so approachable.`}
            points={[
              `Reprocessing allows you to create sophisticated graphics and visualizations,
              exposing a draw loop that runs continuously as your application runs.`,
              `People have made some really cool things with it, like Perlin noise
              visualizations and small physics engines for games.`
            ]}
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
            main={`What's cool about reprocessing is that it really highlights
            the ability for Reason code to run in web and native environments,
            specifically targeting WebGL and OpenGL.`}
            points={[
              `It's actually pretty clever how they do this. The backing library for
              reprocessing, reasongl, binds both the WebGL and OpenGL APIs – using BuckleScript
              to interop with the web and OCaml's C interop to bind to OpenGL.`,
              `Then, all you need to do is tell reprocessing which backend you
              want to use to compile your code!`,
              `This means you can have predictable Reason code that can run
              identically on both web and native.`
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
        <Notes>
          <Note
            main={`Here's a small demo I made, the classic bouncing ball a lot
          of folks make when they start with Processing.`}
          />
        </Notes>
        <RoundedImage src={ReprocessingDemo} />
      </BaseSlide>
      <Slide>
        <Notes>
          <Note
            main={`Awesome, so the open source community around Reason is active
          and growing, and there are a lot of cool things happening in the language space.
          But I bet you're all still wondering – if Reason is so great, why aren't we
          rewriting the web, or our native apps, in Reason yet.`}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            So why aren't we rewriting the web (or native apps) in Reason?
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`And I think there are a few ways to think about this question.`}
            points={[
              `We're still in the early adopters stage of this language.
            The people trying the language and adopting it are people who are already
            inclined towards learning new technologies – I'm guessing that's a lot
            of us in this room.`,
              `However, Reason isn't going to be right for every single team or every single
            developer. In my experience a disciplined set of JavaScript developers are
            much more inclined towards using TypeScript directly, despite its shortcomings,
            than learning what they perceive as an entirely new language.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            We're still in the <HighlightedText>early adopters</HighlightedText>{" "}
            stage.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`I also think a language is successful when its community and documentation are
            inclusive, welcoming, and thoughtful, even if the language itself leaves something
            to be desired.`}
            points={[
              `While JavaScript has many shortcomings, it has one of the best language communities
              I've ever been a part of. There's just so much out there in terms of documentation
              and learning resources, and there's been a lot of focus and effort directed into
              making the language accessible to newcomers.`,
              `Reason is still lacking considerably in the documentation realm. There aren't yet
              enough centralized resources and what you end up finding are a bunch of "Getting Started
              with ReasonML" guides.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            A language is as good as its community...and its{" "}
            <HighlightedText>documentation</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Reason is also trying to do something ambitious – bridge a divide.`}
            points={[
              `The language is bringing together the JavaScript and OCaml communities,
              two language communities that up until this point haven't had much interaction
              with one another. And now we're trying to build a new language together for
              everyone's benefit. It's natural for that to take time.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={4}>
            Reason is <HighlightedText>bridging a divide</HighlightedText>.
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Notes>
          <Note
            main={`Now, if there's one thing I want you to take away from this talk, it's
          not that Reason is the be all, end all answer to how the web will change.`}
            points={[
              `Rather, I think the experiment of Reason sheds light on what we should
          value when thinking about how the web will change.`,
              `And this can involve taking
          technical inspiration from other languages that have come before – immutability
          by default, static typing and type inference, heavy compiler optimization.`,
              `But what feels more significant is starting to think about our programming languages
          and communities as living, breathing organisms that are best nurtured when developed
          collaboratively, in the open, together.`
            ]}
          />
        </Notes>
        <Layout>
          <Heading size={6} style={{ marginBottom: 20 }}>
            What should we value when thinking about how the web will change?
          </Heading>
          <Appear>
            <Heading size={6}>
              How do we start seeing our programming communities as living,
              breathing organisms?
            </Heading>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Profile src={ParkieDoo} />
          <Heading size={6}>Software Engineer at Formidable</Heading>
          <Social />
        </Layout>
      </Slide>
    </Deck>
  );
};

export default Presentation;
