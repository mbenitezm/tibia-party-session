const countServers = (client) => {
  const response = client.guilds;
  const membersTotal = response.cache
    .map((g) => g.memberCount)
    .reduce((total, members) => members + total, 0);

  return `I'm in ${response.cache.size} servers with a total of ${membersTotal} members`;
};

export default countServers;
