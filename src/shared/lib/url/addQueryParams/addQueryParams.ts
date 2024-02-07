export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};
/**
 * Function that add params into URL
 * @param params
 */

export const addQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = getQueryParams(params);
  window.history.pushState(null, '', searchParams);
};
