// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Text,
  Image,
  List,
  Appear,
  Slide as BaseSlide
} from "spectacle";

import Layout from "./components/layout";
import Slide from "./components/slide";
import Social from "./components/social";
import Formidable from "./components/formidable";
import OSS from "./components/oss";
import ListItem from "./components/listItem";
import Code from "./components/code";

import Topo from "./static/topography.svg";
import TopoTwo from "./static/topographytwo.svg";
import ReasonLogo from "./static/reason.png";
import ReactLogo from "./static/react.svg";
import ParkieDoo from "./static/ziegler_parker_portrait_3.jpg";
import Formidagathering from "./static/formidagathering.jpg";
import ReasonErrorHandling from "./static/reason_error_handling.png";
import FormidableLocales from "./static/formidable_locales.png";
import TypeScriptLogo from "./static/typescript_logo.png";
import StateOfJS2017 from "./static/state_of_js_2017.png";
import Thonkilicious from "./static/thonkilicious.gif";
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
import StrangeLoop from "./components/strangeloop";
import Profile from "./components/profile";

// Require CSS
require("normalize.css");

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
    <Deck theme={theme}>
      <Slide>
        <Layout style={{ justifyContent: "space-evenly" }}>
          <Heading size={4}>Towards an Open, Reason(ML)able Web</Heading>
          <StrangeLoop />
        </Layout>
      </Slide>
      <Slide>
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
          <OSS />
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Image src={FormidableLocales} style={{ borderRadius: 10 }} />
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
      {/* <Slide>
        <Layout>
          <Image
            src={Formidagathering}
            height={600}
            style={{ borderRadius: 10 }}
          />
        </Layout>
      </Slide> */}
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
          <Image src={StateOfJS2017} style={{ borderRadius: 10 }} />
        </Layout>
      </Slide>
      <BaseSlide bgImage={Topo}>
        <Layout>
          <Image src={Thonkilicious} height={75} />
          <List>
            <ListItem>Type inference was terrible.</ListItem>
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
          </List>
        </Layout>
      </BaseSlide>
      <Slide>
        <Layout>
          <Heading size={4}>
            Nevertheless, I had seen the light.{" "}
            <span role="img" aria-labelledby="Light">
              💡
            </span>
          </Heading>
        </Layout>
      </Slide>
      <Slide>
        <Layout>
          <Image
            src={ReasonErrorHandling}
            style={{ borderRadius: 10, height: "75%" }}
          />
        </Layout>
      </Slide>
      {/* <Slide bgImage={Topo}>
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
          Image src="https://media.giphy.com/media/BMtGb8JSk2Ln1cnPMA/giphy.gif"
          style={{ borderRadius: "1rem" }}
          />
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
      </Slide>{" "}
      */}
    </Deck>
  );
};

export default Presentation;
