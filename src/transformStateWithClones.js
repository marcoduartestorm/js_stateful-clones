'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformState2(state, actions) {
  const stateHistory = [];

  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        for (const key in obj.extraData) {
          Object.assign(state, { [key]: obj.extraData[key] });
        }
        const stateTemp1 = { ...state };
        stateHistory[stateHistory.length] = stateTemp1;
        break;
      case 'removeProperties':
        for (const key of obj.keysToRemove) {
          delete state[key];
        }
        const stateTemp2 = { ...state };
        stateHistory[stateHistory.length] = stateTemp2;
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        const stateTemp3 = { ...state };
        stateHistory[stateHistory.length] = stateTemp3;
    }
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
