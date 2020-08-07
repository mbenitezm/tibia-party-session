import {
  parseCharacterNames,
  parsePartyBalance,
  parseSupplies,
} from './parser';

const calculate = (rawAnalysis) => {
  const characters = parseCharacterNames(rawAnalysis);
  const partyBalance = parsePartyBalance(rawAnalysis);
  let supplies = parseSupplies(rawAnalysis);
  supplies.shift(); // Remove supplies sum

  const balancePerCharacter = Math.round(partyBalance / characters.length);
  supplies = supplies.map((s) => s + balancePerCharacter);

  return formatResult(supplies, characters);
};

const formatResult = (supplies, characters) => {
  return (
    '\n' +
    'Hunt loot share: \n' +
    supplies
      .map((s, i) => {
        const payStr = s < 0 ? ' PAY!' : '';
        const sFloat = s * 1.0;
        return `${characters[i]}: ${s.toLocaleString()}${payStr}`;
      })
      .join('\n')
  );
};

export default calculate;
