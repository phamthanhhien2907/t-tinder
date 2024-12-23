import { logout } from "@/stores/actions/authAction";
import { getCurrent } from "@/stores/actions/userAction";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentData } = useSelector((state) => state.user);
  const { t } = useTranslation('global');

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <div className="h-screen">
      <div className="relative w-full mx-auto">
        <div className="sticky w-full top-0">
          <div className="w-full h-[50px] bg-profileColor">
            <ChevronLeft
              onClick={() => {
                localStorage.setItem("page", 4);
                navigate("/");
              }}
              className="absolute top-2 z-30 left-4 text-white cursor-pointer"
              size={30}
            />
            <span className=" text-xl text-white absolute top-2 left-[40%]">
              {t("setting.settings")}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <div
            className="flex justify-between px-4 py-2 cursor-pointer"
            onClick={() => navigate("/information")}
          >
            <span>{t("setting.information")}</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div>
          <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
          <div
            className="flex justify-between px-4 py-2 cursor-pointer"
            onClick={() => navigate(`/setPassword/${currentData?._id}`)}
          >
            <span>{t("setting.changePassword")}</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div>
          <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
          {/* <div className="flex justify-between px-4 py-2">
            <span>Ngôn ngữ</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div> */}
        </div>
        <div className="px-4 py-8">
          <button
            className="flex items-center w-full  bg-profileColor h-12 justify-center text-white rounded-xl"
            onClick={() => dispatch(logout())}
          >
            {t("setting.logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
