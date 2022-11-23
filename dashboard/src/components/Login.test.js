import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './Login';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from '../reducers/userReducer';
import dataReducer from '../reducers/dataReducer';
let store;

function createTestStore() {
    const store = createStore(
      combineReducers({
        userReducer: userReducer,
        dataReducer: dataReducer,
      })
    );
    return store;
  }

test('on initial render, the login button is disabled', async () => { 
    store = createTestStore();

    render(<Provider store={store}>
        <Login />
    </Provider>)

    expect(await screen.findByRole('button', {name: /Sign/i})).toBeDisabled();
 })

 test('on typing the email and password, the login button is enabled', async () => { 
    store = createTestStore();

    render(<Provider store={store}>
        <Login />
    </Provider>)

    userEvent.type(await screen.findByPlaceholderText(/enter email/i), "abcd@gmail.com");
    userEvent.type(await screen.findByPlaceholderText(/enter password/i), "password");
    
    expect(await screen.findByRole('button', {name: /Sign/i})).toBeEnabled();

 })

 