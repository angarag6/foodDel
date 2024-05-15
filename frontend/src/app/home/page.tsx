import Benefits from "@/components/Benefits";
import TopBar from "../../components/TopBar";
import Footer from "@/components/Footer";
import BackPicture from "@/components/icons/BackPicture";
import Foods from "@/components/Foods";
import Star from "@/components/icons/Star";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <TopBar />
      <div className="bg-[#18BA51] relative w-[1440px] h-[788px] px-[120px] py-[175px] flex">
        <div className="w-[50%] flex flex-col gap-[23px] justify-center">
          <p className="text-white text-[55px] w-[384px] leading-[90%]">
            Pinecone Food delivery
          </p>
          <hr className="w-[383px]" />
          <p className="text-white text-[22px] w-[384px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            className="z-20"
            src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAgJ14nSS24E04nWC~uDFbmzKlF-IlRL8JniwjzlWwOyYDiAyfbPC5Bg0dLTMaym8PyNqEMrWWVtXyRWcZDWcr2XrBhMe2upyhQ5NMnncZudgYeXP38y751GVdPxHMqdUe~U~kTCSDt5OYlwlYNEBbTXJeDW-XPBED5DEdzIzRYINSyAJwhi6KoYVDlF4ru5EyLQwJab1DCbCtF7gQRSIi6khXM4TWhTu5ZuxzupiuaOoNO-Ytadxox73ZjPXNTw5BJXaO55a~c-4hisGfnmbYlh2v18x1otGkgTbDo~UZbLi8Jhzlma8hQob3c0iqRgwb9qtDjC5d5fCPyg~W8D0g__"
            alt=""
          />
          <img
            className="z-30 w-[313px] h-[313px] absolute right-0 bottom-0"
            src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9M4eauP8jceRQpl7Mr1ozzxIyt-DJmW-dyVZUVwxInFydK9E~1WU6Fq~R0aYxVSpEa4LAQoO0RVO0Ec70Mcr-guoDunvniAszeYhV-AVhn~yeVj~LuhSTF8SpEh8i3Yo4ylcdtzhaBFBR-8oDcw1G1NG69T9ruY0AfFl1eoAw8gx1LHSxpG~5pgG~omUhNF5Bc1Hml2Ti~~D-WcWntqJ9bg~58ovuN9zsk-zuH8Z3uydfgY9~VlMyohyTbvzwxU1Dh-uPIRv8wV0nZHyTH~CzEY30BqTrk3ElAzp3U2X7k8S3IlE1ezPYl3WH5QiMSGcBXWPRsSIFhJAvVBf-h6Qg__"
            alt=""  
          />
        </div>
        <BackPicture />
      </div>

      <Benefits/>

      <div className="flex flex-col gap-[24px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[8px]">
            <Star/>
            <p className="text-[22px] text-black">Үндсэн хоол</p>
          </div>
          <button className="text-[#18BA51] text-[14px]">
            Бүгдийг харах
          </button>
        </div>
        <Foods/>
      </div>
        
      <Footer />
    </div>
  );
}
