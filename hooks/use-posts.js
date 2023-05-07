import useSWR from "swr"

const usePosts = (posts) => {
    const { data, error, isLoading } = useSWR(`/api/posts`, {

        initialData: posts,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            console.log("error try again");
            // Never retry on 404.
            if (error.status === 404) return
         
            // Never retry for a specific key.
            if (key === '/api/user') return
         
            // Only retry up to 10 times. 
            if (retryCount >= 5) return
         
            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount }), 5000)
          }
    }) 
   
    return {
        data,
      isLoading,
        error
    }
  }

  export default usePosts;