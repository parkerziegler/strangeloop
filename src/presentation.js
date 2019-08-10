// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text as BaseText,
  Image,
  List as BaseList,
  ListItem as BaseListItem,
  Appear,
  Code
} from "spectacle";

import Layout from "./components/layout";

import Twitter from "./static/Twitter_Logo_Blue.svg";
import GitHub from "./static/GitHub-Mark-120px-plus.png";
import Topo from "./static/topography.svg";
import TopoTwo from "./static/topographytwo.svg";
import ReasonLogo from "./static/reason.png";
import ReactLogo from "./static/react.svg";
import ParkieDoo from "./static/ziegler_parker_portrait_3.jpg";
import FormidableLogo from "./static/formidable_logo.svg";
import FormidableText from "./static/formidable_text.svg";
import UrqlLogo from "./static/urql_logo.png";
import SpectacleLogo from "./static/spectacle_logo.svg";
import VictoryLogo from "./static/victory_logo.png";
import PluggingReason from "./static/plugging_reason.png";
import OCamlLogo from "./static/ocaml.png";
import BuckleScriptLogo from "./static/bucklescript.png";
import BuckleScriptPerf from "./static/bucklescript_perf.png";
import ReasonRepl from "./static/reason-repl.png";
import TypeScriptInference from "./static/typescript_inference.svg";
import ReasonInference from "./static/reason_inference.svg";
import ReOCamlWhat from "./static/reason_ocaml_what.png";
import ReOCamlBS from "./static/re_ocaml_bs.png";
import ReasonReact from "./static/reasonreact.png";
import ReasonExample from "./static/reason_example.svg";
import TypeScriptExample from "./static/typescript_example.svg";
import ReasonPerf from "./static/reason_compile_time.png";
import ReasonHooksExample from "./static/reason_hooks_example.svg";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Roboto Mono",
    secondary: "monospace"
  }
);

const List = styled(BaseList)`
  width: 80%;
`;

const ListItem = styled(BaseListItem)`
  font-size: 3rem !important;
  margin: 1rem;
`;

const Text = styled(BaseText)`
  text-align: left;
`;

const OSSGrid = styled.div`
  display: grid;
  grid-template-areas:
    "spectacle victory"
    "urql urql";
  grid-gap: 2.5rem 5rem;

  .spectacle {
    grid-area: spectacle;
  }

  .urql {
    grid-area: urql;
  }

  .victory {
    grid-area: victory;
  }
`;

const InferenceGrid = styled.div`
  display: grid;
  grid-template-areas:
    "typescript reason"
    "point point";
  grid-gap: 1rem;

  img {
    height: 500px;
  }

  .typescript {
    grid-area: typescript;
  }

  .reason {
    grid-area: reason;
  }

  .point {
    grid-area: point;
  }
`;

const HooksGrid = styled.div`
  display: grid;
  grid-template-areas:
    "nonArity arity"
    "state effect"
    "reducer callback"
    "_ memo"
    "_ layoutEffect"
    "_ imperativeHandle";
  grid-gap: 1rem;

  .nonArity {
    grid-area: nonArity;
  }

  .arity {
    grid-area: arity;
  }

  .state {
    grid-area: state;
  }

  .reducer {
    grid-area: reducer;
  }

  .effect {
    grid-area: effect;
  }

  .callback {
    grid-area: callback;
  }

  .memo {
    grid-area: memo;
  }

  .layoutEffect {
    grid-area: layoutEffect;
  }

  .imperativeHandle {
    grid-area: imperativeHandle;
  }
`;

