import { Bird } from '../../types/birds.ts';

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getRandomBird(arr: Bird[] | undefined): Bird | undefined {
  if (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}

export function getBirdById(id: string, arr: Bird[] | undefined): Bird | undefined {
  return arr?.find((item) => item.id === Number(id));
}
