import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url =
  'https://raw.githubusercontent.com/kasfulk/kasfulk/master/README.md';

const useReadme = () => {
  const {
    data: readme,
    isLoading: loading,
    isError: error,
    refetch,
    isRefetching,
  } = useQuery<string>({
    queryKey: ['readme'],
    queryFn: async () => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      return error;
    },
  });

  return {
    readme,
    loading,
    refetch,
    error,
    isRefetching,
  };
};

export default useReadme;
