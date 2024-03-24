import AxiosInstance from './axios';

class LocationService {
  getLocations = async (params: any) => {
    const response = await AxiosInstance.get('/location', {params});
    return response;
  };

  getLocationDetail = async (id: number) => {
    const response = await AxiosInstance.get(`/location/${id}`);
    return response;
  };
}

export default new LocationService();
