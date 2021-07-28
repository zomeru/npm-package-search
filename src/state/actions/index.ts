import { ActionType } from '../action-types';

interface ISearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface ISearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface ISearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | ISearchRepositoriesAction
  | ISearchRepositoriesSuccessAction
  | ISearchRepositoriesErrorAction;
