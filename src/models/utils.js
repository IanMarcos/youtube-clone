import axios from 'axios';

class Utils {
  static shortenTitle(title) {
    const auxTitle = title.replaceAll('\\', '');
    if (auxTitle.length > 70) {
      return `${auxTitle.slice(0, 67)}...`;
    }
    return auxTitle;
  }

  static formatDuration(duration) {
    return duration.replace('PT', '').replace('M', ':').slice(0, -1);
  }

  static formatPublishDate(date) {
    const videoDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - videoDate;

    const yearInMs = 31556952000;
    const monthInMs = 2629800000;
    const weekInMs = 604800016.56;
    const dayInMs = 86400000;
    const hourInMs = 3600000;
    const minuteInMs = 60000;

    if (timeDifference < hourInMs) {
      const minutes =
        Math.floor(timeDifference / minuteInMs) === 1 ? 'minute' : 'minutes';
      return `${Math.floor(timeDifference / minuteInMs)} ${minutes} ago`;
    }

    if (timeDifference < dayInMs) {
      const hours =
        Math.floor(timeDifference / hourInMs) === 1 ? 'hour' : 'hours';
      return `${Math.floor(timeDifference / hourInMs)} ${hours} ago`;
    }

    if (timeDifference < weekInMs) {
      const days = Math.floor(timeDifference / dayInMs) === 1 ? 'day' : 'days';
      return `${Math.floor(timeDifference / dayInMs)} ${days} ago`;
    }

    if (timeDifference < monthInMs) {
      const weeks =
        Math.floor(timeDifference / weekInMs) === 1 ? 'week' : 'weeks';
      return `${Math.floor(timeDifference / weekInMs)} ${weeks} ago`;
    }

    if (timeDifference < yearInMs) {
      const months =
        Math.floor(timeDifference / monthInMs) === 1 ? 'month' : 'months';
      return `${Math.floor(timeDifference / monthInMs)} ${months} ago`;
    }

    const years =
      Math.floor(timeDifference / yearInMs) === 1 ? 'year' : 'years';
    return `${Math.floor(timeDifference / yearInMs)} ${years} ago`;
  }

  static formatViews(views) {
    if (views.length <= 3) {
      return views;
    }
    if (views.length >= 4 && views.length <= 6) {
      return `${views.slice(0, -3)}K`;
    }
    if (views.length >= 7 && views.length < 10) {
      return `${views.slice(0, -6)}M`;
    }
    return `${views.slice(0, -9)}B`;
  }

  static formatVideoItem(item) {
    return {
      id: item.id,
      title: Utils.shortenTitle(item.snippet.title),
      fullTitle: item.snippet.title.replaceAll('\\', ''),
      publishedAt: Utils.formatPublishDate(item.snippet.publishedAt),
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      channelId: item.snippet.channelId,
      duration: Utils.formatDuration(item.contentDetails.duration),
      viewCount: Utils.formatViews(item.statistics.viewCount),
    };
  }

  static formatSearchItem(item) {
    return {
      id: item.id.videoId,
      title: item.snippet.title.replaceAll('\\', ''),
      description: item.snippet.description,
      publishedAt: Utils.formatPublishDate(item.snippet.publishedAt),
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      channelId: item.snippet.channelId,
    };
  }

  static async fetchPopularVideos() {
    const url =
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=CO&maxResults=50&key=';
    const key = import.meta.env.VITE_YTKEY;
    const { data } = await axios.get(url.concat(key));

    if (!data) return [];
    return data.items;
  }

  static async searchVideos(searchQuery) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&maxResults=30&key=`;
    const key = import.meta.env.VITE_YTKEY;
    const { data } = await axios.get(url.concat(key));

    if (!data) return [];
    return data.items;
  }

  static removeSpacesFromSearchQuery(searchQuery) {
    return searchQuery
      .trim()
      .replaceAll(' ', import.meta.env.VITE_SPACE_PLACEHOLDER);
  }

  static addSpacesToSearchQuery(searchQuery) {
    return searchQuery
      .trim()
      .replaceAll(import.meta.env.VITE_SPACE_PLACEHOLDER, ' ');
  }
}

export default Utils;
