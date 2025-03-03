# TanStack-Query

**NOTE :** TanStack-Query === React-Query

- It's a library that helps you manage the state of data, you fetch from servers, like API's, in your React application.

- It manages server-side state in React.

### Need of TanStack-Query : 

<img src="./assets/Pic-1.png" />

- If TanStack-Query is not used, we have to do manage the state of data coming form the server, using `useState`, `useEffect`, `contextAPI`, `Redux-Toolkit`, `Zustand`,  etc. 

### Advantages of using TanStack-Query : 

- **Data Fetching Made Easy :** With a simple useQuery hook, fetching data becomes super easy.

- **Built-in Loading and Error States :** No need to write custom code for handling loading, errors, or success states.

- **Automatic Caching :** React Query automatically caches your data.

- **Background Refetching :** If your data gets stale or out of date, TanStack Query can refetch it in the background.

- **Pagination and Infinite Scrolling :** Handling pagination or infinite scrolling? React Query has you covered with tools specifically designed for those complex use cases.

### QueryClient 

- **QueryClient :** It is the core part of the react-query library. It manages the caching, background fetching, data synchronization, and other query-related logic. It provides a centralized store for managing and caching asynchronous data in your application.

- **new QueryClient() :** This creates a new QueryClient instance with default settings. You can configure it with options if needed (e.g., setting cache time, stale time, etc.).

- ** QueryClientProvider :** This component is part of react-query and is used to provide the QueryClient instance to your entire React app (or a portion of it). This makes the query client available via React's context API so that all the components in the tree can use the useQuery, useMutation, and other hooks provided by react-query.