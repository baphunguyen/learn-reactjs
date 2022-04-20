import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Trữ Tình Hải Ngoại',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/4/a/324a4ab3eb3444ba9d7b288bf677aed9.jpg'
        },
        {
            id: 2,
            name: 'Những Bài Hát Quê Hương Việt Nam Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/e/4/a/5e4a8963c19e45a597ff2902a74cd3d4.jpg'
        },
        {
            id: 3,
            name: 'Tuyệt Đỉnh Song Ca Bolero',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/b/9/b9fb9d37bdf15a699bc071ce49baea53_1517283417.jpg'
        }
    ];
    return (
        <div>
            <h2>Album</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;