import { Link } from "react-router-dom";
import Delete from "../custom ui/Delete";
import { Edit } from "lucide-react";
export const columns = [
  {
    accessorKey: "username",
    header: "Tên đăng nhập",
    cell: ({ row }) => (
      <Link to={`/customer/${row.original._id}`} className="hover:text-red-1">
        {row.original.username}
      </Link>
    ),
  },

  // {
  //   accessorKey: "role",
  //   header: "Vai trò",
  //   cell: ({ row }) => <div>{row.original.role }</div>,
  // },
  {
    accessorKey: "creditCartOfBank",
    header: "Số tài khoản",
    cell: ({ row }) => <div>{row.original.creditCartOfBank }</div>,
  },
  {
    accessorKey: "nameOfBank",
    header: "Tên tài khoản",
    cell: ({ row }) => <div>{row.original.nameOfBank }</div>,
  },
  {
    accessorKey: "nameOfUser",
    header: "Người thụ hưởng",
    cell: ({ row }) => <div>{row.original.nameOfUser }</div>,
  },
  {
    accessorKey: "withDraw",
    header: "Số tiền hiện tại",
    cell: ({ row }) => (
      <div>{row.original.withDraw.toLocaleString("vi-VN") + "₫"}</div>
    ),
  },
  // {
  //   header: "Chỉnh sửa",
  //   id: "actions",
  //   cell: ({ row }) => <Edit className="fill-blue-500 w-12 h-14 flex items-center justify-center text-white hover:fill-blue-700 cursor-pointer" item="customers"  id={row.original._id} />,
  // },
  {
    header: "Xóa",
    id: "actions",
    cell: ({ row }) => <Delete item="customers" id={row.original._id} />,
  },
];
