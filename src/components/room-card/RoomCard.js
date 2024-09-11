export const RoomCard = ({ image, title, descriptions, link, isImageFirst }) => {
  return (
    <div className="grid w-full grid-cols-2">
      <div
        className={`w-full bg-cover bg-center ${isImageFirst ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={`px-20 py-24 ${isImageFirst ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
        <h2 className="mb-2 font-abril text-4xl">{title}</h2>
        {descriptions.map((desc) => {
          return <p className="mb-4 font-mukta text-lg font-extralight leading-8 text-[#6C757D]">{desc}</p>;
        })}
        <button className="mb-4 mt-12 rounded-md border-2 border-teal px-7 py-2 font-mukta text-base tracking-widest text-[#212529] hover:bg-teal hover:text-white">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
