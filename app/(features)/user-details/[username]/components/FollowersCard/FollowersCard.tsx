import { Card, CardBody } from "@shared/components";
import { User } from "@api";
import { useMemo } from "react";

interface FollowersCardProps {
  followers?: User[];
}

const FollowersCard = ({ followers }: FollowersCardProps) => {
  const slice = useMemo(() => {
    return followers?.slice(0, 5);
  }, [followers]);

  if (!followers) return <div>This user does not have any followers</div>;

  return (
    <Card>
      <CardBody>
        <div className="text-xl underline mb-1">Top Followers</div>
        {slice?.map((follower, idx) => {
          return (
            <span key={follower.id} className="text-center">
              {follower.login}{" "}
              {idx < slice.length - 1 && <span>&#x2022; </span>}
            </span>
          );
        })}
      </CardBody>
    </Card>
  );
};

export { FollowersCard };
