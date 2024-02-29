"use client";
import React from "react";
import UserAvatar from "./user-avatar";
import { useOthers, useSelf } from "@/liveblocks.config";
import { getRandomColorFromCnId } from "@/lib/utils";

const MAX_USERS_TO_SHOW = 3;

const Users = () => {
  const me = useSelf();
  const otherUsers = useOthers();
  const hasMoreUsers = otherUsers.length > MAX_USERS_TO_SHOW;
 
  return (
    <div className="absolute flex gap-1 h-12 min-w-32 items-center p-1.5 justify-start rounded-md top-2 right-2 shadow-md bg-white">
      <div className="">
        <UserAvatar
          src={me?.info?.avatar}
          fallback="OU"
          borderColor={getRandomColorFromCnId(me.connectionId)}
          name={me?.info?.name + " (You)"}
        />
      </div>

      {otherUsers.slice(0, MAX_USERS_TO_SHOW).map((u, i) => (
        <div
          key={u.id}
          style={{
            zIndex: i + 3,
          }}
          className="-translate-x-3"
        >
          <UserAvatar
            src={u.info?.avatar}
            fallback={
              u.info?.name ? u.info?.name![u.info.name?.length! - 1] : "N/A"
            }
            borderColor={getRandomColorFromCnId(u.connectionId)}
            name={u.info?.name}
          />
        </div>
      ))}

      {hasMoreUsers && (
        <div
          style={{
            zIndex: 20,
          }}
          className="-translate-x-3"
        >
          <UserAvatar
            fallback={`+${otherUsers.length - MAX_USERS_TO_SHOW}`}
            name={`You and ${otherUsers.length - MAX_USERS_TO_SHOW} others`}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
