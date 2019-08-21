import queryString from "query-string";

type GetFilterValueType = (locationSearch: string) => string;

const getFilterValue: GetFilterValueType = locationSearch => {
  const searchObj = queryString.parse(locationSearch);

  if (searchObj && searchObj.search) {
    const search = searchObj.search.toString();
    return search;
  }
  return '';
};

export default getFilterValue;
