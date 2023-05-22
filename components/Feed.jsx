import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

const Feed = () => {
  return (
    <>
      <div className="scroll-smooth w-full m-2 max-w-[600px] h-screen overflow-y-auto scrollbar-hide pb-28">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl scroll-smooth">
          {/* <Stories />    */}
          <InputBox />
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Feed;
