import Image from "../../../node_modules/next/image";

const Resume = () => {

    const handleDownload = () => {
        const resumeUrl = './assets/doc/saumay_ats_latest.pdf';
        window.open(resumeUrl, '_blank');
      };

      
  return (
    <main className="flex flex-col items-center p-24">
     
        <div className="flex flex-col items-center justify-center text-center">
            <button className="resume-button" onClick={handleDownload}>
                    <Image
                src={'./assets/icons/cv.svg'}
                alt={'file icon'}
                width={100}
                height={100}
                style={{width: 50, marginBottom:10}}
                />
                View My Resume
            </button>
        </div>
        
      
    </main>
  );
};

export default Resume;
