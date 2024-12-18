import not_found from "@/assets/404.jpg"
const NotFound = () => {
  return <div className="w-full h-screen">
    <img src={not_found} alt="not_found" className="object-scale-down h-screen mx-auto" />
  </div>;
};

export default NotFound;
