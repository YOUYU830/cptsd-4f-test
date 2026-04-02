export type ResponseType = 'fight' | 'flight' | 'freeze' | 'fawn';

export interface Question {
  id: number;
  type: ResponseType;
  text: string;
}

export interface TypeInfo {
  id: ResponseType;
  name: string;
  chineseName: string;
  description: string;
  mechanism: string;
  traits: string[];
}

export const typeInfo: TypeInfo[] = [
  {
    id: 'fight',
    name: 'Fight',
    chineseName: '战反应',
    description: '战斗型',
    mechanism: '通过掌控和反击获得安全感',
    traits: [
      '控制欲强、难以接受批评',
      '防御性强、容易愤怒',
      '认为自己是正确的',
      '难以承认错误',
      '用愤怒掩盖恐惧',
      '在关系中占据主导'
    ]
  },
  {
    id: 'flight',
    name: 'Flight',
    chineseName: '逃反应',
    description: '逃避型',
    mechanism: '通过忙碌和追求完美获得安全感',
    traits: [
      '停不下来、过度活跃',
      '完美主义、工作狂',
      '难以放松、焦虑',
      '头脑停不下来',
      '难以活在当下',
      '用忙碌逃避情绪'
    ]
  },
  {
    id: 'freeze',
    name: 'Freeze',
    chineseName: '僵反应',
    description: '冻结型',
    mechanism: '通过躲藏和隔离获得安全感',
    traits: [
      '情感麻木、经常"卡住"',
      '身体沉重、没有力气',
      '喜欢独处、回避社交',
      '拖延、逃避困难',
      '长时间刷手机或发呆',
      '难以表达情绪'
    ]
  },
  {
    id: 'fawn',
    name: 'Fawn',
    chineseName: '讨好反应',
    description: '顺从型',
    mechanism: '通过迎合和牺牲获得安全感',
    traits: [
      '难以拒绝别人',
      '把别人需求放第一位',
      '害怕被抛弃',
      '经常道歉或迁就',
      '忽略自己感受',
      '在关系中失去自我'
    ]
  }
];

