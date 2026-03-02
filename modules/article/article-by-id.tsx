import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import NavbarPage from "../navbar/navbar-page";
import ArticlePopular from "./components/article-popular";
import ContentArticle from "./components/content-article";
import TagShared from "./components/tag-shared";

export default function ArticleIdComponent({ data }: any) {
  return (
    <>
      <NavbarPage />
      <div className="grid lg:grid-cols-3 gap-8 mx-8 my-20 md:m-20">
        <ContentArticle data={data} />
        <ArticlePopular excludeId={data.id} />
        <TagShared />
      </div>
      <Footer />
    </>
  );
}
