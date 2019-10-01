import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../../component/preview-collection/preview-collection.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherProps}) => (
            <PreviewCollection key={id} {...otherProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);