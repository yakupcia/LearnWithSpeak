import AxiosInstance from './axios';

class LocationService {
  getLocations = async () => {
    const response = await AxiosInstance.get('/location');
    return response;
  };

  getLocationDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/location/${id}`);
    return response;
  };
}

export default new LocationService();
