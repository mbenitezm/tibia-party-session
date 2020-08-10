const share = (rawMessage) => {
  const level = parseInt(rawMessage.replace('!share', ''));
  const min = Math.floor((level * 2) / 3);
  const max = Math.ceil((level * 3) / 2);
  return formatResult(level, min, max);
};

const formatResult = (level, min, max) => {
  return `A level ${level} can share exp in a party with levels ${min} to ${max}`;
};

export default share;
