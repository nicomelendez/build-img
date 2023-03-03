import { IconCloudBinary } from "./Icons";

export default function Footer() {
  return (
    <footer className="p-5 flex flex-col text-xs sm:gap-4 lg:flex-row lg:gap-0 justify-around items-center text-white lg:text-xl w-full mx-auto bg-[#07182E] rounded-t-lg">
      
      <a
        className="text-center"
        href="https://cloudinary.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <span className="">Hecho con</span> <IconCloudBinary />
      </a>

      <div>
        <div className="card2 scale-[0.7] sm:scale-100 mx-auto">
          <span>Contactos</span>
          <a className="social-link" href="https://github.com/nicomelendez">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1024"
              height="1024"
              fill="none"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#1B1F23"
                fillRule="evenodd"
                d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a className="social-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="#000"
              version="1.1"
              viewBox="0 0 330.001 330.001"
              xmlSpace="preserve"
            >
              <g>
                <path d="M173.871 177.097a14.982 14.982 0 01-8.87 2.903 14.98 14.98 0 01-8.871-2.903L30 84.602.001 62.603 0 275.001c.001 8.284 6.716 15 15 15L315.001 290c8.285 0 15-6.716 15-14.999V62.602l-30.001 22-126.129 92.495z"></path>
                <path d="M165.001 146.4L310.087 40.001 19.911 40z"></path>
              </g>
            </svg>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/nicol%C3%A1s-mel%C3%A9ndez-60ba32160/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="#000"
              version="1.1"
              viewBox="0 0 310 310"
              xmlSpace="preserve"
            >
              <g>
                <path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5z"></path>
                <path d="M41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341z"></path>
                <path d="M230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      
    </footer>
  );
}
