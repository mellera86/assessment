import { Card, CardBody } from "@shared/components";
import { Organization } from "@api";

interface OrganizationsCardProps {
  organizations?: Organization[];
}

const OrganizationsCard = ({ organizations }: OrganizationsCardProps) => {
  if (!organizations)
    return <div>This user does not belong to any organizations</div>;

  return (
    <Card>
      <CardBody>
        <div className="text-xl underline mb-1">Organizations</div>
        {organizations.map((org, idx) => {
          return (
            <span key={org.id} className="text-center">
              {org.login}{" "}
              {idx < organizations.length - 1 && <span>&#x2022; </span>}
            </span>
          );
        })}
      </CardBody>
    </Card>
  );
};

export { OrganizationsCard };
