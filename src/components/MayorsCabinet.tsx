import { CabinetMember } from "./cabinet/CabinetMember";
import { cabinetMembers } from "@/data/cabinetMembers";

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
            <CabinetMember
              key={member.id}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}