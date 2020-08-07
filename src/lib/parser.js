export const parseCharacterNames = (rawAnalysis) => {
  let parsedString = rawAnalysis.replace(/\s/g, '-');
  parsedString = parsedString.replace(/-\(Leader\)/g, '');
  let characterNames = parsedString.match(/(\D*-\w*)-----Loot/g);
  return characterNames
    .join(', ')
    .replace(/-----Loot/g, '')
    .replace(/-/g, ' ')
    .split(', ');
};

export const parsePartyBalance = (rawAnalysis) => {
  const balance = rawAnalysis.match(/Balance: (-|\d)\d*(,*\d*)*/g)[0];
  return parseInt(balance.replace(/,/g, '').replace('Balance: ', ''));
};

export const parseSupplies = (rawAnalysis) => {
  const supplies = rawAnalysis.match(/Supplies: (-|\d)\d*(,*\d*)*/g);
  const temp = supplies.map((s) =>
    parseInt(s.replace(/,/g, '').replace('Supplies: ', ''))
  );
  return temp;
};
