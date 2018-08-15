const globalThis = this;

function MyClassComponent(props = { stuff: '' }) {
  console.log(globalThis == this); // false
  // Constructor :
  this.props = props;
  // End Constructor

  // render
  return function() {
    const { stuff } = this.props;
    return `This is printing out props: ${stuff}`;
  };
}

const comp = MyClassComponent({ stuff: 'yeah!' });
console.log(comp()); // This is printing out props: yeah!