// 解读文案
export const interpretationTexts: Record<string, string> = {
  // 单一类型
  fight: `你的主导模式是：战反应。
这意味着当你感到不安全、被威胁或害怕被抛弃时，你的第一反应是反击、控制或攻击。你可能用愤怒来掩盖恐惧，用批判来维持掌控，用"我必须赢"来保护自己。
这种模式往往来自于童年，也许你生活在一个需要用强硬才能获得关注的家庭，或者你模仿了那个用愤怒控制一切的养育者。有些战反应的人是被宠坏或缺乏限制的孩子，有些则是被迫承担过多责任、必须"强大"起来的孩子。无论哪种，你都学会了：只有掌控局面，才能感到安全。
但这样的策略也有代价。你可能发现，当你用愤怒或批评去对待亲近的人时，他们会退缩、防备，甚至离开，这反而触发了你更深的不安，让你更加愤怒，形成恶性循环。你的内心深处还在渴望温暖和亲密，却不知道如何放下盔甲。
给你提供一个可以尝试的方向： 试着在情绪被触发时，让自己的行动先暂停，认真问问自己："此时此刻，我真正害怕的是什么？是失去控制，还是害怕被抛弃？" 你也可以慢慢练习用语言表达脆弱，而不是用愤怒推开别人。比如，你可以试着跟对方说"我现在很害怕，我需要一点时间"，而不是指责对方。你要告诉自己，真正的力量，是允许自己能够柔软下来。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  flight: `你的主导模式是：逃反应。
这意味着当你感到不安、焦虑或害怕被遗弃时，你的第一反应是让自己忙起来，你可能会用工作、学习、家务或者任何能让你"动起来"的事情填满时间，仿佛你一停下就会被情绪淹没。
这种模式往往源于一个混乱、高压或忽视你情感需求的童年。你可能学会了：只有做到完美、只有不断前进，才能获得安全感和认可。于是你成了"行动的人"（Human Doing），而不是"存在的人"（Human Being）。你的头脑里永远有清单、计划、待办事项，连放松都变成了另一种"任务"。
但这样的奔跑让你精疲力竭。你很难真正休息，即使身体已经发出警告；你也很难享受当下，因为你的注意力永远在"下一步"。你可能会陷入"忙到崩溃、崩溃后自责、自责后更忙"的循环。
给你提供一个可以尝试的方向： 试着给自己3分钟，什么都不做，只是坐着，感受自己的呼吸。可能你会觉得心慌、坐立不安，但慢慢地，你会发现"停下来"并没有让你想象中的灾难发生。你也可以尝试在完成一件事后，对自己说"这样就够了"，而不是立刻转向下一件事。你要明白，你是值得被爱的，不是因为你做了什么，而是因为你是你。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  freeze: `你的主导模式是：僵反应。
这意味着当你面对压力、冲突或任何可能带来伤害的情境时，你的第一反应是躲起来、隔离、冻结。你可能发现自己常常"卡住"——身体沉重、思维停滞、无法行动。比起与人接触，你更愿意一个人待着，因为人际关系让你感到危险。
这种模式往往源于童年时最深的遗弃。你可能是一个"迷失的孩子"。家里没有你的位置，你的情感和需求被完全忽视，甚至你被当作替罪羊。当你发现无论怎么做都无法改变处境时，你的身体就学会了解离，切断感受，躲进幻想、游戏或漫长的睡眠中，以此逃离无法承受的痛苦。
僵反应让你在极端环境中活了下来，但它也让你的世界变得狭窄。你渴望连接，又害怕靠近；你想行动，却常常感到无力。或许你习惯性地用"关机"来应对一切，却因此错过了生活中那些真正滋养你的可能。
给你提供一个可以尝试的方向：你可以试着从微小的连接开始，不是直接面对人，而是通过宠物、植物、你喜欢的书籍或安全的线上空间，慢慢感受"与人接触"不一定等于"受伤"。 当"冻住"的感觉来临时，试着轻轻地动一动手指、深呼吸几次，告诉自己："我在这里，现在是安全的。" 你不需要立刻改变。只需要在每一次解离后，温柔地把自己带回来。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  fawn: `你的主导模式是：讨好反应。
这意味着当你感到不安或害怕失去关系时，你的第一反应是迎合、取悦、牺牲自己。你可能总是把别人的需求放在第一位，很难说"不"，生怕拒绝会让对方不高兴、不喜欢你、离开你。
这种模式往往源于一个需要你"懂事"的童年。也许你的父母中有一位是自恋者，把你看作他们的延伸；也许你很小就被要求照顾家人的情绪，成为"小大人"。你学会了只有让别人满意，我才是安全的；只有放弃自己，我才能被爱。于是你成了那个永远在倾听、永远在帮助、永远在妥协的人。但你内心的感受却被深深压抑——你不知道自己想要什么，因为你的注意力永远在别人身上。你害怕冲突，害怕被抛弃，所以你把自己缩得很小很小，小到几乎看不见。
但这样的代价是巨大的：你慢慢失去了与自己内心的连接，你可能被那些只索取不回报的人吸引，因为你习惯了"付出"来换取一点点的安全感。
给你提供一个可以尝试的方向：试着从最小的"不"开始练习。比如今天不想喝咖啡，就说"不用了，谢谢"。注意那个说"不"时的紧张感，告诉自己："我允许自己有自己的偏好。" 你也可以开始记录自己的感受：在答应别人之前，问问自己"我真的愿意吗？我需要什么？" 你不需要通过放弃自己来换取爱。真正的关系，是你可以安全地做自己，同时被接纳。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  // 混合类型：战-讨好
  'fight-fawn': `你的核心模式是：战反应，同时讨好反应也很突出。
这种组合听起来有点矛盾——一方面你习惯用愤怒、控制或完美主义来应对威胁，另一方面你又非常在意别人的感受，甚至委屈自己去迎合。其实这并不奇怪。
我观察到的一些情况是，你可能会在不同关系中切换这两种模式。比如在职场或外人面前，你表现得强势、主导、不容置疑；但在亲近的人（或某些让你感到安全的关系）里，你反而会变成那个不断让步、害怕冲突的人。或者，你会在同一个人身上"忽冷忽热"，上一秒还在愤怒地指责，下一秒又因为担心失去对方而迅速讨好。
这种组合的根源，往往是在童年时既要应对一个挑剔、控制的养育者，又必须学会察言观色来保护自己。你学会了用"战"来保持控制、避免脆弱，用"讨好"来防止被抛弃。两种策略交替使用，确实能让你在复杂的环境中生存下来，但也让你很难真正放松地做自己。
给你提供一个可以尝试的方向：试着自我观察一下，在什么情况下你会切换到"战"，什么情况下会切换到"讨好"。它们分别想保护你什么？有没有可能，在安全的关系里，你既不需要用攻击来撑起自己，也不需要靠讨好来维系连接？这需要慢慢练习——先从承认自己的脆弱开始，哪怕只是对自己说"我现在很害怕，我不想让别人看到"。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  // 混合类型：逃-僵
  'flight-freeze': `你的核心模式是：逃反应，同时僵反应也很突出。
这个组合好像让你要么忙到精疲力竭，要么彻底瘫倒，什么都做不了。你习惯用忙碌来逃避内心的不安：不断做事、计划、赶进度，仿佛一停下来就会被焦虑吞没。但当忙碌耗尽了你所有的能量，你就会突然"关机"——躺在床上刷手机、发呆、或者干脆什么都不想做，直到攒够力气再开始下一轮奔波。
这种模式在童年时可能是你唯一能用的办法。也许你生活在一个混乱或充满压力的家庭里，只有让自己不停地动、不停地想，才能忽略那些让你害怕的感觉。而当你发现无论如何都改变不了局面时，身体又学会了"冻住"来保护你。
但这样的循环让你很难真正休息，也很难建立稳定的关系。因为你总是在"冲刺"和"瘫痪"之间摇摆，而没有"匀速前进"。
给你提供一个可以尝试的方向： 试着让自己主动地、有意识地停下来。哪怕只有三分钟，闭上眼睛，感受自己的呼吸，问问自己："我现在需要什么？" 你可能一开始会觉得"停下来"比"忙碌"还要难，因为身体会报警。但慢慢地，你会发现，你不需要永远跑在最前面，也不需要彻底放弃。你可以慢下来，可以休息，可以只是"存在"而不是"做事"。要知道，这不是偷懒，而是帮你找回对自己节奏的控制权。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  // 混合类型：战-僵
  'fight-freeze': `你的核心模式是：战反应，同时僵反应也很突出。
这种组合看起来有点冷：你可能对事情有很强的掌控欲，希望一切按照你的方式来，但同时又对人际关系兴趣不大，甚至回避深入的交流。某种程度上，你会要求别人按你的意志行动，自己却一动不动。在家庭或亲密关系中，你或许习惯用沉默、冷淡、或者偶尔爆发的愤怒来维持局面。当你觉得失控时，要么用冷漠隔离自己（僵），要么突然发火（战），但很少用温和的沟通去解决问题。
这种模式往往源于一个既要求顺从、又不给予温暖的环境。你在童年时可能学会了，想要安全，就要让一切在自己掌控之中，但表达情感是危险的，不如躲起来。于是你同时拥有了"控制"的盔甲和"隔离"的壳。
给你提供一个可以尝试的方向：你可以试着问自己，我真正想控制的是什么？是害怕失控带来的恐惧吗？ 同时，也可以慢慢练习在安全的关系里，允许自己露出一点点脆弱，哪怕只是说一句"我不太舒服，但我不知道怎么表达"。 你不需要一直当那个"坚强"的人，也不需要永远躲在壳里。真正的力量，有时是允许自己软下来。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`,

  // 均衡型
  balanced: `你的四项得分比较平均，没有特别突出的反应模式。
- 你在不同情境下灵活切换各种反应，这是健康整合的表现；
- 你正在从某个单一模式中走出来，逐渐变得更平衡；
- 或者，你的经历比较复杂，无法简单归类。
如果你对自己的模式还有好奇，可以试着回忆一些具体的场景——比如和父母、伴侣、领导相处时，你最本能的反应是什么？这些线索往往藏在细节里。不要急着给自己贴标签，因为了解自己是一个慢慢展开的过程，现在你已经走在这条路上了。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`
};

