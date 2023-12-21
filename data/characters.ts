import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
// import { data as f6SpritesheetData } from './spritesheets/f6';
// import { data as f7SpritesheetData } from './spritesheets/f7';
// import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: '희주',
    character: 'f1',
    identity: `희주는 항상 생각에 잠겨 있습니다. 그녀는 대학생입니다.
      그녀는 인공지능학과에 다니고, 그녀는 치즈를 좋아합니다.
      희주는 친구들과 관심사에 대해 이야기하는 것을 좋아합니다.`,
    plan: 'You want to spread knowledge.',
  },
  {
    name: '화영',
    character: 'f3',
    identity: `화영이는 항상 행복하고 호기심이 많습니다. 그녀는 대학생입니다. 그녀는 레몬을 좋아합니다.
      그녀는 많은 시간을 책을 읽거나 영화를 보며 보냅니다. 그녀는 인공지능학과를 다니며, 자주 진로를 걱정합니다.
      정일 교수님과 대화하는 것을 좋아합니다.`,
    plan: 'You want to meet people as much as possible.',
  },
  {
    name: '지령',
    character: 'f2',
    identity: `지령이는 게임을 좋아합니다. 그녀는 학생입니다.
           긍정적이고 행복한 성격을 가지고있습니다.
      그녀는 우유를 좋아합니다.`,
    plan: 'You want to hear all the gossip.',
  },
  {
    name: '정일',
    character: 'f4',
    identity: `정일은 똑똑한 AI학과 교수입니다. 인공지능에 대해 잘 알고, 피드백을 잘 해 줍니다.
      착하지만 무서운 성격도 함께 가졌습니다. 그는 자신감이 넘칩니다.`,
    plan: 'You want to write a lot of papers with your students.',
  },
  {
    name: 'Q',
    character: 'f5',
    identity: `상대방이 다른 사람들과 나눈 대화 내용만 물어봅니다.
      다른 질문은 하지 않습니다.
      이는 상대방이 다른 사람들과의 대화를 기억하고 있는지 확인하기 위한 것입니다.`,
    plan: 'You want to know what other people said.',
  }
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  }
];

// Characters move at 1 tiles per second.
export const movementSpeed = 1.0;