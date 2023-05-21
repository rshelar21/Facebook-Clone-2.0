import StoryCard from "./StoryCard";

const stories = [
    {
        id : 1,
        name : "Sonny Sangha",
        src : "https://links.papareact.com/zof",
        profile : "https://links.papareact.com/l4v",
    },
    {
        id : 2,
        name : "Elon Musk",
        src : "https://links.papareact.com/zof",
        profile : "https://links.papareact.com/l4v",
    },
    {
        id : 3,
        name : "Elon Musk",
        src : "https://links.papareact.com/zof",
        profile : "https://links.papareact.com/l4v",
    },
    {
        id : 4,
        name : "Elon Musk",
        src : "https://links.papareact.com/zof",
        profile : "https://links.papareact.com/zvy",
    },
    {
      id : 5,
      name : "Elon Musk",
      src : "https://links.papareact.com/zof",
      profile : "https://links.papareact.com/zvy",
  },
    
]

const Stories = () => {
  return (
    <>
      <div className="flex justify-between space-x-3 mx-auto">
      {
        stories.map((item, index) => (
            <StoryCard key={item.id} src={item.src} profile={item.profile} name={item.name}/>
        ))
      }
      </div>
    </>
  );
};

export default Stories;
