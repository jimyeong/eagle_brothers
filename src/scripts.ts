// simply expression

// collect some pictures and practise with tenses.

// just memo
// make it possible to break free from rigidity and limitations of the relational model.

// I like to be inside looking out of the window.
// drizzly
// since they are downsizing
// Chinese grandparents go viral
// He assaulted someone in South korea
// to be disciplined
// they act like they have no brain
// The U.S should negotiate for his release.

// Drugs are outlawed
// Drugs have been outlawed
// A.I techonolgy may be outlawed or regulated in the future.
// at first I wasn't sure what it meant
// to make little headway : to make little progress.

// feeling of surprise
// And finally, to feel blown away or to be blown away.
// stunned
// startled
// Flabbergasted is to be overcome with astonishment or to be overcome with amazement
//  Number four is astounded.
// The first one is aghast.

// what stroke me is that ---

// feeling
// lovely holiday weather

// 빠지는 거(fall out),떨어지는 거 (fall off), 기절시키는 거 knock someone out, beat someone down
// knock off, knock out, hit off, hit out
// cut this up, cut down,
// run into
// put it off, put it on,
// take it off
// turn this off, turn this on.
// turn on the switch, turn off the switch
// turn up the volume, turn down the volume,
// cut this off, cut a branch off the tree.
// chop up,
// whipped up, wipe it off, wipe up,
// clean out, clean up, clean this off
// come off, come with, come in stock
// choke on their money
// sign in, sign out, clock in, clock out, check in, check out, book in

// crushing up, crushed up, crushed down 박살난 거
// beat someone up,beat someone, beat someone down
// would have challaged
// to challenge, to be deplayed, to supply, to be supplied with , provide, provide him with the foods
// the ones undone, the one unfinished, the one finished, the ones finished,
// updated, remain updated, remain undone, remain unprepared, remain prepared, we have the house unfurnished, keep it prepared. get it prepared. get it marked. had it marked
// with this job undone, I don't go anywhere
// obtain, acquire, inquire, deduce,rise
// a refund, a change, a charge, an update, a time, a deduction, a discount, a rise, an adjust, a marriage
// would have risen, an urge rose before

// come to drag me

// 단어장 만들기, 자주 사용 되는 동사
// 외우는 방식은 내 맘대로(내가 효율적이라고 느끼는 대로)
// I turned this off (x) -> turned this off earlier

// I forgot putting the keys in the bag.
// don't forget to take these with you.
// I think she's forgotten to come
// I think Jake has forgotten to come.

// It seems she has failed to remember the time

// you have to say this out within 3seconds.

// 우리는 거스름돈 교환해주지 않아요.
// 입구 옆에다가 둘수있을까요?
// 오른쪽 냉장고 끝에 있어요.
// 오른 쪽 냉장고들을 보세요
// 세번째 냉장고 구석에 있어요.
// 대부분 직원들이 실수한거에요, 만약 이 전에 그 카드를 사용했다면, it's most likely that the staff would have been mistaken.

// beneath the wardrobe.
// under the table

// coming in the opposite direction.

export interface IScript {
  title: string;
  words: string[];
  description: string;
  date: Date;
}

export interface ImemoScript {
  sentence: string;
  chunks: string[];
}

// instruction practise
export const oftenMistakes: any[] = [
  {
    mistakes: [
      "It came",
      "If it doesn' t come",
      "If they don't come",
      "It comes in bags",
      "they come in bags",
    ],
  },
];

export const shortConversation: any[] = [
  {
    sentence: [
      "sorry for doing all this very last minute",
      "You beat me to it",
      "He beat me to the top of the mountain",
      "You did this before me",
      "Let's beat him before he gets there",
      "they chose to stay a bit longer",
      "does that mean you bled today?",
      "does that means you've bled?",
      "they were supposed to open little bit of space on the road for the people from the opposite direction",
      "If it doesn't come in bags",
      "Oh this comes with straws/bags",
    ],
  },
];
// memorising practise
export const memorising: ImemoScript[] = [
  { sentence: "They chose to stay a bit longer", chunks: [""] },
  {
    sentence:
      "they thrive in environments with a relative humidty of 70-80% and temperature of 20-25C",
    chunks: [
      "thrive in environments",
      "with a relative humidity",
      "in environments with humidity",
      "humidity of 70%",
    ],
  },

  {
    sentence:
      "They are found in all households, They are mostly prevalent in humandity climates",
    chunks: [
      "they are found in all households",
      "they are found in all environemts where - ",
      "mostly prevalent",
      "in all households",
      "They are mostly prevalent in",
      "humidity climates",
    ],
  },
  {
    sentence:
      "Read this character in if it is either,  just take that mindset in, then things will get easier",
    chunks: ["Read in"],
  },
  {
    sentence: "2hours to bedtime",
    chunks: ["2hours to bedtime"],
  },
];

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
      "come to drag me",
      "came to drag me",
      "which supplies petrol to tanks",
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
