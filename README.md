# Tibia party session calculator

## Version 0.1.0

Discord bot to calculate each party's member assigned share amount after a waste or profit of a hunt

# Bot link

https://discord.com/api/oauth2/authorize?client_id=741023444145012873&permissions=67584&scope=bot

# Usage

Use the command `!session` and afterwards paste the party hunt data copied to the clipboard.

Ex:

```
!session Session data: From 2020-08-06, 16:38:14 to 2020-08-06, 17:29:11
Session: 00:50h
Loot Type: Market
Loot: 114,307
Supplies: 78,302
Balance: 36,005
Eternal Oblivion (Leader)
    Loot: 2,937
    Supplies: 43,999
    Balance: -41,062
    Damage: 267,928
    Healing: 80,118
Bubble
    Loot: 111,370
    Supplies: 34,303
    Balance: 77,067
    Damage: 266,463
    Healing: 62,791
```

Output will look like

```
Eternal Oblivion: 62,002
Bubble: 52,306`
```
