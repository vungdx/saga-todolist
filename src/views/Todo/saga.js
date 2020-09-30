import {
  ActionType,
  getTodosSuccess,
  getTodosFail,
  addTodoSuccess,
  addTodoFail,
  deleteTodoSuccess,
  deleteTodoFail,
  editTodoSuccess,
  editTodoFail
} from "./actions";
import { takeLatest, put } from "redux-saga/effects";

const URL = "https://5eea3c77b13d0a00164e4667.mockapi.io/todos";
function* getTodosRequest() {
  try {
    const response = yield fetch(URL, {
      method: "GET",
    });
    const result = yield response.json();
    yield put(getTodosSuccess(result));
  } catch (error) {
    yield put(getTodosFail(error));
  }
}

function* addTodoRequest(action) {
  try {
    const response = yield fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify({ name: action.payload }),
    });
    const result = yield response.json();
    yield put(addTodoSuccess(result));
  } catch (error) {
    yield put(addTodoFail(error));
  }
}

function* deleteTodoRequest(action) {
  try {
    const id = action.payload;
    const response = yield fetch(URL + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = yield response.json();
    yield put(deleteTodoSuccess(result));
  } catch (error) {
    yield put(deleteTodoFail(error));
  }
}

function* editTodosRequest() {
  try {
    const response = yield fetch(URL, {
      method: "GET",
    });
    const result = yield response.json();
    yield put(editTodoSuccess(result));
  } catch (error) {
    yield put(editTodoFail(error));
  }
}

export function* watchSagaHandleTodos() {
  yield takeLatest(ActionType.GET_TODOS_REQUEST, getTodosRequest);
  yield takeLatest(ActionType.ADD_TODO_REQUEST, addTodoRequest);
  yield takeLatest(ActionType.DELETE_TODO_REQUEST, deleteTodoRequest);
  yield takeLatest(ActionType.EDIT_TODO_REQUEST, editTodosRequest);
}
