import AxiosInstance from './axios';

class CharacterService {
  getCharacters = async (params: any) => {
    const response = await AxiosInstance.get('/character', {params});
    return response;
  };

  getCharacterDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/character/${id}`);
    return response;
  };
}

export default new CharacterService();