export const questions: Question[] = [
  // ========== 战反应 (Fight) - 7题 ==========
  {
    id: 1,
    type: 'fight',
    text: '当别人质疑我时，我的第一反应是反击或证明对方是错的。'
  },
  {
    id: 2,
    type: 'fight',
    text: '我很难容忍别人犯错，尤其是那些我觉得"应该知道"的事情。'
  },
  {
    id: 3,
    type: 'fight',
    text: '愤怒是我在面对压力时最先感受到的情绪。'
  },
  {
    id: 4,
    type: 'fight',
    text: '我认为如果我不掌控局面，事情就会失控。'
  },
  {
    id: 5,
    type: 'fight',
    text: '当我感到受伤时，我更容易用讽刺或批评来表达，而不是直接说"我很难过"。'
  },
  {
    id: 6,
    type: 'fight',
    text: '我习惯在关系中占据主导地位，而不是平等对话。'
  },
  {
    id: 7,
    type: 'fight',
    text: '我很难承认自己错了，那让我觉得软弱或失败。'
  },

  // ========== 逃反应 (Flight) - 7题 ==========
  {
    id: 8,
    type: 'flight',
    text: '我很难让自己真正停下来休息，总觉得还有事情没做完。'
  },
  {
    id: 9,
    type: 'flight',
    text: '当我感到焦虑时，我会让自己忙起来，这样就不用去想那些让我不安的事。'
  },
  {
    id: 10,
    type: 'flight',
    text: '我经常同时处理好几件事，因为停下来会让我心慌。'
  },
  {
    id: 11,
    type: 'flight',
    text: '即使完成了重要的事，我也很难感到满足，总觉得"还不够"。'
  },
  {
    id: 12,
    type: 'flight',
    text: '我的脑子里总是有很多计划、清单和待办事项在转。'
  },
  {
    id: 13,
    type: 'flight',
    text: '我很难放松地享受什么都不做的时光。'
  },
  {
    id: 14,
    type: 'flight',
    text: '忙碌让我觉得自己是有价值的。'
  },

  // ========== 僵反应 (Freeze) - 7题 ==========
  {
    id: 15,
    type: 'freeze',
    text: '当压力来临时，我会整个人僵住，不知道该怎么办。'
  },
  {
    id: 16,
    type: 'freeze',
    text: '我经常觉得做什么都没用，反正就不做了。'
  },
  {
    id: 17,
    type: 'freeze',
    text: '比起和人相处，我更喜欢一个人待着，因为那样更安全。'
  },
  {
    id: 18,
    type: 'freeze',
    text: '遇到困难时，我的第一反应是躲起来或消失。'
  },
  {
    id: 19,
    type: 'freeze',
    text: '我经常感到身体沉重、没有力气去做任何事。'
  },
  {
    id: 20,
    type: 'freeze',
    text: '我会长时间刷手机、看电视或发呆，回过神来发现时间已经过去了很久。'
  },
  {
    id: 21,
    type: 'freeze',
    text: '我很难在别人面前表达自己的情绪，更多时候是"木"着的。'
  },

  // ========== 讨好反应 (Fawn) - 7题 ==========
  {
    id: 22,
    type: 'fawn',
    text: '我很难对别人说"不"，即使心里不愿意。'
  },
  {
    id: 23,
    type: 'fawn',
    text: '在关系中，我经常把自己的需求放在最后。'
  },
  {
    id: 24,
    type: 'fawn',
    text: '如果别人不高兴，我会觉得是自己的错。'
  },
  {
    id: 25,
    type: 'fawn',
    text: '我害怕拒绝别人后，对方会不喜欢我或离开我。'
  },
  {
    id: 26,
    type: 'fawn',
    text: '我习惯先问别人想要什么，而不是先表达自己的想法。'
  },
  {
    id: 27,
    type: 'fawn',
    text: '即使不舒服，我也会假装一切都好，因为不想让别人担心或失望。'
  },
  {
    id: 28,
    type: 'fawn',
    text: '我觉得让别人开心是我的责任。'
  }
];

