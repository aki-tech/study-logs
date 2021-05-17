const UserCard = ({name, point, imageURL}) => {
  return (<div className="rounded shadow p-6 bg-white h-40">
    <div className="flex items-center space-x-4">
      <img src={imageURL} alt="" className="w-10 h-10 rounded-full bg-black" />
      <div>
        <p>{name}</p>
        <p className={"opacity-30"}>{point}</p>
      </div>
    </div>
  </div>)
};

export default UserCard;