import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

// xl:mr-40  mr-4
// h-screen pb-44 pt-6 overflow-y-auto  scrollbar-hide flex-grow mx-2 scroll-smooth
const Feed = () => {
  return (
    <>
      <div className="scroll-smooth w-full m-2 sm:ml-4 max-w-[600px] h-screen overflow-y-auto scrollbar-hide pb-28">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl scroll-smooth">
          {/* <Stories />    */}
          <InputBox/>
          <Posts/>
        </div>
      </div>
    </>
  );
};

export default Feed;
