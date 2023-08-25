import { FC } from 'react';
import { User } from 'next-auth';
import { Avatar, AvatarFallback } from './ui/Avatar';
import Image from 'next/image';

interface UserAvatarProps {
  user: Pick<User, 'name' | 'image'>;
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  return (
    <Avatar>
      {' '}
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image />
        </div>
      ) : (
        <AvatarFallback></AvatarFallback>
      )}{' '}
    </Avatar>
  );
};

export default UserAvatar;
