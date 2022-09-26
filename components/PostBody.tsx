export type PostBodyProps = {
  htmlContent: string;
};

const PostBody = ({ htmlContent }: PostBodyProps) => (
  <div
    className={
      "text-justify sm:text-left max-w-2xl mx-auto text-body prose prose-lg sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl"
    }
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

export default PostBody;
