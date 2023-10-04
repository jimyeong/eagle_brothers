export interface IScript {
  title: string;
  words: string[];
  description: string;
  date: Date;
}

const scripts: IScript[] = [
  {
    title: "memories I almost died in the army",

    words: [
      "squad",
      "gear",
      "tank lorry",
      "basecamp",
      "supply",
      "ominous",
      "wrecker",
    ],
    description:
      "When I was in the army, I used to drive a tank lorry which supplies petrol to tanks, one day, I was on the way back to the basecamp, I could feel some ominous feeling through the gear grip and then right after, I couldn't control the gear bar. but the tank was filled up with petrol even a wrecker couldn't come to drag me all the way to the basecamp. because I was too heavy. When I was a private soldier, it was A series of cold and lonely nights",
    date: new Date("2023-08-23"),
  },
  {
    title: "When you come up to someone",
    words: ["appreciate"],
    description:
      "when you come up to someone and try to explain some sort of religious things, they won't appreciate it, they won't be able to feel it. since then GraphQL Community has grown. that's why the sandbox was showing opening bracket in recommendation, in addition to other keywords like query ",
    date: new Date("2023-10-03"),
  },
  {
    title: "memories I almost died in the army",

    words: [
      "squad",
      "gear",
      "tank lorry",
      "basecamp",
      "supply",
      "ominous",
      "wrecker",
    ],
    description:
      "When I was in the army, I used to drive a tank lorry which supplies petrol to tanks, one day, I was on the way back to the basecamp, I could feel some ominous feeling through the gear grip and then right after, I couldn't control the gear bar. but the tank was filled up with petrol even a wrecker couldn't come to drag me all the way to the basecamp. because I was too heavy. When I was a private soldier, it was A series of cold and lonely nights",
    date: new Date("2023-08-23"),
  },
  {
    title: "Grit page <30 of 440>",
    words: ["correspond"],
    description:
      "What we say we care about may not correspond with what--deep down-- we actaully believe to be more valuable. It's a little like saying we don't care at all about physical attractiveness in a romantic partner and then, When it comes to actually choosing whom to date, picking the cute guy over the nice one.",
    date: new Date("2023-09-28"),
  },
];

export { scripts };
