import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
  inserted(el, node) {
    console.log('hello');
  },
};

export default directive;
