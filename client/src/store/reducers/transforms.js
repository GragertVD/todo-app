import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  (inboundState) => {
    return Object.assign({}, inboundState);
  },
  (outboundState) => {
    return Object.values(outboundState);
  },
  { whitelist: ['listMultipl'], }
);

export default SetTransform;