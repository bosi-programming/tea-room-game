export interface IAction {
  text: string | ((tasteDetails: string) => string);
  action?: string;
  choices?: string[];
  payload?: string;
}
