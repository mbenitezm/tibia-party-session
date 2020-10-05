import axios from 'axios';

const share = async (rawMessage) => {
  let nameOrLevel = rawMessage.replace('!share', '');
  let level = parseInt(nameOrLevel);
  if (Number.isNaN(level)) {
    const {
      characters: { data },
    } = await fetchData(
      `https://api.tibiadata.com/v2/characters/${nameOrLevel}.json`
    );
    level = data.level;
  }

  const min = Math.floor((level * 2) / 3);
  const max = Math.ceil((level * 3) / 2);
  return formatResult(level, min, max);
};

const formatResult = (level, min, max) => {
  if (level) {
    return `A level ${level} can share exp in a party with levels ${min} to ${max}`;
  }

  return 'Character not found';
};

const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export default share;
