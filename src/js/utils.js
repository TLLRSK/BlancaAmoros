// Functions
const getImage = (id, mediaData) => {
    if (mediaData) {
        return mediaData.find((img) => img.id === id);
    }
    return;
  };

export default getImage;