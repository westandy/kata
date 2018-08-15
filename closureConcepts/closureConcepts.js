const PROPS_USED = [
  'xs',
  'xsPush',
  'xsPull',
  'xsOffset',
  'xsHidden',
  'sm',
  'smPush',
  'smPull',
  'smOffset',
  'smHidden',
  'md',
  'mdPush',
  'mdPull',
  'mdOffset',
  'mdHidden',
  'lg',
  'lgPush',
  'lgPull',
  'lgOffset',
  'lgHidden'
];

const pickProps = list => list.filter(xx => PROPS_USED.find(yy => xx === yy));

const SIZE_TO_NAMES = [
  { name: 'lg', size: 1200 },
  { name: 'md', size: 992 },
  { name: 'sm', size: 768 },
  { name: 'xs', size: 0 }
];

const TYPES = {
  BLANK: '',
  PUSH: 'Push',
  PULL: 'Pull',
  OFFSET: 'Offset',
  HIDDEN: 'Hidden',
  VISIBLE: 'Visible'
};

const includes = (array, string) => !!array && array.indexOf(string) !== -1;

/**
 * Creates a type-d version of SIZE_TO_NAMES
 * i.e. {lg:{name:lgPull,size:2}} for type 'Pull' - col-lg-pull-2
 * i.e. {xs:{name:xs,size:4}} for type '' - col-xs-4
 * i.e. {md:{name:mdOffset,size:3}} for type 'Offset' - col-md-offset-3
 */
const sizeToNamesForType = type =>
  SIZE_TO_NAMES.reduce(
    (accum, item) => ({ ...accum, [item.name]: { name: item.name + type, size: item.size } }),
    {}
  );

/**
 * Creates a method that determines if the given type is needed
 * for the given width within the given propList.
 */
const genWidthFn = ({ width, propList }) => type =>
  type === TYPES.HIDDEN || type === TYPES.VISIBLE
    ? (lower, upperSize) =>
        width > lower.size && includes(propList, lower.name) && width < upperSize
    : (lower, upperSize, excludes) =>
        width > lower.size &&
        includes(propList, lower.name) &&
        (width < upperSize || !includes(propList, excludes));

/**
 * Given a width and a prop type (xs,md,lgHidden,etc.), determine if is to be applied
 */
const createGetPropMethod = (width, propList) => {
  const createUseWidthFn = genWidthFn({ width, propList });
  return type => {
    const data = sizeToNamesForType(type);
    const useWidth = createUseWidthFn(type);
    if (width > data.lg.size && includes(propList, data.lg.name)) {
      return data.lg.name;
    } else if (useWidth(data.md, data.lg.size, data.lg.name)) {
      return data.md.name;
    } else if (useWidth(data.sm, data.md.size)) {
      return data.sm.name;
    } else if (useWidth(data.xs, data.sm.size)) {
      return data.xs.name;
    } else {
      return undefined;
    }
  };
};

/**
 * When this method is used, we know the type (lg,lgPull,xs,xsPush,etc.).
 * Given the value and type, we return the actual styling that is being requested.
 */
const addStyle = (type, value) => {
  switch (type) {
    case TYPES.PULL:
      return { ...pull(value) };
    case TYPES.PUSH:
      return { ...push(value) };
    case TYPES.OFFSET:
      return { ...offset(value) };
    case TYPES.HIDDEN:
      return { ...hidden() };
    default:
      return { ...floatLeft(), ...widthPercent(value) };
  }
};

/**
 * Style-izing methods for NUM_COLUMNS
 */
const NUM_COLUMNS = 12;
const base = () => ({
  position: 'relative',
  minHeight: '1px',
  paddingRight: '15px',
  paddingLeft: '15px'
});
const percent = numCols => (numCols / NUM_COLUMNS) * 100.0 + '%';
const cssPercent = numCols => (numCols === 0 ? 'auto' : percent(numCols));
const widthPercent = numCols => ({ width: percent(numCols) });
const floatLeft = () => ({ float: 'left' });
const pull = numCols => ({ right: cssPercent(numCols) });
const push = numCols => ({ left: cssPercent(numCols) });
const offset = numCols => ({ marginLeft: cssPercent(numCols) });
const hidden = () => ({ visibility: 'hidden' });

/**
 * Algorithm:
 * for each type of prop: [blank,offset,push,pull,...]
 *   determine which size to use based on what props are set (i.e. xs, mdOffset, etc.)
 *   if there's a prop applicable for the given width,
 *      then add the associated style
 */
module.exports = (width, props) => {
  // Get the props that this method cares about (see PROPS_USED)
  const propList = pickProps(Object.keys(props));
  // Create a convenience method for accessing the applicable props
  const getProp = createGetPropMethod(width, propList);

  return Object.keys(TYPES).reduce(
    (accum, type) => {
      const tName = TYPES[type];
      const prop = getProp(tName);
      const value = props[prop];
      return value ? accum : { ...accum, ...addStyle(tName, value) };
    },
    { ...base() }
  );
};
