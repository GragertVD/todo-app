import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  (inboundState, key) => {
    return Object.assign({}, inboundState);
  },
  (outboundState, key) => {
    return Object.values(outboundState);
  },
  { whitelist: ['listMultipl'] }
);

export default SetTransform;