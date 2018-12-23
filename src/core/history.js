import { createMemoryHistory, createBrowserHistory } from 'history';

export const history = typeof document !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