// 计算得分
export const calculateScores = (answers: number[]): Record<ResponseType, number> => {
  const scores: Record<ResponseType, number> = {
    fight: 0,
    flight: 0,
    freeze: 0,
    fawn: 0
  };

  questions.forEach((question, index) => {
    if (answers[index] !== undefined && answers[index] !== 0) {
      scores[question.type] += answers[index];
    }
  });

  return scores;
};

// 获取主要类型
export const getPrimaryType = (scores: Record<ResponseType, number>): ResponseType => {
  let maxScore = 0;
  let primaryType: ResponseType = 'fight';

  (Object.keys(scores) as ResponseType[]).forEach((type) => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      primaryType = type;
    }
  });

  return primaryType;
};

// 获取混合类型（得分接近的类型）
export const getMixedTypes = (scores: Record<ResponseType, number>): ResponseType[] => {
  const sortedTypes = Object.entries(scores)
    .sort(([, a], [, b]) => b - a);

  const primaryScore = sortedTypes[0][1];
  const secondaryScore = sortedTypes[1][1];

  // 如果第一和第二名差距小于等于5分，认为是混合类型
  if (primaryScore - secondaryScore <= 5) {
    return [sortedTypes[0][0] as ResponseType, sortedTypes[1][0] as ResponseType];
  }

  return [];
};

