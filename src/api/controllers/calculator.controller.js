export const calculate = async (req, res) => {
  const ping = {
    res: 'pong',
  };
  res.send(ping);
};
