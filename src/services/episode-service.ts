import AxiosInstance from './axios';

class EpisodeService {
  getEpisodes = async () => {
    const response = await AxiosInstance.get('/episode');
    return response;
  };

  getEpisodeDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/episode/${id}`);
    return response;
  };
}

export default new EpisodeService();
