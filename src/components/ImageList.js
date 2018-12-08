/**
 * Create By : Janakiraman M
 * On : 08-Dec-2018
 * Comment : Create ImageList Functional Component
 */
import React from 'react';
import '../css/imagelist.css';
const ImageList = (props) => {
    const result = props.images.map(({description, urls, id}) => {
        return <img alt={description} src={urls.regular} key={id}/>
    });
    return <div className="image-list">{result}</div>;
};
export default ImageList;