// Components
import CoverImage from "components/CoverImage";
import PostTitle from "components/PostTitle";

type PostHeaderProps = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: PostHeaderProps) => {
  return (
    <>
      <PostTitle className="mb-3">{title}</PostTitle>
      <span className="text-lg block text-center text-secondary mb-3">
        {new Date(date).toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
      <div className="mb-8 md:mb-16 sm:mx-0 text-center">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
