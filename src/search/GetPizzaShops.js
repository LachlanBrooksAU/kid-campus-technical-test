import algoliasearch from "algoliasearch/lite";

export default function GetPizzaShops({ latLng, setShops }) {
  // Convert coordinates into a string for angolia to process
  var lat = latLng.lat.toString();
  var lng = latLng.lng.toString();
  var userLocation = lat.concat(", ", lng);

  // Angolia initialisation
  const client = algoliasearch(
    "941VIYWL4A",
    "b614b1514851311bff8457c46f148ebe"
  );
  const index = client.initIndex("pizzaShops");

  // Conduct search for pizza shops by the user's location
  index
    .search("", {
      aroundLatLng: userLocation,
    })
    .then(({ hits }) => {
      setShops(hits);
    });
}
