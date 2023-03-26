import React, { useContext } from "react";
import {
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiLink,
} from "react-icons/hi2";
import { FiTwitter } from "react-icons/fi";
import ProfileLink from "./ProfileLink";
import Statics from "./Statics";
import { GlobalContext } from "../context/infoContext";

const Profile = () => {
  const { user } = useContext(GlobalContext);

  const date = new Date(user?.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white py-8 px-6 mt-6 rounded-lg shadow-lg shadow-gray-300 dark:shadow-none dark:bg-[#1f2a48] ">
      <div className="flex items-center gap-6">
        <img
          className="h-20 w-20 object-cover rounded-full"
          src={user?.avatar_url}
          alt="Avatar"
        />

        <div>
          <h1 className="text-lg font-semibold text-gray-600 dark:text-[#f0f1f2]">
            {user?.name}
          </h1>
          <p className="text-blue-400 text-[15px]">@{user?.login}</p>
          <p className="text-gray-400 dark:text-slate-300">
            Joined {formattedDate}
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-[15px] leading-6 mt-6 dark:text-gray-300">
        {user?.bio
          ? user?.bio
          : "Experienced, passionate developer with a love for open-source and collaboration. Lifelong learner. Check out my GitHub for projects and let's build amazing software together!"}
      </p>

      <div className="flex items-center justify-between bg-[#eaeffc] py-4 px-8 mt-5 rounded-lg dark:bg-[#141c2f]">
        <Statics title="Repos" count={user?.public_repos} />
        <Statics title="Follwers" count={user?.followers} />
        <Statics title="Followings" count={user?.following} />
      </div>

      <div className="mt-7 lg:grid grid-cols-2">
        <ProfileLink Icon={HiOutlineMapPin} title={user?.location} />
        <ProfileLink Icon={HiLink} title={user?.blog} />
        <ProfileLink
          Icon={FiTwitter}
          title={`https://twitter.com/${user?.twitter_username}`}
        />
        <ProfileLink Icon={HiOutlineBuildingOffice2} title={user?.company} />
      </div>
    </div>
  );
};

export default Profile;
