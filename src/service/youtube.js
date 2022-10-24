class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  /**
   * home 화면 : 인기있는 동영상
   * @returns videos
   */
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    return response.data.items;
  }

  /**
   * Youtube Search 화면 : 검색한 동영상
   * @param {string} query
   * @returns videos
   */
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 25,
        type: 'video',
      },
    });

    const items = response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));

    return items;
  }
}

export default Youtube;
