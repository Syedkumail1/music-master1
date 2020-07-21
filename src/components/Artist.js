import React from 'react';

// this is a stateless funtional component it doest not have a artist but the parent component (app.js ) have but this is gonna take it and display the artist data after taking it from its parent(app.js) component
const Artist = ({ artist }) =>{

    if(!artist) return null;//because is artist is initialized as null in state of app.js
    const{ images, name, followers, genres} = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img 
                src={images[0] && images[0].url} 
                alt='Artist-Profile'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    objectFit: 'cover'
                }}
            />
        </div>
    )
}
export default Artist;