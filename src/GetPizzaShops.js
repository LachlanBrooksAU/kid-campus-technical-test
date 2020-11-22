import algoliasearch from "algoliasearch/lite";


function conductSearch({userLocation}) {
  console.log("Called");
  const client = algoliasearch(
    "941VIYWL4A",
    "b614b1514851311bff8457c46f148ebe"
  );
  const index = client.initIndex("pizzaShops");
  index
  .search("", {
    aroundLatLng: userLocation,
  })
  .then(({hits}) => {
    return hits;
  });
}

export default function GetPizzaShops({ latLng }) {
  var lat = latLng.lat.toString();
  var lng = latLng.lng.toString();
  var userLocation = lat.concat(', ', lng);
  
  const shops = conductSearch({userLocation});

  console.log(shops)
  return shops
}