const Presentation = () => {
  return (
    <Deck theme={theme}>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Heading size={2}>Reason(ML)able React</Heading>
          <div style={{ display: "flex", alignItems: "center", marginTop: 40 }}>
            <Image
              height={100}
              width={100}
              src={ReasonLogo}
              style={{ margin: 10 }}
            />
            <Text>+</Text>
            <Image
              height={100}
              width={100}
              src={ReactLogo}
              style={{ margin: 10 }}
            />
            <Text>
              <span role="img" aria-label="Reason + React = Love">
                = 💖
              </span>
            </Text>
          </div>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d" direction="column">
          <Heading size={4}>Before I begin...</Heading>
          <Image
            src="https://media.giphy.com/media/lffThFKTbC0hpf4KfP/giphy.gif"
            style={{ borderRadius: "1rem", margin: "3rem", height: 400 }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <div
            style={{
              height: 300,
              width: 300,
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: 40
            }}
          >
            <Image
              src={ParkieDoo}
              style={{
                height: "100%",
                width: "auto",
                display: "block",
                margin: 0,
                objectFit: "cover"
              }}
            />
          </div>
          <Heading size={4}>Software Engineer at Formidable</Heading>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              marginTop: 50
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={Twitter} height={50} width={50} />
              <Text style={{ fontSize: "2rem" }}>@parker_ziegler</Text>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={GitHub}
                height={40}
                width={40}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: "2rem" }}>parkerziegler</Text>
            </div>
          </div>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d">
          <Image
            src={FormidableLogo}
            height={300}
            style={{ margin: "0.5rem" }}
          />
          <Image
            src={FormidableText}
            height={150}
            style={{ margin: "0.5rem" }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d">
          <Heading size={4}>Open Source</Heading>
          <OSSGrid>
            <Appear>
              <Image src={SpectacleLogo} className="spectacle" height={350} />
            </Appear>
            <Appear>
              <Image src={VictoryLogo} className="victory" height={350} />
            </Appear>
            <Appear>
              <Image src={UrqlLogo} className="urql" height={350} />
            </Appear>
          </OSSGrid>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <div
            style={{
              height: 300,
              width: 300,
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: 20
            }}
          >
            <Image
              src={ParkieDoo}
              style={{
                height: "100%",
                width: "auto",
                display: "block",
                margin: 0,
                objectFit: "cover"
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={FormidableLogo} height={50} />
            <Heading size={6} style={{ marginLeft: 10 }}>
              Open Source!
            </Heading>
          </div>
          <Appear>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={ReasonLogo} height={50} />
              <Heading size={6} style={{ marginLeft: 10 }}>
                Really, really into ReasonML
              </Heading>
            </div>
          </Appear>
          <Appear>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={PluggingReason} width="80%" />
            </div>
          </Appear>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d" direction="column">
          <Heading size={4} style={{ width: "80%", marginBottom: "3rem" }}>
            Using a truly sound type system can fundamentally change how you
            write code for the better.
          </Heading>
          <Appear>
            <Heading size={4} style={{ width: "80%" }}>
              You don't need to write JavaScript (or TypeScript) to write React.
            </Heading>
          </Appear>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Heading size={4}>
            <span role="img" aria-label="Cool">
              🆒{" "}
            </span>
            so what is Reason?
          </Heading>
          <List>
            <Appear>
              <ListItem>What does it have to do with React?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Why should I care?</ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Image src={ReasonLogo} height={200} />
          <Text style={{ margin: 20, maxWidth: "60%" }}>
            ReasonML is a <strong>syntax</strong> for OCaml that{" "}
            <strong>looks</strong> like JavaScript.
          </Text>
          <Appear>
            <Text style={{ margin: 20, maxWidth: "60%" }}>
              Oh, and it was authored by Jordan Walke, creator of React.
            </Text>
          </Appear>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Image src={OCamlLogo} height={100} />
          <Text style={{ margin: 30, maxWidth: "60%" }}>
            OCaml is a functional, statically typed language, known for{" "}
            <strong>systems programming</strong> and its powerful{" "}
            <strong>type inference</strong>.
          </Text>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d">
          <List style={{ padding: 30 }}>
            <ListItem>
              Types inferred and validated at <strong>compile</strong> time.
            </ListItem>
            <Appear>
              <ListItem>Doesn't TypeScript already do that?</ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d" direction="column">
          <Heading size={4} style={{ marginBottom: "2rem" }}>
            <em>Kind of</em>
          </Heading>
          {/* <Image
            src="https://media.giphy.com/media/BMtGb8JSk2Ln1cnPMA/giphy.gif"
            style={{ borderRadius: "1rem" }}
          /> */}
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <InferenceGrid>
            <Image
              src={TypeScriptInference}
              className="typescript"
              style={{ borderRadius: "1rem" }}
            />
            <Appear>
              <Image
                src={ReasonInference}
                className="reason"
                style={{ borderRadius: "1rem" }}
              />
            </Appear>
            <Appear>
              <Heading
                size={5}
                style={{ margin: 40, textDecoration: "underline" }}
                className="point"
              >
                <em>1 expression, 1 type</em>
              </Heading>
            </Appear>
          </InferenceGrid>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d">
          <List style={{ padding: 30 }}>
            <ListItem>
              Types inferred and validated at <strong>compile</strong> time.
            </ListItem>
            <Appear>
              <ListItem>Native performance close to C and C++.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Support for <strong>side effects</strong> and{" "}
                <strong>mutation</strong>.
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Image src={ReOCamlWhat} />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout style={{ padding: 0 }} hex="#ff9c0d">
          <Image
            src={BuckleScriptLogo}
            height="100%"
            width="100%"
            style={{ objectFit: "cover " }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout hex="#ff9c0d">
          <Image src={BuckleScriptPerf} />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout style={{ padding: 0 }} hex="#ff9c0d">
          <Image
            src={ReasonRepl}
            style={{ borderRadius: "1rem", width: "90%" }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <Image src={ReOCamlBS} />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Heading size={3}>So what's this got to do with React?</Heading>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Image
            src={ReasonReact}
            width="90%"
            style={{ borderRadius: "1rem" }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Image src={ReasonExample} style={{ borderRadius: "1rem" }} />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Image src={TypeScriptExample} style={{ borderRadius: "1rem" }} />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb" direction="column">
          <Heading size={4}>Benefits</Heading>
          <List style={{ width: "80%" }}>
            <Appear>
              <ListItem>Terser syntax.</ListItem>
            </Appear>
            <Appear>
              <ListItem>100% type safety without writing types.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Millisecond-level feedback.</ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Image
            src={ReasonPerf}
            width="75%"
            style={{ borderRadius: "1rem" }}
          />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Heading size={3}>
            So what about hooks?{" "}
            <span aria-label="Hooks" role="img">
              🎣
            </span>
          </Heading>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Heading size={3}>
            Heck yes it does{" "}
            <span aria-label="Heck Yes" role="img">
              🥳
            </span>
          </Heading>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb" direction="column">
          <Heading size={5} style={{ marginBottom: "3rem" }}>
            Support for all hooks with defined <em>arities</em> for dependency
            arrays.
          </Heading>
          <HooksGrid>
            <span className="nonArity">
              <b>No dependency array</b>
            </span>
            <span className="arity">
              <b>Dependency array</b>
            </span>
            <code className="state">useState</code>
            <code className="reducer">useReducer</code>
            <code className="effect">useEffect(n)</code>
            <code className="callback">useCallback(n)</code>
            <code className="memo">useMemo(n)</code>
            <code className="layoutEffect">useLayoutEffect(n)</code>
            <code className="imperativeHandle">useImperativeHandle(n)</code>
          </HooksGrid>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb">
          <Image src={ReasonHooksExample} style={{ borderRadius: "1rem" }} />
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb" direction="column">
          <Heading size={4} style={{ width: "80%" }}>
            This looks pretty much like Hooks in JS!
          </Heading>
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb" direction="column">
          <Heading size={4} style={{ marginBottom: "2rem" }}>
            Alright, let's wrap it up.
          </Heading>
          {/* <Image
            src="https://media.giphy.com/media/1XdfVRTyn5d31Q1lG0/giphy.gif"
            style={{ borderRadius: "1rem" }}
          /> */}
        </Layout>
      </Slide>
      <Slide bgImage={TopoTwo}>
        <Layout hex="#61dafb" direction="column">
          <List>
            <ListItem>Give Reason and ReasonReact A Try!</ListItem>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "5rem"
              }}
            >
              <span>
                <code>reasonml.github.io</code>
              </span>
              <span>
                <code>reasonml.github.io/reason-react</code>
              </span>
            </div>
            <Appear>
              <ListItem>Sound Type Systems Are Good For You</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                It's 2019 – Write Your React in Reason You Cowards!
              </ListItem>
            </Appear>
          </List>
        </Layout>
      </Slide>
      <Slide bgImage={Topo}>
        <Layout direction="column" hex="#ff9c0d">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              role="img"
              aria-label="Thanks"
              style={{ fontSize: "3rem", marginRight: "3rem" }}
            >
              💖
            </span>
            <Heading size={4}>Thank You</Heading>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              marginTop: 50
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={Twitter} height={50} width={50} />
              <Text style={{ fontSize: "2rem" }}>@parker_ziegler</Text>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={GitHub}
                height={40}
                width={40}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: "2rem" }}>parkerziegler</Text>
            </div>
          </div>
        </Layout>
      </Slide>
    </Deck>
  );
};

export default Presentation;
