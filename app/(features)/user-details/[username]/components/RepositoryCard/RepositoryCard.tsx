import { BiGitRepoForked, BiLinkExternal } from "react-icons/bi";
import { Card, CardBody } from "@shared/components";
import { Repository } from "@api";

interface RepostitoryCardProps {
  repository?: Repository;
}
const RepostitoryCard = ({ repository }: RepostitoryCardProps) => {
  const created_at = repository?.created_at
    ? new Date(repository?.created_at).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Card>
      <CardBody className="flex flex-col gap-2 h-full">
        <div className="flex gap-1 items-center text-xl overflow-hidden whitespace-nowrap">
          <BiGitRepoForked />
          <span className="overflow-ellipsis">{repository?.name}</span>
          {repository?.html_url && (
            <a href={repository?.html_url} className="ml-auto" target="_blank">
              <BiLinkExternal />
            </a>
          )}
        </div>
        <div>{repository?.description}</div>
        <span className="self-end mt-auto">
          {created_at}
          {repository?.language && (
            <span> &#x2022; {repository?.language}</span>
          )}
        </span>
      </CardBody>
    </Card>
  );
};

export { RepostitoryCard };
