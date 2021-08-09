import { Button, Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { CardList } from "../components/CardList";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

type fetchImagesParams = {
  pageParam?: string | null;
};

type Image = {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
};

type AxiosResponse = {
  data: Image[];
  after: string | null;
};

const fetchImages = async ({ pageParam = null }: fetchImagesParams) => {
  const data = await api.get<AxiosResponse>(`api/images`, {
    params: {
      after: pageParam,
    },
  });
};

export const Home = () => {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("images", fetchImages, {
    getNextPageParam: (lastPage) => lastPage.data.after ?? null,
  });

  const formattedData = useMemo(() => {
    return data?.pages.flatMap((image) => image.data.data);
  }, [data]);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <Button marginTop="40px" onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Show more"}
          </Button>
        )}
      </Box>
    </>
  );
};

export default Home;
