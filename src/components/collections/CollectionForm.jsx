import { Separator } from "../ui/separator";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Delete from "../custom ui/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { apiCreateCollection, apiGetCollectionById, apiUpdateCollectionById } from "@/services/collectionService";

const CollectionForm = ({ initialData }) => {
  const navigate = useNavigate();
  const [isLoadding, setIsLoadding] = useState(false);
  const [collection, setCollection] = useState(null)
  const [invisible, setInvisible] = useState(false);
  const { id } = useParams();
  const { register, handleSubmit, watch, setValue, getValues, onChange } =
    useForm({
      defaultValues: initialData
        ? initialData
        : {
            image: "",
            title: "",
            video: "",
            category: "",
          },
    });
    const getCollectionDetails = async(id) => {
      const data = await apiGetCollectionById(id)
      if(data?.success) setCollection(data?.collections)
    }
    console.log(collection)

    useEffect(() => {
      getCollectionDetails(id)
    }, [id])
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const onSubmit = async (values) => {
    try {
      setIsLoadding(true);
      // const url = initialData
      //   ? `/api/collections/${initialData?._id}`
      //   : "/api/collections/new";
      if(location.pathname === "/collection/new") {
        const formData = new FormData();
        const selectedFile = getValues().image[0];
        const selectedVideo = getValues().video[0];
        if (selectedFile && selectedVideo) {
          formData.append("images", selectedFile, selectedFile.name);
          formData.append("videos", selectedVideo, selectedVideo.name);
        }

        formData.append("title", values.title);
        formData.append("category", values.category);
        const res = await apiCreateCollection(formData);
        if (res.success) {
          setIsLoadding(false);
          toast.success(`Collection ${initialData ? "updated" : "created"} `);
          navigate("/");
        }
      } else{
        const formData = new FormData();
        const selectedFile = getValues().image[0];
        const selectedVideo = getValues().video[0];
        if (selectedVideo?.name && selectedVideo?.name ) {
          formData.append("images", selectedFile, selectedFile.name);
          formData.append("videos", selectedVideo, selectedVideo.name);
        }else{
          formData.append("images", collection?.image);
          formData.append("videos", collection?.video);
        }

        formData.append("title", values.title);
        formData.append("category", values.category);
        const res = await apiUpdateCollectionById(id, formData);
        if (res.success) {
          setIsLoadding(false);
          toast.success(`Collection ${initialData ? "updated" : "created"} `);
          // window.location.href = "/collections";
          navigate("/");
        }
      }
    } catch (error) {
      console.log("[collections_POST]", error);
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="p-10">
      {initialData ? (
        <div className="flex items-center justify-center gap-4">
          <p className="text-2xl font-semibold items-center">Chỉnh sửa phim</p>
          <Delete item="collection" id={initialData?._id} />
        </div>
      ) : (
        <p className="text-2xl font-semibold items-center text-center">
          Thêm phim mới
        </p>
      )}

      <Separator className="bg-grey-1 mt-4 mb-7" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-4 flex-col">
          <label>Tên phim</label>
          <Input
            {...register("title")}
            placeholder="Tên tiêu đề"
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="flex gap-4 flex-col">
          <label htmlFor="category">Thể loại:</label>
          <select
            onClick={() => setInvisible(!invisible)}
            className="border px-4 py-2 border-black"
            {...register("category")}
          >
            {!invisible && <option value="">Thể loại</option>}
            <option value="hot">Hot</option>
            <option value="vn">Việt Nam</option>
            <option value="jp">Nhật Bản</option>
            <option value="hk">Hong Kong</option>
            <option value="gay">Gay</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-4">
          <label>Chọn ảnh phim</label>
          <Input
            type="file"
            {...register("image", { onChange })}
            placeholder="Image"
            // onKeyDown={handleKeyPress}
            // accept="image/*"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <label>Chọn video</label>
          <Input
            type="file"
            {...register("video")}
            placeholder="video"
            onKeyDown={handleKeyPress}
          />
        </div>
        {/* <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

        <div className="flex gap-10">
          <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-700">
            Gửi
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white hover:bg-blue-700"
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CollectionForm;
