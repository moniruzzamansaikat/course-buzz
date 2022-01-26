// get thumbnail from youtube url
export const get_youtube_thumbnail = (url, quality = 'high') => {
  if (url) {
    let video_id, result;
    if ((result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))) {
      video_id = result.pop();
    } else if ((result = url.match(/youtu.be\/(.{11})/))) {
      video_id = result.pop();
    }

    if (video_id) {
      const thumbnail =
        'http://img.youtube.com/vi/' + video_id + '/maxresdefault.jpg';
      return thumbnail;
    }
  }
};
