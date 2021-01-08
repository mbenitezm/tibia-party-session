const locations = {
  1: {
    city: 'Rashid is in Svargrond',
    image: 'http://www.whereisrashid.com/images/RashidSvarMon.png',
  },
  2: {
    city: 'Rashid is in Liberty Bay',
    image: 'http://www.whereisrashid.com/images/RashidLBTues.png',
  },
  3: {
    city: 'Rashid is in Port Hope',
    image: 'http://www.whereisrashid.com/images/RashidPHWed.png',
  },
  4: {
    city: 'Rashid is in Ankrahmun',
    image: 'http://www.whereisrashid.com/images/RashidAnkThurs.png',
  },
  5: {
    city: 'Rashid is in Darashia',
    image: 'http://www.whereisrashid.com/images/RashidDaraFri.png',
  },
  6: {
    city: 'Rashid is in Edron',
    image: 'http://www.whereisrashid.com/images/RashidEdronSat.png',
  },
  0: {
    city: 'Rashid is in Carlin',
    image: 'http://www.whereisrashid.com/images/RashidCarSun.png',
  },
};

const whereIsRashid = () => {
  let date = new Date();
  date = new Date(date.setHours(date.getHours() - 9));
  return locations[date.getDay()];
};

export default whereIsRashid;
