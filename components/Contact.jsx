import Image from "next/image"
const Contact = ({item}) => {
  return (
    <>
      <div className="flex items-center space-x-2 mb-2 relative hover:bg-gray-200 cursor-pointer 
      p-2 rounded-xl">
      <Image
        className="rounded-full"
        src={item.src}
        width={50}
        height={50}
        alt="contact"
      />
      <p>{item.name}</p>
      <div className="absolute h-3 rounded-full left-7 bg-green-400 bottom-2 w-3"/>
      </div>
    </>
  );
};

export default Contact;
