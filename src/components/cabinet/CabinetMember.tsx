import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CabinetMemberProps {
  name: string;
  title: string;
  imageUrl: string;
}

export function CabinetMember({ name, title, imageUrl }: CabinetMemberProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center text-center space-y-4">
        <Avatar className="w-32 h-32">
          {imageUrl ? (
            <AvatarImage
              src={imageUrl}
              alt={name}
              className="object-cover"
            />
          ) : (
            <AvatarFallback className="bg-gray-200 text-gray-600 text-4xl">
              {name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {name}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            {title}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}