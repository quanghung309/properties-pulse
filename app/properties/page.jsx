import PropertySearchForm from "@/components/PropertySearchForm";
import Properties from "@/components/Properties";
const PropertiesPages = async () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPages;
