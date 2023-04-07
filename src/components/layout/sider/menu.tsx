import { AiFillProfile, AiOutlineAlignLeft, AiOutlineBuild, AiOutlineLike, AiOutlineUser } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaFileUpload } from "react-icons/fa";
import { BiStreetView } from "react-icons/bi";
import { RiChatFollowUpFill } from "react-icons/ri";
import { MdEditNote, MdSave } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import route from "../../../router/routes";

export interface ItemMenus {
  icon: React.ReactNode;
  link?: string;
  children?: ItemMenus[];
  label: string | JSX.Element;
}

function item(label: string, link?: string, icon?: React.ReactNode, children?: ItemMenus[]) {
  return { icon, link, label, children };
}

const uRouter = route.USER;
const eRouter = route.EMPLOYER;
const aRouter = route.ADMIN;

export const menuUsers: ItemMenus[] = [
  item("Quản lý tài khoản", undefined, undefined, [item("Tài khoản của bạn", uRouter.home, <AiFillProfile />)]),
  item("Quản lý hồ sơ", undefined, undefined, [
    item("Hồ sơ của bạn", uRouter.profile, <ImProfile />),
    item("Tải lên CV", uRouter.cv, <FaFileUpload />),
  ]),
  item("Quản lý việc làm", undefined, undefined, [
    item("Việc làm đã ứng tuyển", uRouter.jobApplied, <MdEditNote />),
    // item("Việc làm đã lưu", uRouter.savedJobs, <MdSave />),
    item("Việc làm đã lưu", uRouter.likedJob, <AiOutlineLike />),
  ]),
  item("Công ty", undefined, undefined, [
    // item("Nhà tuyển dụng xem hồ sơ bạn", uRouter.recruiterViewedTheProfile, <BiStreetView />),
    item("Công ty đang theo dõi", uRouter.recruitersAreWatching, <RiChatFollowUpFill />),
  ]),
];
export const menuEmployer: ItemMenus[] = [
  item("Quản lý tài khoản", undefined, undefined, [item("Tài khoản của bạn", eRouter.profile, <AiFillProfile />)]),
  item("Tuyển dụng", undefined, undefined, [
    item("Tin tuyển dụng", eRouter.recruitment, <ImProfile />),
    item("Quản lý CV", eRouter.cvApply, <CgProfile />),
  ]),
  item("Công ty", undefined, undefined, [
    item("Công ty của bạn", eRouter.company, <MdEditNote />),
    item("Nhân viên", eRouter.employee, <MdSave />),
  ]),
  item("Ứng viên", undefined, undefined, [item("Tìm kiếm ứng viên", eRouter.candidates, <BiStreetView />)]),
];

export const menuAdmin: ItemMenus[] = [
  item("Quản lý tài khoản", undefined, undefined, [item("Tài khoản của bạn", aRouter.home, <AiFillProfile />)]),
  item("Quản lý", undefined, undefined, [
    item("Công ty", aRouter.company, <MdEditNote />),
    item("Tin tuyển dụng", aRouter.job, <AiOutlineBuild />),
    item("Người dùng", aRouter.user, <AiOutlineUser />),
    item("Blog", aRouter.user, <AiOutlineAlignLeft />),
  ]),
];
