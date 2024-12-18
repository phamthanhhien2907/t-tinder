import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import { apiGetCollection } from "@/services/collectionService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathImg } from "@/lib/constant";

const Cinema = ({ currentData }) => {
  const [collections, setCollections] = useState([]);
  const getCollection = async () => {
    const data = await apiGetCollection();
    if (data.success) setCollections(data.collections);
  };
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="w-full h-screen">
      <Tabs defaultValue="hot" className="w-full h-full">
        <div className="w-full bg-profileColor pt-4 flex flex-col">
          <h3 className="text-center text-xl text-white pb-4 max-sm:pb-0 max-sm:text-base">
            Rạp Chiếu Phim
          </h3>
          <TabsList className="w-full flex items-center max-sm:items-start justify-center gap-2 max-sm:gap-0">
            <TabsTrigger className="relative text-base text-white data-[state=active]:text-white transition-all duration-300 ease-linear
      after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-300 after:ease-linear data-[state=active]:after:w-1/2 data-[state=active]:after:left-[25%] max-sm:text-[11px]" value="hot">
              Phim Hot
            </TabsTrigger>
            <TabsTrigger className="relative text-base text-white data-[state=active]:text-white transition-all duration-300 ease-linear
      after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-300 after:ease-linear data-[state=active]:after:w-1/2 data-[state=active]:after:left-[25%] max-sm:text-[11px] " value="vn">
             Phim Việt Nam
            </TabsTrigger>
            <TabsTrigger className="relative text-base text-white data-[state=active]:text-white transition-all duration-300 ease-linear
      after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-300 after:ease-linear data-[state=active]:after:w-1/2 data-[state=active]:after:left-[25%] max-sm:text-[11px]" value="jp">
             Phim Nhật Bản
            </TabsTrigger>
            <TabsTrigger className="relative text-base text-white data-[state=active]:text-white transition-all duration-300 ease-linear
      after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-white after:transition-all after:duration-300 after:ease-linear data-[state=active]:after:w-1/2 data-[state=active]:after:left-[25%] max-sm:text-[11px] " value="hk">
             Phim Hong Kong
            </TabsTrigger>
            {/* <TabsTrigger className="text-xl text-white" value="gay">
              Gay
            </TabsTrigger> */}
          </TabsList>
        </div>
        <TabsContent value="hot">
          <div className="grid grid-cols-2 px-3 py-1 gap-2">
            {collections
              ?.filter((fill) => fill?.category?.includes("hot"))
              ?.map((collection) => (
                <>
                  <div className="relative mb-4 h-[200px] max-sm:h-[120px]">
                    <Link
                      key={collection?._id}
                      to={`/video/${collection?.title.replace(/ /g, "_")}/${
                        collection?._id
                      }/${currentData?._id}`}
                    >
                      <img
                        // src={`http://localhost:8080/images/${collection.image}`}
                        src={`${pathImg}/images/${collection?.image}`}
                        className="w-full h-full rounded-xl object-cover"
                        alt=""
                      />
                      <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                        <span  className="max-sm:text-sm">{collection.title}</span>
                        <span  className="max-sm:text-sm">Xem: {collection?.view?.length}</span>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="vn">
          <div className="grid grid-cols-2 px-3 py-1 gap-2">
            {collections
              ?.filter((fill) => fill?.category?.includes("vn"))
              ?.map((collection) => (
                <>
                  <div className="relative mb-4 h-[200px] max-sm:h-[150px]">
                    <Link
                      key={collection?._id}
                      to={`/video/${collection?.title.replace(/ /g, "_")}/${
                        collection?._id
                      }/${currentData?._id}`}
                    >
                      <img
                        // src={`http://localhost:8080/images/${collection.image}`}
                        src={`${pathImg}/images/${collection?.image}`}
                        className="w-full h-full rounded-xl"
                        alt=""
                      />
                      <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                        <span className="max-sm:text-sm">{collection.title}</span>
                        <span className="max-sm:text-sm">Xem: {collection?.view?.length}</span>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="jp">
          <div className="grid grid-cols-2 px-3 py-1 gap-2">
            {collections
              ?.filter((fill) => fill?.category?.includes("jp"))
              ?.map((collection) => (
                <>
                  <div className="relative mb-4 h-[200px] max-sm:h-[150px]">
                    <Link
                      key={collection?._id}
                      to={`/video/${collection?.title.replace(/ /g, "_")}/${
                        collection?._id
                      }/${currentData?._id}`}
                    >
                      <img
                        // src={`http://localhost:8080/images/${collection.image}`}
                        src={`${pathImg}/images/${collection?.image}`}
                        className="w-full h-full rounded-xl"
                        alt=""
                      />
                      <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                        <span className="max-sm:text-sm">{collection.title}</span>
                        <span className="max-sm:text-sm">Xem: {collection?.view?.length}</span>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="hk">
          <div className="grid grid-cols-2 px-3 py-1 gap-2">
            {collections
              ?.filter((fill) => fill?.category?.includes("hk"))
              ?.map((collection) => (
                <>
                  <div className="relative mb-4 h-[200px] max-sm:h-[150px]">
                    <Link
                      key={collection?._id}
                      to={`/video/${collection?.title.replace(/ /g, "_")}/${
                        collection?._id
                      }/${currentData?._id}`}
                    >
                      <img
                        // src={`http://localhost:8080/images/${collection.image}`}
                        src={`${pathImg}/images/${collection?.image}`}
                        className="w-full h-full rounded-xl"
                        alt=""
                      />
                      <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                        <span className="max-sm:text-sm">{collection.title}</span>
                        <span className="max-sm:text-sm">Xem: {collection?.view?.length}</span>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </TabsContent>
        {/* <TabsContent value="gay">
          {" "}
          <div className="grid grid-cols-2 px-3 py-1 gap-2">
            {collections
              ?.filter((fill) => fill?.category?.includes("gay"))
              ?.map((collection) => (
                <>
                  <div className="relative mb-4 h-[200px] max-sm:h-[150px]">
                    <Link
                      key={collection?._id}
                      to={`/video/${collection?.title.replace(/ /g, "_")}/${
                        collection?._id
                      }/${currentData?._id}`}
                    >
                      <img
                        // src={`http://localhost:8080/images/${collection.image}`}
                        src={`${pathImg}/images/${collection?.image}`}
                        className="w-full h-full rounded-xl"
                        alt=""
                      />
                      <div className="absolute w-full px-4 text-white  bg-[rgba(0,0,0,.4)] bottom-0 z-0 flex items-center justify-between">
                        <span className="max-sm:text-sm">{collection.title}</span>
                        <span className="max-sm:text-sm">Xem: {collection?.view?.length}</span>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default Cinema;
