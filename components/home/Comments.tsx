import comments from "../../json/comments.json";

export default function Comments() {
  return (
    <div className="mx-[12vw] mb-20">
      <p className="text-[clamp(18px, 2.5vw, 24px)] font-semibold mb-20">
        Хүндэт харилцагчдын сэтгэгдэл
      </p>
      <div className="flex items-center justify-between">
        {comments.map((item, index) => (
          <div
            key={index}
            className="w-[340px] h-[410px] rounded-xl p-8 border border-[#f8f8f8]"
            style={{ boxShadow: "20px 20px 40px 10px rgba(0, 0, 0, 0.07)" }}
          >
            <div className="mb-6 text-center h-[219px] overflow-hidden flex items-center justify-center">
              <p
                className={`text-[#2F353A] ${
                  index === 0
                    ? "text-[11.2px]"
                    : index === 1
                    ? "text-[14px]"
                    : "text-base"
                }`}
              >
                {item.comments}
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1E2228] text-[clamp(14px, 1.5vw, 18px)]">
                {item.name}
              </p>
              <p className="text-sm text-[#1E2228] w-[160px] my-3 text-[clamp(12px, 1.2vw, 16px)]">
                {item.prof}
              </p>
              <p className="text-sm text-[#1E2228] font-semibold text-[clamp(12px, 1.2vw, 16px)]">
                {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
