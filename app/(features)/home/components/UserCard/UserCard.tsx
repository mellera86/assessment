"use client";
import { Card, CardBody } from "@/app/shared/components";
import { Avatar } from "@shared/components";
import { User } from "@api";
import { useRouter } from "next/navigation";

interface UserCardProps {
  user?: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const router = useRouter();

  if (!user) return null;

  return (
    <Card
      className="cursor-pointer hover:shadow-xl"
      data-testid="user-card"
      onClick={() => router.push(`/user-details/${user.login}`)}
    >
      <CardBody className="flex flex-col  gap-2 items-center">
        <Avatar
          src={user.avatar_url!}
          alt="user avatar"
          width={120}
          height={120}
        />
        <span className="text-xl">{user.login}</span>
      </CardBody>
    </Card>
  );
};

export { UserCard };
