import React from 'react';
import './App.css';
import indianData from './indianData';

function India() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.pinimg.com/236x/6d/75/5c/6d755c5d3f8331bd85f055cf60b803d4.jpg',
  });
  const [allMemeImage, setAllMemeImage] = React.useState(indianData.data.memes);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function getMemeImage() {
    const nextIndex = (currentIndex + 1) % allMemeImage.length;
    const nextAddress = allMemeImage[nextIndex].address;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: nextAddress,
    }));

    setCurrentIndex(nextIndex);
  }

  function handlePrevious() {
    const previousIndex = (currentIndex - 1 + allMemeImage.length) % allMemeImage.length;
    const previousAddress = allMemeImage[previousIndex].address;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: previousAddress,
    }));

    setCurrentIndex(previousIndex);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const imageSize = {
    width: '400px',
    height: '400px',
  };

  return (
    <div>
      <div id='subDiv'>
        <input
          className='inputLine'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          type='text'
          placeholder='Enter Upper Text '
        ></input>
        <input
          className='inputLine'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          type='text'
          placeholder='Enter Lower Text'
        ></input>
      </div>
      <div className="button-container">
        <button className="button1" onClick={handlePrevious}>
          Previous Template
        </button>
        <button className="button2" onClick={getMemeImage}>
          Next Template
        </button>
      </div>
      <div className="imageDiv">
        <img
          className="imageProp"
          src={meme.randomImage}
          alt="meme"
          style={imageSize}
        />
        <h2 className="topText">{meme.topText}</h2>
        <h2 className="bottomText">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default India;
