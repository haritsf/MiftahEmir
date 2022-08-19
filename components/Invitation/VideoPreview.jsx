const VideoPreview = () => {
  return (
    <div className="grid grid-rows-1 justify-center items-center">
      <p
        className="handwriting my-8 text-center text-4xl lg:text-6xl"
        style={{ color: "rgb(209 153 220)" }}
      >
        Engagement
      </p>
      <div style={{ textAlign: "center" }}>
        <video
          // className="justify-center items-center"
          controls
          src={"/MiftahEmir-Engage-Small.mp4"}
          //   style={{ width: "400px", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default VideoPreview;
