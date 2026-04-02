export type Page = 'home' | 'questionnaire' | 'result';

export interface AppState {
  currentPage: Page;
  answers: number[];
  scores: Record<string, number>;
}
