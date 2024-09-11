export const TeamCard = ({ image, title, name }) => {
  return (
    <div className="mx-4 mb-4 flex flex-col shadow-md">
      <img className="mb-4" src={image} />
      <div className="px-7 py-2">
        <span className="font-mukta text-lg font-extralight uppercase leading-8 text-[#CED4DA]">{title}</span>
        <h2 className="font-abril text-2xl">{name}</h2>
      </div>
    </div>
  );
};
