import React from "react";



// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
// import Graph from './components/Graph.jsx';
import StateSync from './components/StateSync.jsx';
import gameTree from './gameTree';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  logo: require('../assets/monocle_logo.svg'),
  textLogo: require('../assets/monocle_type_logo.svg'),
}

const theme = createTheme({
  primary: "#3498DB"
},
{
  primary: 'Roboto'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition="slide" transitionDuration={500} progress="none">
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
            react monocle
            </Heading>
            <Text size={1} fit textColor ="black">
              a hierarchical repesentation of your code
            </Text>
            <Heading size={2} caps textColor="white" textSize={50}>
              made for <span style={{color: '#61DAFB'}}>ReactJS</span>
            </Heading>
            <Text textColor="black" textSize="24">created by: michael-bryant choa, jenna davis, and jerry mao</Text>
            <Image src={images.logo} margin="10px auto 0px" height="300px"/>
          </Slide>
          <Slide>
            <Heading caps>
              Problem
            </Heading>
            <List>
              <ListItem>React <span style={{color: 'white'}}>data flow</span> through component hierarchies can be difficult to visualize</ListItem>
              <ListItem><span style={{color: 'white'}}>State changes</span> are difficult to track through deeply nested application structures</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              SOLUTION?
            </Heading>
          </Slide>
          <Slide transition="fade">
              <Image src={images.textLogo} margin="10px auto 20px" height="300px"/>
            <Appear>
              <Text textColor="white">
              A developer tool that visually displays <span style={{color: '#61DAFB'}}>React component hierarchy</span> along with key component information.
              </Text>
            </Appear>
          </Slide>
          <Slide>
            <Heading>GIF</Heading>
          </Slide>
          <Slide>
          our app here
          </Slide>

          <Slide>
            <Heading caps>
              Parsing
            </Heading>
            <Layout>
              <Appear>
              <Fill><CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
            </Fill></Appear>
            <Appear><Fill>
              <CodePane
              lang="jsx"
              source={require("raw!../assets/ast.example")}
              margin="20px auto"
            />
            </Fill></Appear>
            <Appear><Fill>
              <CodePane
              lang="jsx"
              source={require("raw!../assets/formatted.example")}
              margin="20px auto"
            />
            </Fill></Appear>
          </Layout></Slide>
          <Slide>
            <Heading caps>
              render
            </Heading>
            <List>
              <Appear><ListItem>Postions of nodes are first calculated using D3</ListItem></Appear>
              <Appear><ListItem>Nodes are rendered using React</ListItem></Appear>
              <Appear><ListItem>Post-render links are generated using node positions</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>
            state sync
            </Heading>
            <StateSync />
            <Appear fid="2"><CodePane
              lang="jsx"
              source={require("raw!../assets/statesync.example")}
              margin="0pfx auto"
            />
            </Appear>
            <Appear fid="3"><CodePane
              lang="jsx"
              source={require("raw!../assets/statesync.example")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide>
            <Heading caps>Check Us Out</Heading>
            <Text>@react-monocle</Text>
          <Layout>
            <Fill>
            <Image src="http://newmerator.github.io/blacktocat.png" width="50%" height="50%"/>
            </Fill>
            <Fill>
            <Fit />
            <Image src="https://www.npmjs.com/static/images/npm-logo.svg" width="50%" height="50%"/>
            </Fill>
          </Layout></Slide>
        </Deck>
      </Spectacle>
    );
  }
}

              // <Appear><ListItem>Tree and developer's app are concurently mounted</ListItem></Appear>
              // <Appear><ListItem>Bundle file is injected with wrapper function</ListItem></Appear>
              // <Appear><ListItem>States between tree and developer's app are linked using Redux</ListItem></Appear>
              // <Appear><ListItem>Wrapper function dispatchs information to Redux Store</ListItem></Appear>
              // <Appear><ListItem>Once state is update both tree and app are rerendered</ListItem></Appear>

          // <Slide transition={["zoom", "fade"]} bgColor="primary">
          //   <Layout>
          //   <Appear>
          //     <Fill>
          //       <Text textColor="white" textSize="37">React Source Code</Text>
          //       <Image width="60%" height="60%" src="http://www.clker.com/cliparts/i/d/j/L/0/G/file-icon-md.png" />
          //     </Fill>
          //   </Appear>
          //   <Appear>
          //     <Image width="15%" height="15%" src="http://www.clker.com/cliparts/7/3/4/6/11949868861576570036arrow02_1.svg" />
          //   </Appear>
          //   <Appear>
          //     <Fill>
          //       <Text textColor="white" textSize="37">React AST Parser</Text>
          //       <Image width="50%" src="https://cdn.auth0.com/blog/react-js/react.png" />
          //     </Fill>
          //   </Appear>
          //   <Appear>
          //     <Image width="15%" height="15%" src="http://www.clker.com/cliparts/7/3/4/6/11949868861576570036arrow02_1.svg" />
          //   </Appear>
          //   <Appear>
          //     <Fill>
          //       <Text textColor="white" textSize="37">React + D3 Renderer</Text>
          //       <Image width="50%" height="50%" src="https://cdn.auth0.com/blog/react-js/react.png" />
          //       <Image width="50%" height="50%" src="https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/d3-7732c6dfe97d8fdb11a2cf9312b8b088.svg" />
          //     </Fill>
          //   </Appear>
          // </Layout>
          // </Slide>