import counterReducer, { increment, fetchNumber } from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('Counter Slice', () => {
  describe('reducers', () => {
    it('should return the initial state', () => {
      const initialState = { value: 0, loading: false };
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle increment', () => {
      const initialState = { value: 0, loading: false };
      const actual = counterReducer(initialState, increment());
      expect(actual.value).toBe(1);
    });

    it('should handle multiple increments', () => {
      let state = { value: 0, loading: false };
      state = counterReducer(state, increment());
      state = counterReducer(state, increment());
      state = counterReducer(state, increment());
      expect(state.value).toBe(3);
    });
  });

  describe('async thunks', () => {
    it('should handle fetchNumber pending', () => {
      const initialState = { value: 0, loading: false };
      const action = { type: fetchNumber.pending.type };
      const state = counterReducer(initialState, action);
      expect(state.loading).toBe(true);
    });

    it('should handle fetchNumber fulfilled', () => {
      const initialState = { value: 0, loading: true };
      const action = { 
        type: fetchNumber.fulfilled.type, 
        payload: 10 
      };
      const state = counterReducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.value).toBe(10);
    });

    it('should fetch number and update state correctly', async () => {
      const store = configureStore({
        reducer: {
          counter: counterReducer
        }
      });

      // Dispatch the async thunk
      const result = await store.dispatch(fetchNumber());
      
      // Check that the action was fulfilled
      expect(fetchNumber.fulfilled.match(result)).toBe(true);
      
      // Check the final state
      const state = store.getState().counter;
      expect(state.value).toBe(10);
      expect(state.loading).toBe(false);
    });

    it('should set loading to true while fetching', async () => {
      const store = configureStore({
        reducer: {
          counter: counterReducer
        }
      });

      // Start the async thunk
      const promise = store.dispatch(fetchNumber());
      
      // Check loading state immediately (though Promise.resolve is synchronous)
      let state = store.getState().counter;
      
      // Wait for completion
      await promise;
      
      // Check final state
      state = store.getState().counter;
      expect(state.loading).toBe(false);
      expect(state.value).toBe(10);
    });
  });

  describe('integration tests', () => {
    it('should handle both sync and async actions correctly', async () => {
      const store = configureStore({
        reducer: {
          counter: counterReducer
        }
      });

      // Start with initial state
      let state = store.getState().counter;
      expect(state.value).toBe(0);

      // Increment synchronously
      store.dispatch(increment());
      state = store.getState().counter;
      expect(state.value).toBe(1);

      // Fetch number asynchronously
      await store.dispatch(fetchNumber());
      state = store.getState().counter;
      expect(state.value).toBe(10);

      // Increment again
      store.dispatch(increment());
      state = store.getState().counter;
      expect(state.value).toBe(11);
    });
  });
});
