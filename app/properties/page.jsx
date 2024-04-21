// import properties from "@/properties.json";

import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";
const PropertiesPages = async () => {
  const properties = await fetchProperties();
  // sort properties by date
  properties.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
  // console.log(properties);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPages;
