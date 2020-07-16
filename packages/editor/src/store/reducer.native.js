/**
 * External dependencies
 */
import optimist from 'redux-optimist';

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	postId,
	postType,
	preferences,
	saving,
	postLock,
	postSavingLock,
	reusableBlocks,
	template,
	isReady,
	editorSettings,
} from './reducer.js';

import { EDITOR_SETTINGS_DEFAULTS } from './defaults.js';

EDITOR_SETTINGS_DEFAULTS.autosaveInterval = 0; // This is a way to override default behavior on mobile, and make it ping the native save at each keystroke

export * from './reducer.js';

/**
 * Reducer returning the post title state.
 *
 * @param {Object}  state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export const postTitle = combineReducers( {
	isSelected( state = false, action ) {
		switch ( action.type ) {
			case 'TOGGLE_POST_TITLE_SELECTION':
				return action.isSelected;
		}

		return state;
	},
} );

/**
 * Reducer returning the clipboard state.
 *
 * @param {Object}  state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function clipboard( state = null, action ) {
	switch ( action.type ) {
		case 'UPDATE_CLIPBOARD':
			return action.clipboard;
	}

	return state;
}

/**
 * Reducer returning the notices state.
 *
 * @param {Object}  state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function notices( state = [], action ) {
	switch ( action.type ) {
		case 'CREATE_NOTICE':
			return [ ...state, action.notice ];
		case 'REMOVE_ALL_NOTICES':
			return [];
		case 'REMOVE_NOTICE':
			return state.filter( ( notice ) => notice.id !== action.id );
	}
	return state;
}

export default optimist(
	combineReducers( {
		postId,
		postType,
		postTitle,
		preferences,
		saving,
		postLock,
		postSavingLock,
		reusableBlocks,
		template,
		isReady,
		editorSettings,
		clipboard,
		notices,
	} )
);
