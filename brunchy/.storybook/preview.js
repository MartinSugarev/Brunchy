import {Context} from '../src/App';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => (
      <Context.Provider  value={{items: [], price: 0}}>
          <Story />
      </Context.Provider>
  ),
];