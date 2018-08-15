const MyFunctionalComponent = (props = { stuff: '' }) => {
  return function() {
    // render
    const { stuff } = props;
    return `This is printing out props: ${stuff}`;
  };
};
const comp = MyFunctionalComponent({ stuff: 'yeah!' });
console.log(comp()); // This is printing out props: yeah!
