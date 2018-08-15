function MyStatefulClassComponent(props = { stuff: '' }) {
  // Constructor :
  this.props = props;
  this.state = { count: 0 };
  // End Constructor

  const increment = () => {
    this.state.count++;
  };

  const decrement = () => {
    this.state.count--;
  };

  const render = () => {
    const { stuff } = this.props;
    const { count } = this.state;
    return `My Props: ${stuff}, My State: ${this.state.count} `;
  };
  // Render method
  return {
    render,
    increment,
    decrement
  };
}

const comp = /*new*/ MyStatefulClassComponent({ stuff: 'yeah!' });
console.log(comp.render()); // My Props: yeah!, My State: 0

comp.increment();
console.log(comp.render()); // My Props: yeah!, My State: 1

comp.decrement();
console.log(comp.render()); // My Props: yeah!, My State: 0
