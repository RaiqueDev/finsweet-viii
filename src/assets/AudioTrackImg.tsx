import { AudioTrackImgContainer } from "./styles";

export const AudioTrackImg = () => {
  return (
    <>
      <AudioTrackImgContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="432"
          height="256"
          fill="none"
          viewBox="0 0 432 256"
        >
          <path fill="#1AD993" d="M400 40h32v178h-32z"></path>
          <path fill="#503AE7" d="M320 0h32v256h-32z"></path>
          <path fill="#1AD993" d="M240 79h32v99h-32z"></path>
          <path fill="#503AE7" d="M160 40h32v178h-32z"></path>
          <path fill="#1AD993" d="M80 0h32v256H80z"></path>
          <path fill="#503AE7" d="M0 79h32v99H0z"></path>
        </svg>
      </AudioTrackImgContainer>
    </>
  );
}