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

### queryKey 

- The queryKey is typically an array or string that uniquely identifies a query.

- It allows React Query to determine if the data in the cache is associated with a particular request.

- It is used to cache the data with a specific key and refetch or update data when certain dependencies change.

### Note :

- **useQuery** : Fetches and reads data (GET requests) from an API and automatically caches the result.

- **useMutation** : Used for creating, updating or deleting data (POST, PUT, DELETE requests) and allows triggering manual side effects.

### Garbage collection in React-Query | gcTime - (Garbage Collection Time) : 

- In React Query v5, the `cacheTime` option in React Query has been renamed to `gcTime`.

- When you use React Query to get data, it saves the results in a local cache. This means if you ask for the same data again, React Query will give you the saved data instead of making another API request. The cache updates automatically if the data changes, so you always get the latest information.

- **Use Case :** Imagine you're fetching a list of users. If you go back to the same page, React Query will show the saved list from the cache instead of reloading it from the server, making your app faster. If a new user is added, React Query will automatically update the list.

- By default, inactive queries are garbage collected after 5 minutes. This means that if a query is not being used for 5 minutes, the cache for that query will be cleaned up.

### staleTime

In React Query, staleTime is a configuration option that determines how long fetched data is considered fresh before it needs to be refetched.

Here's how it works:

**Fresh Data :**
When data is initially fetched or updated, it's considered fresh.

**Stale Data :**
After the staleTime duration (specified in milliseconds) elapses, the data is considered stale.

**Default Value :**
The default staleTime is 0, meaning data becomes stale immediately after being fetched. This ensures data is always up-to-date but can lead to frequent refetching.