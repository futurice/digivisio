import { LearningMode } from '../types/LearningMode';

export const getDisplayValueForLearningMode = (mode: LearningMode): string => {
  switch (mode) {
    case LearningMode.KESKITTYNYT:
      return 'Keskittynyt';
    case LearningMode.MENEVA:
      return 'Menevä';
    default:
      return 'Oppimistyyli puuttuu';
  }
};

export const getDescriptionForLearningMode = (mode: LearningMode): string => {
  switch (mode) {
    case LearningMode.KESKITTYNYT:
      return 'Kaikki oppimateriaali sisältötyypit';
    case LearningMode.MENEVA:
      return 'Ensisijaisesti video- ja äänisisällöt';
    default:
      return 'Oppimistyyli puuttuu';
  }
};

export const getFormatsForLearningMode = (mode: LearningMode): ReadonlyArray<string> => {
  switch (mode) {
    case LearningMode.MENEVA:
      return ['16d136da-d322-4028-9bda-53a3e7ebd5f6', 'c1256389-a47d-4a44-beb2-bdbbc79abb28'];
    default:
      return [];
  }
};
