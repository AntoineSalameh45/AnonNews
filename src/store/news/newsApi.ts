import fetchUser from '../../utils/fetchUser';

const newsApi = async (page: number, pageSize: number) => {
  try {
    const response = await fetchUser.get(
      `posts?page=${page}&pageSize=${pageSize}`,
    );

    if (response.status === 500) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error fetching items');
  }
};

export {newsApi};
