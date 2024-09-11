export const VideoModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
      <div className="relative w-full max-w-4xl rounded-lg bg-white p-4">
        <div className="relative h-0 w-full pb-[56.25%]">
          <iframe
            src="https://player.vimeo.com/video/93951774"
            className="absolute left-0 top-0 h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
