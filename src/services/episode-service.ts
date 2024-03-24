import AxiosInstance from './axios';

class EpisodeService {
  getEpisodes = async (params: any) => {
    const response = await AxiosInstance.get('/episode', {params});
    return response;
  };

  getEpisodeDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/episode/${id}`);
    return response;
  };
}

export default new EpisodeService();
