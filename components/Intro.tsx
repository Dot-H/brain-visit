import DownloadButton from "./DownloadButton";

const Intro = () => {
  return (
    <section className="flex-col flex mt-16 mb-24 text-center">
      <h1 className="text-6xl leading-normal">
        Alexandre Bernard&apos;s website
      </h1>
      <p className="mt-4 text-3xl text-secondary">
        Developer, wannabe mountainer and curious minded guy
      </p>
      <DownloadButton href="/assets/Alexandre_BERNARD_en.pdf">
        Get my resume
      </DownloadButton>
    </section>
  );
};

export default Intro;
