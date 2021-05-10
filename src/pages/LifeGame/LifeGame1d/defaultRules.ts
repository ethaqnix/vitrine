export interface ILifeGame1dRule {
  pattern: [boolean, boolean, boolean];
  result: boolean;
}

export const lifeGame1dRules = [
  {
    pattern: [false, false, false],
    result: true,
  },
  {
    pattern: [false, false, true],
    result: true,
  },
  {
    pattern: [false, true, false],
    result: true,
  },
  {
    pattern: [false, true, true],
    result: true,
  },
  {
    pattern: [true, false, false],
    result: true,
  },
  {
    pattern: [true, false, true],
    result: true,
  },
  {
    pattern: [true, true, false],
    result: false,
  },
  {
    pattern: [true, true, true],
    result: false,
  },
] as ILifeGame1dRule[];
