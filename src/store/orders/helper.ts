export const prepareQuery = (query: any) => {
  return query
    ? "?" +
        Object.keys(query)
          .map(key => `${key}=${query[key]}`)
          .join("&")
    : "";
};