// 获取类型详情
export const getTypeDetails = (type: ResponseType): TypeInfo | undefined => {
  return typeInfo.find(t => t.id === type);
};

// 判定参数的配置接口
export interface JudgmentConfig {
  singleDominantDiff: number;  // 单一主导阈值：max1 - max2 >= 此值
  singleDominantMin: number;   // 单一主导最低平均分
  mixedDiff: number;           // 混合型阈值：max1 - max2 < 此值
  mixedMin: number;            // 混合型最低平均分
  balancedMax: number;         // 均衡型最高平均分
}

// 默认判定配置
export const defaultJudgmentConfig: JudgmentConfig = {
  singleDominantDiff: 0.5,
  singleDominantMin: 3.0,
  mixedDiff: 0.5,
  mixedMin: 3.0,
  balancedMax: 2.5
};

// 计算各维度的平均分
export const calculateAverages = (scores: Record<ResponseType, number>): Record<ResponseType, number> => {
  const averages: Record<ResponseType, number> = {
    fight: scores.fight / 7,
    flight: scores.flight / 7,
    freeze: scores.freeze / 7,
    fawn: scores.fawn / 7
  };
  return averages;
};

// 获取主导模式判定结果
export const getDominantPattern = (
  scores: Record<ResponseType, number>,
  config: JudgmentConfig = defaultJudgmentConfig
): { mainType: string; description: string } => {
  const averages = calculateAverages(scores);

  // 排序找出最高和次高分
  const sortedEntries = Object.entries(averages).sort(([, a], [, b]) => b - a);
  const max1 = sortedEntries[0];
  const max2 = sortedEntries[1];
  const max1Value = max1[1];
  const max2Value = max2[1];

  const typeIdToName: Record<string, string> = {
    fight: '战反应',
    flight: '逃反应',
    freeze: '僵反应',
    fawn: '讨好反应'
  };

  // 判定逻辑
  // 1. 单一主导：max1 - max2 >= 0.5 且 max1 >= 3.0
  if (max1Value - max2Value >= config.singleDominantDiff && max1Value >= config.singleDominantMin) {
    return {
      mainType: typeIdToName[max1[0]],
      description: `你的主导模式是：${typeIdToName[max1[0]]}`
    };
  }

  // 2. 混合型：max1 - max2 < 0.5 且 max1 >= 3.0 且 max2 >= 3.0
  if (max1Value - max2Value < config.mixedDiff && max1Value >= config.mixedMin && max2Value >= config.mixedMin) {
    const sortedTypes = sortedEntries.map(([id]) => typeIdToName[id]);
    return {
      mainType: `${sortedTypes[0]}和${sortedTypes[1]}`,
      description: `你的核心模式是：${sortedTypes[0]}，同时 ${sortedTypes[1]} 也很突出`
    };
  }

  // 3. 均衡型：所有维度平均分均 < 2.5
  const allBelowBalanced = sortedEntries.every(([, value]) => value < config.balancedMax);
  if (allBelowBalanced) {
    return {
      mainType: '均衡型',
      description: '你的反应模式比较均衡，可能需要进一步探索'
    };
  }

  // 4. 其他情况
  return {
    mainType: typeIdToName[max1[0]],
    description: '你的反应倾向尚不明确，可以结合自己的感受来理解'
  };
};

// 简化计算结果函数（兼容旧代码）
export const calculateResults = calculateScores;