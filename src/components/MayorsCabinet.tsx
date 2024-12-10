import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CabinetMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
}

const cabinetMembers: CabinetMember[] = [
  {
    id: 1,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: "/lovable-uploads/53e075f1-7087-49c7-87a5-26b58d96f068.png"
  },
  {
    id: 2,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: "/lovable-uploads/97c0cf7f-19b8-42e8-b591-473baa1542d5.png"
  },
  {
    id: 3,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: "/lovable-uploads/5957912f-1a16-49c3-911e-9f58dc24567c.png"
  },
  {
    id: 4,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: "/lovable-uploads/d4feef18-5494-4d2e-88c6-693edc1c9c1c.png"
  },
  {
    id: 5,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: "/lovable-uploads/d69bbce9-a084-414a-9ca5-2b38409c4cca.png"
  },
  // Placeholder members with default avatar
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 6,
    name: "Cabinet Member Name",
    title: "Cabinet Title",
    imageUrl: ""
  }))
];

export function MayorsCabinet() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Mayor's Cabinet
          </h2>
          <p className="text-lg text-gray-600">
            Meet the dedicated team serving Mbonge Council
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabinetMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-32 h-32">
                  {member.imageUrl ? (
                    <AvatarImage
                      src={member.imageUrl}
                      alt={member.name}
                      className="object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-4xl">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    {member.title}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}