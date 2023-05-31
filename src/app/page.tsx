import UserCard from "@/templates/user-card";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center bg-[url('https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover">
      <div>
        <UserCard />
      </div>
    </main>
  );
}
