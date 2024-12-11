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
    name: "Barrister Micheal Okole Sakwe",
    title: "4th Deputy Mayor",
    imageUrl: "/lovable-uploads/53e075f1-7087-49c7-87a5-26b58d96f068.png"
  },
  {
    id: 2,
    name: "Mr. Njume Wilson",
    title: "Secretary General",
    imageUrl: "/lovable-uploads/97c0cf7f-19b8-42e8-b591-473baa1542d5.png"
  },
  {
    id: 3,
    name: "Mr. Manyaka Gift",
    title: "3rd Deputy Mayor",
    imageUrl: "/lovable-uploads/5957912f-1a16-49c3-911e-9f58dc24567c.png"
  },
  {
    id: 4,
    name: "Mrs Hannah Wulu Njimba",
    title: "2nd Deputy Mayor",
    imageUrl: "/lovable-uploads/d4feef18-5494-4d2e-88c6-693edc1c9c1c.png"
  },
  {
    id: 5,
    name: "Mr Esoe Kingsley",
    title: "1st Deputy Mayor",
    imageUrl: "/lovable-uploads/d69bbce9-a084-414a-9ca5-2b38409c4cca.png"
  },
  {
    id: 6,
    name: "Henry Matuke Nesah",
    title: "Finance Officer",
    imageUrl: "/lovable-uploads/5d99e8b8-293a-42a7-a91d-9e990ff77a7f.png"
  },
  {
    id: 7,
    name: "Mme Takang Regina Agbekome Mbu",
    title: "Municipal Treasurer",
    imageUrl: "/lovable-uploads/0138634a-7655-493d-b46a-f1ba49394778.png"
  },
  {
    id: 8,
    name: "Mrs Mordesta Balana Mokambe",
    title: "Deputy Treasurer",
    imageUrl: "/lovable-uploads/90a7429b-2213-4150-a045-77472fdc0e58.png"
  },
  {
    id: 9,
    name: "Mrs Sherlly Nasale Lobe",
    title: "Stores Accountant",
    imageUrl: "/lovable-uploads/961677e4-5d04-4b1e-9cd2-6bf35e078aaf.png"
  },
  {
    id: 10,
    name: "Edward Nkongho",
    title: "Council Development Officer",
    imageUrl: "/lovable-uploads/0a2d74cf-b76b-43ae-9054-2ad245107e04.png"
  },
  // Placeholder members for remaining positions
  {
    id: 11,
    name: "Cabinet Member 11",
    title: "Cabinet Title",
    imageUrl: ""
  },
  {
    id: 12,
    name: "Cabinet Member 12",
    title: "Cabinet Title",
    imageUrl: ""
  }
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