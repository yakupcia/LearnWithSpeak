import AxiosInstance from './axios';

class CharacterService {
  getCharacters = async () => {
    const response = await AxiosInstance.get('/character');
    return response;
  };

  getCharacterDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/character/${id}`);
    return response;
  };
}

export default new CharacterService();
