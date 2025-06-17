import MovieList from "./components/Cine/MovieList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <div class="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
