  export function getTrackThumbnail(track) {
    // Some tracks may not have images
    if (!track.artwork.url) return "";

    const urlTemplate = track.artwork.url; // or trackurl if that's what you have
    const width = 400; // choose any size you want
    const height = 400;

    // Replace placeholders with actual numbers
    const thumbnailUrl = urlTemplate
      .replace("{w}", width)
      .replace("{h}", height);

    return thumbnailUrl;
  }
