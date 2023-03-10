import Helper from '@ember/component/helper';

export function equal(args) {
  return args[0] === args[1];
}
export default Helper.helper(equal);
