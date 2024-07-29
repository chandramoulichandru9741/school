    import React, { useState } from 'react';

    const images = [
    { src: 'https://via.placeholder.com/600x400', alt: 'Sports Day', caption: 'Students participating in various sports events.' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Science Exhibition', caption: 'Students presenting their science projects.' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Library', caption: 'Students reading and studying in the school library.' }
    ];

    const videos = [
    { src: 'https://via.placeholder.com/600x400', alt: 'School Tour', caption: 'Virtual tour of Springdale Public School.' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Annual Function', caption: 'Highlights from the Annual Function 2023.' }
    ];

    const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const filteredImages = filter === 'all' ? images : images.filter(img => img.alt.toLowerCase().includes(filter));
    const filteredVideos = filter === 'all' ? videos : videos.filter(vid => vid.alt.toLowerCase().includes(filter));

    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4">Gallery</h1>
        
        <div className="mb-4 text-center">
            <button className="btn btn-primary mx-2" onClick={() => setFilter('all')}>All</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('sports')}>Sports</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('science')}>Science</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('cultural')}>Cultural</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('classroom')}>Classroom</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('library')}>Library</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('tour')}>Tour</button>
            <button className="btn btn-primary mx-2" onClick={() => setFilter('annual')}>Annual</button>
        </div>

        <section className="mb-5">
            <h2>Photos</h2>
            <div className="row">
            {filteredImages.map((img, index) => (
                <div className="col-md-4 mb-4" key={index}>
                <img src={img.src} alt={img.alt} className="img-fluid" />
                <p className="text-center mt-2">{img.caption}</p>
                </div>
            ))}
            </div>
        </section>

        <section>
            <h2>Videos</h2>
            <div className="row">
            {filteredVideos.map((vid, index) => (
                <div className="col-md-6 mb-4" key={index}>
                <video width="100%" controls>
                    <source src={vid.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-center mt-2">{vid.caption}</p>
                </div>
            ))}
            </div>
        </section>
        </div>
    );
    };

    export default Gallery;
