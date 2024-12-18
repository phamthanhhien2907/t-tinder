import { ChevronRight } from "lucide-react";
import SlickSlider from "../SlickSlider";
import danhgia1 from "@/assets/danhgia1.jpg";
import danhgia2 from "@/assets/danhgia2.jpg";
import danhgia3 from "@/assets/danhgia3.jpg";
import danhgia4 from "@/assets/danhgia4.jpeg";
import danhgia5 from "@/assets/danhgia5.jpg";
import danhgia6 from "@/assets/danhgia6.png";
import { apiGetCollection } from "@/services/collectionService";
import { useEffect, useState } from "react";
import CustomSlide from "../SlickSlider/cinema";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Marquee from "react-fast-marquee";
import CampaignIcon from '@mui/icons-material/Campaign';
import { pathImg } from "@/lib/constant";
const HomePage = ({ currentData }) => {
  const dispatch = useDispatch();

  const [collection, setCollection] = useState(null);
  const getCollection = async () => {
    const data = await apiGetCollection();
    if (data.success) setCollection(data.collections);
  };
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="w-full h-screen overflow-x-hidden tabs-list">
      <SlickSlider />
      <div className="w-full bg-[#fffbe8] flex gap-4 px-4 text-red-500">
        <CampaignIcon sx={{ fontSize : "30px" }}/>
        <Marquee>
          Chào mừng đã đến CLUB SKY 36 Dịch vụ cung cấp gái gọi, PGA, Baby 63 tỉnh thành. Dịch vụ uy tín nhất VN, báo giá trực tiếp, thông tin minh bạch rõ ràng. Cam kết phục vụ quý khách tận tình 24/24.Bảo Mật - Uy Tín - Chất Lượng
        </Marquee>
      </div>
      <div className="flex items-center px-4 py-4 justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491]  font-semibold">
            Gói nhiệm vụ tình 1 đêm
          </span>
        </div>
        <div
          className="flex items-center gap-2 text-gray-500 cursor-pointer"
          onClick={() => {
            localStorage.setItem("page", 1);
            window.location.reload();
          }}
        >
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <div className="flex items-center justify-between px-20 py-2 max-sm:px-2">
        <div className="flex flex-col items-center  gap-2 cursor-pointer">
          <img
            className="w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[50px] rounded-xl"
            src={danhgia1}
            alt="evalute"
          />
          <span className="text-base max-sm:text-xs">Nâng cấp VIP 1</span>
        </div>
        <div className="flex flex-col items-center  gap-2 cursor-pointer">
          <img
            className="w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[50px] rounded-xl"
            src={danhgia2}
            alt="evalute"
          />
          <span className="text-base max-sm:text-xs">Nâng cấp VIP 2</span>
        </div>
        <div className="flex flex-col items-center  gap-2 cursor-pointer">
          <img
            className="w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[50px] rounded-xl"
            src={danhgia3}
            alt="evalute"
          />
          <span className="text-base max-sm:text-xs">Nâng cấp VIP 3</span>
        </div>
      </div>
     
      
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-base font-semibold">
            Phổ biến
          </span>
        </div>
        <div
          className="flex items-center gap-2 text-gray-500 cursor-auto"
          onClick={() => {
            localStorage.setItem("page", 3);
            window.location.reload();
          }}
        >
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <CustomSlide collection={collection} currentData={currentData} />
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-base font-semibold">
            Đề xuất
          </span>
        </div>
        <div
          className="flex items-center gap-2 text-gray-500 cursor-pointer"
          onClick={() => {
            localStorage.setItem("page", 3);
            window.location.reload();
          }}
        >
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 gap-4">
        {collection
          ?.filter((fill) => fill?.category?.includes("jp"))
          ?.map((col) => (
            <Link
              key={col?._id}
              to={`/video/${col?.title}/${col?._id}/${currentData?._id}`}
              className="relative"
            >
              {/* <img
              className="w-[186px] h-[158px] rounded-xl bg-gray-100 "
              src={`http://localhost:8080/images/${col?.image}`}
              alt=""
            /> */}
              <img
                className="rounded-xl bg-gray-100 h-[200px] max-sm:h-[120px] object-cover"
                src={`${pathImg}/images/${col?.image}`}
                alt=""
              />
              <div className="absolute bottom-0  w-full">
                <div className="w-full bg-[rgba(0,0,0,.4)] flex items-center justify-between px-4">
                  <span className="text-white">{col?.title}</span>
                  <span className="text-white">{col?.view?.length}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <span className="w-full h-20 pt-12 pb-20 flex justify-center font-semibold max-sm:text-sm">
        Đang cập nhật thêm video mới
      </span>
    </div>
  );
};

export default HomePage;
