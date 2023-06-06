import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
function Card(probs) {
  return (
    <>
      <div className="flex  items-stretch space-y-8 m-14 ">
        <img
          src={probs.imageUrl}
          alt=""
          className="max-w-sm  rounded-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 h-"
        />
        <div className="ml-8 space-y-2">
          <div className="flex items-baseline">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#f55a5a" }}
            />
            <span className="text-base font-bold tracking-widest ml-1">
              {probs.location}
            </span>{" "}
            <a
              href={probs.googleMapsUrl}
              className="text-gray-500 text-sm underline ml-4"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="text-4xl font-bold">{probs.title}</h1>
          <h4 className="font-bold">
            {probs.startDate}-{probs.endDate}
          </h4>
          <p className="text-gray-500 text-xs">{probs.description}</p>
        </div>
      </div>
      <hr className="m-14" />
    </>
  );
}
export default Card;

/*
 */
