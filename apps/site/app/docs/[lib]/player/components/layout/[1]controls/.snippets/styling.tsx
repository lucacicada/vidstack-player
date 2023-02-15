import { MediaOutlet, MediaPlayer } from '@vidstack/react';

function Player() {
  return (
    <MediaPlayer>
      <MediaOutlet />
      <div className="media-controls-container">
        <div className="media-controls-group">Controls Top</div>
        <div className="media-controls-group">Controls Middle</div>
        <div className="media-controls-group">Controls Bottom</div>
      </div>
    </MediaPlayer>
  );
}