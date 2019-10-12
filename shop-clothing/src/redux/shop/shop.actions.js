import { ShopActionTypes } from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsStartFailure = message => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message
});


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsStartSuccess(collectionMap));
            })
            .catch(error =>
                dispatch(fetchCollectionsStartFailure(error.message))
            );
    };
}