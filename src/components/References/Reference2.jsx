import React, { useState } from 'react';
import './Reference.css'
import YouTubeLogo from './YouTubeLogo2.png'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';




function YoutubePlaylist({linkyt}) {
  const playlistId = 'your_playlist_id_here';
  const iframeSrc = `https://www.youtube.com/embed/videoseries?list=PLkVd4_IMjZgkwcXwnpy7tenGNBbRdiRO8`;

  return (
    <div>
      <h2>My YouTube Playlist</h2>
      <div className='YouTubeFrame'>
        <iframe
          width="260"
          height="175"
        //   src={iframeSrc}
        src = {linkyt}
          title="YouTube Playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}






const Reference2 = ({ youtubeLink}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='reference'>
      <h1>Reference Links</h1>
        <div className="sourceBox">
          <div className="sourceBoxTitle">
            <h3>Youtube References</h3>
            <p>15 Playlists</p>
          </div>
          <div className='sourceBoxInfo'>
            <button className='sourceBoxButton' onClick={onOpenModal}>Explore</button>
            <img src= {YouTubeLogo } alt="Logo" height="50px" width="70px" />
          </div>
          
        </div>
        <Modal open={open} onClose={onCloseModal} center styles={{ modal: { maxWidth: '1200px', } }}>
          <h2>Simple centered modal</h2>
          <div className="YoutubeLinks">
            <div>
            {youtubeLink.map((ytLink) => (
                <div>
                    <YoutubePlaylist linkyt={ytLink}/>
                </div>

            ))}
            </div>
            
          </div>
          
        </Modal>
        
    </div>
  )
}

export default Reference2