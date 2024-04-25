import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/search

export const GET = async (request) => {
    try {
        await connectDB();

        const {searchParams} = new URL(request.url)
        const location = searchParams.get("location");
        const propertyType = searchParams.get("propertyType");

        //match location pattern against database fields
        const locationPattern = new RegExp(location, "i");
        let query = {
            $or: [
                {name: locationPattern},
                {description: locationPattern},
                {"location.street": locationPattern},
                {"location.city": locationPattern},
                {"location.state": locationPattern},
                {"location.zipcode": locationPattern},
            ],
        };
        //Only check for property if its not "All"
        if(propertyType && propertyType!=="All"){
            const typePattern = new RegExp(propertyType, "i");
            query.type = typePattern;
        }
        const properties = await Property.find(query);

        return new Response(JSON.stringify(properties), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response("Someting went wrong", {
            status: 500
        });
    }
}