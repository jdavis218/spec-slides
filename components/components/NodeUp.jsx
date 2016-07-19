import React from 'react';
import { Table, Heading, Space } from 'rebass';



function NodeUp(props) {
  // booleans to determine what needs to be dipslayed
  const propsBool = props.props.length > 0;
  const stateBool = props.state.length > 0;
  const methodsBool = props.methods.length > 0;
  // headings for the respective tables
  const propsHeadings = ['prop', 'parent', 'value'];
  const stateHeadings = ['state', 'value'];
  const style = {
    backgroundColor: '#FAFAFA',
    padding: '1em 1em 1em 1em',
    border: '1px solid #78909C',
    borderRadius: '10px',
  };
  const ulStyle = {
    fontSize: '16px',
  }

  // formatting the data for table usage
  const stateData = props.state.reduce((a, b) => {
    return a.concat([[b.name, JSON.stringify(b.value, null, 2)]]);
  }, []);
  const propsData = props.props.reduce((a, b) => {
    return a.concat([[b.name, b.parent, JSON.stringify(b.value, null, 2)]]);
  }, []);
  const methodsData = props.methods.map((ele, i) => {
    return (<li key={i}>{ele}</li>);
  })
  return (
    <div style={style}>
      <Heading size={1} style={{ color: '#0088F0' }}>{props.name}</Heading>
      <Space x={4} />
      {
        stateBool ? (<div><Heading>STATE</Heading>
          <Table
            data={stateData}
            headings={stateHeadings}
            /></div>)
          : null
      }
      {propsBool ? (<div><Heading>PROPS</Heading>
        <Table
          data={propsData}
          headings={propsHeadings}
          /></div>)
        : null
      }
      {methodsBool ? (<div><Heading>METHODS</Heading>
        <ul style={ulStyle}>
          {methodsData}
        </ul>
      </div>)
        : null
      }
      {
        (!propsBool && !stateBool) ? <Heading>nothing to see here!</Heading>
          : null
      }
    </div>
  );
}

NodeUp.propTypes = {
  name: React.PropTypes.string,
  props: React.PropTypes.array,
  state: React.PropTypes.array,
  methods: React.PropTypes.array,
};

NodeUp.defaultProps = {
  name: 'Component',
  props: [],
  state: [],
  methods: [],
};


export default NodeUp;
