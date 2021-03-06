/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

const actionTypeConstants = {
  //databaseActions
  LIST_DATABASES: 'LIST_DATABASES',
  REQUEST_DATABASE: 'REQUEST_DATABASE',
  RESPONSE_DATABASE: 'RESPONSE_DATABASE',

  //tableActions
  LIST_TABLES: 'LIST_TABLES',
  REQUEST_TABLES: 'REQUEST_TABLES',
  RESPONSE_TABLES: 'RESPONSE_TABLES',
  SAVE_RESULT_SET: 'SAVE_RESULT_SET',

  //selectActions
  SELECT_DATABASE: 'SELECT_DATABASE',
  SELECT_TABLE: 'SELECT_TABLE',
  CLEAR_SELECTED_DATABASE: 'CLEAR_SELECTED_DATABASE',
  CLEAR_SELECTED_TABLE: 'CLEAR_SELECTED_TABLE',

  //queryActions
  REQUEST_EXECUTE_QUERY: 'REQUEST_EXECUTE_QUERY',
  RESPONSE_EXECUTE_QUERY: 'RESPONSE_EXECUTE_QUERY',
  CLEAR_QUERY_RESPONSE: 'CLEAR_QUERY_RESPONSE',
  SAVE_RESULT_SET_FROM_QUERY: 'SAVE_RESULT_SET_FROM_QUERY'
};

export default actionTypeConstants;